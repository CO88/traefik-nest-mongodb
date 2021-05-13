import { typeormConfig } from './ormconfig';

const database = {
    ...typeormConfig,
    entities: [],
    migrationsTableName: [],
    migrations: [],
    seeds: [],
    factories: [],
};

export = database;
