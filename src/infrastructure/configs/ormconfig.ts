import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

const env = process.env.NODE_ENV || 'development';
config();

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: ['dist/**/*.orm-entity.{ts,js}'],
    ssl: env === 'production',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin',
};

// postgress config
// export const typeormConfig: TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: Number.parseInt(process.env.DB_PORT as string, 10),
//     database: process.env.DB_NAME,
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     entities: ['dist/**/*.orm-entity.{ts,js}'],
//     ssl: env === 'production',
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     // authSource: 'admin',
// };
