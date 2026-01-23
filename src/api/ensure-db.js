import pg from 'pg';
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } from './init-db.js';

const { Client } = pg;

export async function ensureDbExists() {
    const client = new Client({
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        database: 'postgres' // Connect to default database
    });

    try {
        await client.connect();

        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [DB_NAME]);

        if (res.rowCount === 0) {
            console.log(`Database "${DB_NAME}" not found. Creating...`);
            await client.query(`CREATE DATABASE "${DB_NAME}"`);
            console.log(`Database "${DB_NAME}" created successfully.`);
        } else {
            console.log(`Database "${DB_NAME}" already exists.`);
        }
    } catch (err) {
        console.error('Error checking/creating database:', err);
        throw err;
    } finally {
        await client.end();
    }
}
