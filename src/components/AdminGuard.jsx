import React, { useEffect } from 'react';
import { useLocation, useNavigate, useBlocker } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminGuard = ({ children }) => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // 1. Browser Refresh/Close Blocking
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (user) {
                e.preventDefault();
                e.returnValue = ''; // Standard for Chrome/Firefox
                return '';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [user]);

    // 2. Navigation Blocking (Back button / URL change)
    // Note: useBlocker might require Data Router (createBrowserRouter)
    // If this fails/errors, we might need to fallback or refactor main.jsx
    let blocker = useBlocker(
        ({ currentLocation, nextLocation }) =>
            user &&
            currentLocation.pathname !== nextLocation.pathname &&
            !nextLocation.pathname.startsWith('/login') // Allow redirect to login
    );

    useEffect(() => {
        if (blocker.state === "blocked") {
            const confirmed = window.confirm(
                "¿Estás seguro que deseas salir? Tu sesión se cerrará por seguridad."
            );
            if (confirmed) {
                logout(); // Logout first
                blocker.proceed(); // Then go
            } else {
                blocker.reset(); // Stay
            }
        }
    }, [blocker, logout]);

    return children;
};

export default AdminGuard;
