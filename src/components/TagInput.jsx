import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import './TagInput.css';

const TagInput = ({ tags = [], onTagsChange, placeholder = "Agregar tag..." }) => {
    const [input, setInput] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        } else if (e.key === 'Backspace' && !input && tags.length > 0) {
            removeTag(tags.length - 1);
        }
    };

    const addTag = () => {
        const trimmedInput = input.trim();
        if (trimmedInput && !tags.includes(trimmedInput)) {
            onTagsChange([...tags, trimmedInput]);
            setInput('');
        }
    };

    const removeTag = (indexToRemove) => {
        onTagsChange(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="tag-input-container">
            <div className="tags-list">
                {tags.map((tag, index) => (
                    <span key={index} className="tag-item">
                        {tag}
                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="tag-remove-btn"
                        >
                            <X size={14} />
                        </button>
                    </span>
                ))}
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={tags.length === 0 ? placeholder : ""}
                        className="tag-input-field"
                    />
                    <button
                        type="button"
                        className="tag-add-btn"
                        onClick={addTag}
                        disabled={!input.trim()}
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>
            <small className="tag-help-text">Presiona Enter o Coma para agregar</small>
        </div>
    );
};

export default TagInput;
