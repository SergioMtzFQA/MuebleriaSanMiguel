import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setError('');
        setLoading(true);
        const success = await login(username, password);

        if (success) {
            navigate('/products');
            // Keep loading true while navigating
        } else {
            setLoading(false);
            setError('Credenciales inválidas');
        }
    };

    return (
        <div className="login-page container">
            <div className="login-card">
                <h2>Acceso Administrativo</h2>
                {error && <div className="alert-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        {loading ? <Loader size="small" /> : 'Iniciar Sesión'}
                    </button>
                    <p className="hint">Usar: admin / admin123</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
