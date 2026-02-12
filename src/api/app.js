import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from 'uploads' directory
// Assuming the app is run from the project root, uploads is at the root.
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

// Routes
import authRoutes from './routes/auth.js';
app.use('/api/auth', authRoutes);

import productsRouter from './routes/products.js';
app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
    res.send('Sillas San Miguel API Running (PostgreSQL Backend Structure)');
});

export default app;
