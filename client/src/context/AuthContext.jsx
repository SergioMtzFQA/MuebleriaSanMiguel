import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for persistent login
        const storedUser = localStorage.getItem('adminUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (username, password) => {
        // Simple mock authentication for prototype
        // In production, verify with backend API
        if (username === 'admin' && password === 'admin123') {
            const userData = { username: 'admin', role: 'admin' };
            setUser(userData);
            localStorage.setItem('adminUser', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('adminUser');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
