import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for persistent login
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (token && storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                return false;
            }

            const data = await response.json();
            setUser(data.user);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    const getToken = () => localStorage.getItem('token');

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, getToken }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
