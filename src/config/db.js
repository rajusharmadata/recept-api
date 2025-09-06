import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '../db/schema.js';
import { ENV } from './env.js';

// create neon client
const sql = neon(ENV.DATABASE_URL);

// pass sql + schema into drizzle
export const db = drizzle(sql, { schema });
