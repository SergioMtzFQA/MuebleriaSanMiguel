import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Admin.css';

const Admin = () => {
    const { logout } = useAuth();

    // State
    const [products, setProducts] = useState([]);
    const [view, setView] = useState('list'); // 'list' | 'form'
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Form State
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '', category: '', price: '', description: '',
        materials: '', colors: '', stock: ''
    });
    const [existingImages, setExistingImages] = useState([]); // URLs of images already on server
    const [newImages, setNewImages] = useState([]); // File objects for new uploads

    // Fetch Products on load or after update
    const fetchProducts = () => {
        setLoading(true);
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // --- Handlers ---

    const handleCreateNew = () => {
        setEditingId(null);
        setFormData({
            name: '', category: '', price: '', description: '',
            materials: '', colors: '', stock: ''
        });
        setExistingImages([]);
        setNewImages([]);
        setMessage('');
        setView('form');
    };

    const handleEdit = (product) => {
        setEditingId(product.id);
        setFormData({
            name: product.name,
            category: product.category,
            price: product.price,
            description: product.description,
            materials: Array.isArray(product.materials) ? product.materials.join(', ') : product.materials,
            colors: product.variants && product.variants[0] ? product.variants[0].options.join(', ') : '',
            stock: product.stock || 0
        });
        setExistingImages(product.images || []);
        setNewImages([]);
        setMessage('');
        setView('form');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Seguro que deseas eliminar este producto?')) return;

        try {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
            if (res.ok) {
                fetchProducts(); // Refresh list
                setMessage('Producto eliminado.');
            } else {
                alert('Error al eliminar');
            }
        } catch (e) {
            alert('Error de red');
        }
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNewImageChange = (e) => {
        setNewImages(e.target.files);
    };

    const handleRemoveExistingImage = (imgUrl) => {
        setExistingImages(prev => prev.filter(url => url !== imgUrl));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const data = new FormData();
        data.append('name', formData.name);
        data.append('category', formData.category);
        data.append('price', formData.price);
        data.append('description', formData.description);
        // Be flexible with comma separated lists
        data.append('materials', JSON.stringify(formData.materials.toString().split(',').map(s => s.trim())));
        data.append('colors', JSON.stringify(formData.colors.toString().split(',').map(s => s.trim())));
        data.append('stock', formData.stock);

        // Existing Images (send as JSON array string for backend to parse)
        // If editing, we send the LIST of images we want to KEEP
        if (existingImages.length > 0) {
            existingImages.forEach(img => data.append('existingImages', img));
        }

        // New Images
        for (let i = 0; i < newImages.length; i++) {
            data.append('images', newImages[i]);
        }

        const url = editingId ? `/api/products/${editingId}` : '/api/products';
        const method = editingId ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method: method,
                body: data,
            });
            if (res.ok) {
                setMessage(editingId ? 'Producto actualizado.' : 'Producto creado.');
                fetchProducts(); // Refresh data
                setTimeout(() => setView('list'), 1500); // Go back to list
            } else {
                setMessage('Error al guardar.');
            }
        } catch (error) {
            setMessage('Error de red.');
        } finally {
            setLoading(false);
        }
    };

    // --- Views ---

    const renderList = () => (
        <div className="product-list-view">
            <div className="list-actions">
                <button className="btn btn-primary" onClick={handleCreateNew}>+ Nuevo Producto</button>
            </div>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td>
                                <img
                                    src={p.images && p.images[0] ? p.images[0] : 'https://via.placeholder.com/50'}
                                    alt="thumb"
                                    className="table-thumb"
                                />
                            </td>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>${p.price}</td>
                            <td>{p.stock || 0}</td>
                            <td>
                                <button className="btn-icon edit" onClick={() => handleEdit(p)}>✏️</button>
                                <button className="btn-icon delete" onClick={() => handleDelete(p.id)}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                    {products.length === 0 && <tr><td colSpan="6" style={{ textAlign: 'center' }}>No hay productos.</td></tr>}
                </tbody>
            </table>
        </div>
    );

    const renderForm = () => (
        <div className="product-form-view">
            <button className="btn-link back-btn" onClick={() => setView('list')}>&larr; Volver al Listado</button>
            <h2>{editingId ? 'Editar Producto' : 'Nuevo Producto'}</h2>

            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label>Nombre</label>
                    <input name="name" value={formData.name} onChange={handleFormChange} required />
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label>Categoría</label>
                        <input name="category" value={formData.category} onChange={handleFormChange} required />
                    </div>
                    <div className="form-group">
                        <label>Precio</label>
                        <input name="price" type="number" value={formData.price} onChange={handleFormChange} required />
                    </div>
                    <div className="form-group">
                        <label>Stock</label>
                        <input name="stock" type="number" value={formData.stock} onChange={handleFormChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label>Descripción</label>
                    <textarea name="description" value={formData.description} onChange={handleFormChange} required rows="3" />
                </div>

                <div className="form-group">
                    <label>Materiales (comma sep)</label>
                    <input name="materials" value={formData.materials} onChange={handleFormChange} />
                </div>

                <div className="form-group">
                    <label>Colores (comma sep)</label>
                    <input name="colors" value={formData.colors} onChange={handleFormChange} />
                </div>

                {/* Image Management */}
                <div className="form-group">
                    <label>Imágenes Actuales</label>
                    <div className="existing-images-grid">
                        {existingImages.map((img, idx) => (
                            <div key={idx} className="image-preview">
                                <img src={img} alt="prev" />
                                <button type="button" className="remove-img-btn" onClick={() => handleRemoveExistingImage(img)}>X</button>
                            </div>
                        ))}
                        {existingImages.length === 0 && <p className="text-muted">No hay imágenes guardadas.</p>}
                    </div>
                </div>

                <div className="form-group">
                    <label>Agregar Nuevas Imágenes</label>
                    <input type="file" onChange={handleNewImageChange} accept="image/*" multiple />
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                    {loading ? 'Guardando...' : (editingId ? 'Actualizar Producto' : 'Crear Producto')}
                </button>
            </form>
        </div>
    );

    return (
        <div className="admin-page container">
            <div className="admin-header">
                <h1>Dashboard Admin</h1>
                <div className="header-actions">
                    <span className="user-badge">Admin</span>
                    <button onClick={logout} className="btn-link logout-btn">Salir</button>
                </div>
            </div>

            {message && <div className={`alert ${message.includes('Error') ? 'alert-error' : 'alert-success'}`}>{message}</div>}

            {view === 'list' ? renderList() : renderForm()}
        </div>
    );
};

export default Admin;
