const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Product = require('../src/api/models/Product');

// Multer Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 25 * 1024 * 1024 // 25MB
    }
});

// Helper to parse comma or JSON list
const parseList = (input) => {
    try {
        return typeof input === 'string' ? JSON.parse(input) : input;
    } catch (e) {
        return typeof input === 'string' ? input.split(',').map(s => s.trim()).filter(s => s) : [];
    }
};

// GET All
router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll({ order: [['createdAt', 'DESC']] });
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// GET One
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ message: 'Error fetching product' });
    }
});

// CREATE
router.post('/', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'descriptionImages', maxCount: 10 }]), async (req, res) => {
    try {
        const { name, category, price, description, materials, colors, stock, isFeatured } = req.body;

        const imageUrls = req.files['images'] ? req.files['images'].map(file => `/uploads/${file.filename}`) : [];
        const descriptionImageUrls = req.files['descriptionImages'] ? req.files['descriptionImages'].map(file => `/uploads/${file.filename}`) : [];
        const parsedMaterials = parseList(materials);
        const parsedColors = parseList(colors);

        const variants = [{ name: "Color", options: parsedColors }];

        const newProduct = await Product.create({
            name,
            category,
            price: parseFloat(price) || 0,
            description,
            materials: parsedMaterials,
            variants: variants,
            images: imageUrls,
            descriptionImages: descriptionImageUrls,
            stock: parseInt(stock) || 0,
            isFeatured: isFeatured === 'true' || isFeatured === true
        });

        res.status(201).json(newProduct);
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(500).json({ message: 'Error creating product' });
    }
});

// UPDATE
router.put('/:id', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'descriptionImages', maxCount: 10 }]), async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const { name, category, price, description, materials, colors, stock, existingImages, existingDescriptionImages, isFeatured } = req.body;

        // Handle Images
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
        const newDescriptionImageUrls = req.files['descriptionImages'] ? req.files['descriptionImages'].map(file => `/uploads/${file.filename}`) : [];
        let keptDescriptionImages = [];
        if (existingDescriptionImages) {
            keptDescriptionImages = Array.isArray(existingDescriptionImages) ? existingDescriptionImages : [existingDescriptionImages];
        }
        // Handle potential stringified array
        if (keptDescriptionImages.length === 1 && keptDescriptionImages[0].startsWith('[')) {
            try { keptDescriptionImages = JSON.parse(keptDescriptionImages[0]); } catch (e) { }
        }

        const finalDescriptionImages = [...keptDescriptionImages, ...newDescriptionImageUrls];

        const parsedMaterials = parseList(materials);
        const parsedColors = parseList(colors);
        const variants = [{ name: "Color", options: parsedColors }];

        await product.update({
            name,
            category,
            price: parseFloat(price) || 0,
            description,
            materials: parsedMaterials,
            variants,
            stock: parseInt(stock) || 0,
            images: finalImages,
            descriptionImages: finalDescriptionImages,
            isFeatured: isFeatured === 'true' || isFeatured === true
        });

        res.json(product);
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ message: 'Error updating product' });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
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
});

module.exports = router;
