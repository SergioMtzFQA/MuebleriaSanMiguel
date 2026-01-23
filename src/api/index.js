import app from './app.js';
import { sequelize } from './database.js';
import { ensureDbExists } from './ensure-db.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5001;

async function startServer() {
    try {
        await ensureDbExists();
        await sequelize.sync({ alter: true });
        console.log('Database synced successfully.');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
    }
}

startServer();
