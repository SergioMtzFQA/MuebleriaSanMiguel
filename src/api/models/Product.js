import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    description: {
        type: DataTypes.TEXT
    },
    descriptionImages: {
        type: DataTypes.JSONB,
        defaultValue: []
    },
    materials: {
        type: DataTypes.JSONB,
        defaultValue: []
    },
    variants: {
        type: DataTypes.JSONB,
        defaultValue: []
    },
    images: {
        type: DataTypes.JSONB,
        defaultValue: []
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    isFeatured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'products',
    timestamps: true
});

export default Product;
