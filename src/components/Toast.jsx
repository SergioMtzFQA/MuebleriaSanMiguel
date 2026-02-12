import { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast toast-${type}`}>
            <div className="toast-content">
                <span className="toast-icon">
                    {type === 'success' ? <CheckCircle size={24} color="#2ecc71" /> : <XCircle size={24} color="#e74c3c" />}
                </span>
                <span className="toast-message">{message}</span>
            </div>
            <button className="toast-close" onClick={onClose} aria-label="Cerrar">
                <X size={18} />
            </button>
        </div>
    );
};

export default Toast;
