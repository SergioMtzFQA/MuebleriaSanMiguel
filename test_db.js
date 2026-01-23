import { sequelize } from './src/api/database.js';
import Product from './src/api/models/Product.js';

async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Sync specifically for this test if needed, but app does it too.
        // Let's rely on app logic or force sync here to be safe for testing isolate.
        await sequelize.sync({ force: true });

        const product = await Product.create({
            name: 'Test Chair',
            category: 'Chairs',
            price: 150,
            description: 'A comfortable test chair',
            stock: 10
        });
        console.log('Product created:', product.toJSON());

        const found = await Product.findByPk(product.id);
        console.log('Product found:', found.name);

        if (found.name === 'Test Chair') {
            console.log('Verification PASSED');
        } else {
            console.log('Verification FAILED');
        }
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
}

test();
