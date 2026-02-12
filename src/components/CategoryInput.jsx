import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './CategoryInput.css';

const CategoryInput = ({ value, onChange, suggestions = [], placeholder = "Selecciona o escribe..." }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(value);
    const wrapperRef = useRef(null);

    // Sync internal state with external value prop
    useEffect(() => {
        setSearchTerm(value);
    }, [value]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setSearchTerm(newValue);
        onChange(newValue);
        setIsOpen(true);
    };

    const handleSelectOption = (option) => {
        setSearchTerm(option);
        onChange(option);
        setIsOpen(false);
    };

    const handleFocus = () => {
        setIsOpen(true);
    };

    // Filter suggestions based on input
    const filteredSuggestions = suggestions.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="category-input-wrapper" ref={wrapperRef}>
            <div className="category-input-container">
                <input
                    type="text"
                    className="category-input-field"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    placeholder={placeholder}
                    required
                />
                <ChevronDown size={18} className={`category-input-icon ${isOpen ? 'open' : ''}`} />
            </div>

            {isOpen && suggestions.length > 0 && (
                <ul className="category-suggestions-list">
                    {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((item, index) => (
                            <li
                                key={index}
                                className={`category-suggestion-item ${item === value ? 'active' : ''}`}
                                onClick={() => handleSelectOption(item)}
                            >
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="no-suggestions">
                            Nueva categoría: "<strong>{searchTerm}</strong>"
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default CategoryInput;
