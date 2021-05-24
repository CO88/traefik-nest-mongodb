import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

const env = process.env.NODE_ENV || 'development';
config();

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: ['dist/**/*.orm-entity{.js,.ts}'],
    ssl: env === 'production',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin',
};
