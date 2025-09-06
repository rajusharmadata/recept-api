import { ENV } from './src/config/env';

export default {
  schema: './src/db/schema.js',
  out: './src/db/migration',
  dialect: 'postgresql',

    url: ENV.DATABASE_URL, // ✅ must be correct Neon/Postgres URL

};
