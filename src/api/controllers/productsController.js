import Product from '../models/Product.js';
import path from 'path';

const parseList = (input) => {
    try {
        const parsed = typeof input === 'string' ? JSON.parse(input) : input;
        return Array.isArray(parsed) ? parsed.map(item => String(item).toUpperCase()) : [];
    } catch (e) {
        return typeof input === 'string'
            ? input.split(',').map(s => s.trim().toUpperCase()).filter(s => s)
            : [];
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ order: [['id', 'ASC']] });
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Error fetching products' });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ message: 'Error fetching product' });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, category, price, description, materials, colors, stock, isFeatured } = req.body;

        const mainImages = req.files['images'] ? req.files['images'].map(file => `/uploads/${file.filename}`) : [];
        const descImages = req.files['descriptionImages'] ? req.files['descriptionImages'].map(file => `/uploads/${file.filename}`) : [];

        const parsedMaterials = parseList(materials);
        const parsedColors = parseList(colors);

        const variants = [{ name: "Color", options: parsedColors }];

        const newProduct = await Product.create({
            name,
            category,
            price: parseFloat(price) || 0,
            description,
            descriptionImages: descImages,
            materials: parsedMaterials,
            variants: variants,
            images: mainImages,
            stock: parseInt(stock) || 0,
            isFeatured: isFeatured === 'true' || isFeatured === true
        });

        res.status(201).json(newProduct);
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(500).json({ message: 'Error creating product' });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const { name, category, price, description, materials, colors, stock, existingImages, existingDescriptionImages, isFeatured } = req.body;

        // Handle Main Images
        const newImageUrls = req.files['images'] ? req.files['images'].map(file => `/uploads/${file.filename}`) : [];
        let keptImages = [];
        if (existingImages) {
            keptImages = Array.isArray(existingImages) ? existingImages : [existingImages];
        }
        if (keptImages.length === 1 && keptImages[0].startsWith('[')) {
            try { keptImages = JSON.parse(keptImages[0]); } catch (e) { }
        }
        const finalImages = [...keptImages, ...newImageUrls];

        // Handle Description Images
        const newDescImageUrls = req.files['descriptionImages'] ? req.files['descriptionImages'].map(file => `/uploads/${file.filename}`) : [];
        let keptDescImages = [];
        if (existingDescriptionImages) {
            keptDescImages = Array.isArray(existingDescriptionImages) ? existingDescriptionImages : [existingDescriptionImages];
        }
        if (keptDescImages.length === 1 && keptDescImages[0].startsWith('[')) {
            try { keptDescImages = JSON.parse(keptDescImages[0]); } catch (e) { }
        }
        const finalDescImages = [...keptDescImages, ...newDescImageUrls];

        const parsedMaterials = parseList(materials);
        const parsedColors = parseList(colors);
        const variants = [{ name: "Color", options: parsedColors }];

        await product.update({
            name,
            category,
            price: parseFloat(price) || 0,
            description,
            descriptionImages: finalDescImages,
            materials: parsedMaterials,
            variants,
            stock: parseInt(stock) || 0,
            images: finalImages,
            isFeatured: isFeatured === 'true' || isFeatured === true
        });

        res.json(product);
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ message: 'Error updating product' });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.destroy();
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ message: 'Error deleting product' });
    }
};
