import { sequelize } from './database.js';
import Product from './models/Product.js'; // Ensure model is loaded

async function initDb() {
    try {
        await sequelize.sync({ force: true });
        console.log('Database initialized successfully (Tables dropped and recreated).');
        process.exit(0);
    } catch (err) {
        console.error('Error initializing database:', err);
        process.exit(1);
    }
}

initDb();
