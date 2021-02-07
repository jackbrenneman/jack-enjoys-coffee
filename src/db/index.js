/**
 * The data access file. Any queries will import functions from this file.
 */
import pg from 'pg';
import { config } from 'dotenv';

config();
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// The main query function used to hit any DB.
export const query = (text, params = []) => pool.query(text, params);
