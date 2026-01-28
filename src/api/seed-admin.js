import { sequelize } from './database.js';
import User from './models/User.js';

async function seedAdmin() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        const adminExists = await User.findOne({ where: { username: 'admin' } });
        if (adminExists) {
            console.log('Admin user already exists.');
        } else {
            await User.create({
                username: 'admin',
                password: 'admin123'
            });
            console.log('Admin user created successfully.');
        }
    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        await sequelize.close();
    }
}

seedAdmin();
