import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Admin.css';

const Admin = () => {
    const { logout, getToken } = useAuth();

    // State
    const [products, setProducts] = useState([]);
    const [view, setView] = useState('list'); // 'list' | 'form'
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Start of Admin.jsx modification
    // Form State
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '', category: '', description: '',
        materials: '', colors: '', isFeatured: false
    });
    const [existingImages, setExistingImages] = useState([]); // URLs of images already on server
    const [newImages, setNewImages] = useState([]); // File objects for new uploads
    const [existingDescriptionImages, setExistingDescriptionImages] = useState([]);
    const [newDescriptionImages, setNewDescriptionImages] = useState([]);

    // Fetch Products on load or after update
    const fetchProducts = () => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_BASE_URL}/products`)
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

    const [uploadProgress, setUploadProgress] = useState(0);

    // --- Handlers ---

    const handleCreateNew = () => {
        setEditingId(null);
        setFormData({
            name: '', category: '', description: '',
            materials: '', colors: '', isFeatured: false
        });
        setExistingImages([]);
        setNewImages([]);
        setExistingDescriptionImages([]);
        setNewDescriptionImages([]);
        setMessage('');
        setUploadProgress(0); // Reset progress
        setView('form');
    };

    const handleEdit = (product) => {
        setEditingId(product.id);
        setFormData({
            name: product.name,
            category: product.category,
            description: product.description,
            materials: Array.isArray(product.materials) ? product.materials.join(', ') : product.materials,
            colors: product.variants && product.variants[0] ? product.variants[0].options.join(', ') : '',
            isFeatured: product.isFeatured || false
        });
        setExistingImages(product.images || []);
        setExistingDescriptionImages(product.descriptionImages || []);
        setNewImages([]);
        setNewDescriptionImages([]);
        setMessage('');
        setUploadProgress(0); // Reset progress
        setView('form');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Seguro que deseas eliminar este producto?')) return;

        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });
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
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleNewImageChange = (e) => {
        if (e.target.files) {
            setNewImages(prev => [...prev, ...Array.from(e.target.files)]);
        }
    };

    const handleRemoveNewImage = (index) => {
        setNewImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleRemoveExistingImage = (imgUrl) => {
        setExistingImages(prev => prev.filter(url => url !== imgUrl));
    };

    // Description Image Handlers
    const handlePaste = (e) => {
        const items = (e.clipboardData || e.originalEvent.clipboardData).items;
        let files = [];
        for (let index in items) {
            const item = items[index];
            if (item.kind === 'file' && item.type.startsWith('image/')) {
                const blob = item.getAsFile();
                files.push(blob);
            }
        }
        if (files.length > 0) {
            setNewDescriptionImages(prev => [...prev, ...files]);
        }
    };

    const handleRemoveNewDescImage = (index) => {
        setNewDescriptionImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleRemoveExistingDescImage = (imgUrl) => {
        setExistingDescriptionImages(prev => prev.filter(url => url !== imgUrl));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setUploadProgress(0);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('category', formData.category);
        data.append('price', '0'); // Default price
        data.append('description', formData.description);
        // Be flexible with comma separated lists
        data.append('materials', JSON.stringify(formData.materials.toString().split(',').map(s => s.trim())));
        data.append('colors', JSON.stringify(formData.colors.toString().split(',').map(s => s.trim())));
        data.append('stock', '0'); // Default stock
        data.append('isFeatured', formData.isFeatured);

        // Existing Images
        if (existingImages.length > 0) {
            existingImages.forEach(img => data.append('existingImages', img));
        }

        // New Images
        for (let i = 0; i < newImages.length; i++) {
            data.append('images', newImages[i]);
        }

        // Existing Description Images
        if (existingDescriptionImages.length > 0) {
            existingDescriptionImages.forEach(img => data.append('existingDescriptionImages', img));
        }

        // New Description Images
        for (let i = 0; i < newDescriptionImages.length; i++) {
            data.append('descriptionImages', newDescriptionImages[i]);
        }

        const url = editingId ? `${import.meta.env.VITE_BASE_URL}/products/${editingId}` : `${import.meta.env.VITE_BASE_URL}/products`;
        const method = editingId ? 'PUT' : 'POST';

        // Use XMLHttpRequest for progress tracking
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Authorization', `Bearer ${getToken()}`);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                setUploadProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                setMessage(editingId ? 'Producto actualizado.' : 'Producto creado.');
                fetchProducts(); // Refresh data
                setTimeout(() => setView('list'), 1500); // Go back to list
            } else {
                setMessage('Error al guardar.');
            }
            setLoading(false);
            setUploadProgress(0);
        };

        xhr.onerror = () => {
            setMessage('Error de red.');
            setLoading(false);
            setUploadProgress(0);
        };

        xhr.send(data);
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
                            <td>
                                <button className="btn-icon edit" onClick={() => handleEdit(p)}>✏️</button>
                                <button className="btn-icon delete" onClick={() => handleDelete(p.id)}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                    {products.length === 0 && <tr><td colSpan="4" style={{ textAlign: 'center' }}>No hay productos.</td></tr>}
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

                <div className="form-group">
                    <label>Categoría</label>
                    <input name="category" value={formData.category} onChange={handleFormChange} required />
                </div>

                <div className="form-group">
                    <label>Descripción (Pega imágenes aquí)</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        onPaste={handlePaste}
                        required
                        rows="5"
                        placeholder="Escribe la descripción del producto. Puedes pegar imágenes (Ctrl+V) directamente aquí."
                    />
                    {/* Description Images Preview */}
                    <div className="desc-images-preview" style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {existingDescriptionImages.map((img, idx) => (
                            <div key={`existing-${idx}`} className="image-preview" style={{ position: 'relative', width: '80px', height: '80px' }}>
                                <img src={img} alt="desc-prev" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                                <button type="button" className="remove-img-btn" onClick={() => handleRemoveExistingDescImage(img)} style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', border: 'none', width: '20px', height: '20px', cursor: 'pointer' }}>X</button>
                            </div>
                        ))}
                        {newDescriptionImages.map((file, idx) => (
                            <div key={`new-${idx}`} className="image-preview" style={{ position: 'relative', width: '80px', height: '80px' }}>
                                <img src={URL.createObjectURL(file)} alt="desc-prev-new" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                                <button type="button" className="remove-img-btn" onClick={() => handleRemoveNewDescImage(idx)} style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', border: 'none', width: '20px', height: '20px', cursor: 'pointer' }}>X</button>
                            </div>
                        ))}
                    </div>
                    {newDescriptionImages.length > 0 && <small style={{ color: 'green' }}>{newDescriptionImages.length} imagen(es) nuevas para la descripción.</small>}
                </div>

                <div className="form-group">
                    <label className="checkbox-group">
                        <input
                            type="checkbox"
                            name="isFeatured"
                            checked={formData.isFeatured}
                            onChange={handleFormChange}
                        />
                        <span>Producto Destacado (Mostrar en Inicio)</span>
                    </label>
                </div>

                <div className="form-group">
                    <label>Materiales (separados por coma)</label>
                    <input name="materials" value={formData.materials} onChange={handleFormChange} placeholder="Ej: Madera de roble, Tela premium..." />
                </div>

                <div className="form-group">
                    <label>Colores (separados por coma)</label>
                    <input name="colors" value={formData.colors} onChange={handleFormChange} placeholder="Ej: Rojo, Azul, Beige..." />
                </div>

                {/* Image Management */}
                <div className="form-group">
                    <label>Imágenes Actuales del Producto</label>
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
                    <label>Agregar Nuevas Imágenes del Producto</label>
                    <div className="file-input-wrapper">
                        <input type="file" onChange={handleNewImageChange} accept="image/*" multiple />
                        <div className="file-input-label">
                            Arrastra imágenes aquí o haz clic para seleccionar
                        </div>
                    </div>
                    {/* New Images Preview */}
                    <div className="new-images-preview" style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {newImages.map((file, idx) => (
                            <div key={`new-main-${idx}`} className="image-preview" style={{ position: 'relative', width: '80px', height: '80px' }}>
                                <img src={URL.createObjectURL(file)} alt="new-prev" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                                <button type="button" className="remove-img-btn" onClick={() => handleRemoveNewImage(idx)} style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', border: 'none', width: '20px', height: '20px', cursor: 'pointer' }}>X</button>
                            </div>
                        ))}
                    </div>
                    {newImages.length > 0 && <small style={{ color: 'green', display: 'block', marginTop: '5px' }}>{newImages.length} imagen(es) seleccionada(s).</small>}
                </div>

                {uploadProgress > 0 && (
                    <div className="progress-bar-container" style={{ margin: '20px 0', width: '100%', background: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
                        <div
                            className="progress-bar"
                            style={{
                                width: `${uploadProgress}%`,
                                background: '#4caf50',
                                height: '20px',
                                transition: 'width 0.2s',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '12px',
                                lineHeight: '20px'
                            }}
                        >
                            {uploadProgress}%
                        </div>
                    </div>
                )}

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
