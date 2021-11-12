// import * as dotenv from 'dotenv'
import { IDatabaseConfig } from './interfaces/dbConfig.interface'
import { DEVELOPMENT, PRODUCTION, TEST } from "../config/constants";

// dotenv.config({ path: '.env.dev' })

// const entitiesDir = 'src/entities'
// const entitiesPattern = '/**/*.entity{.ts,.js}'
// const commonPattern = '/**/*{.ts,.js}'
// const entities = [entitiesDir + entitiesPattern, 'dist/' + entitiesDir + entitiesPattern]
//
// const subscribersDir = 'src/subscribers'
// const subscribers = [subscribersDir + commonPattern, 'dist/' + subscribersDir + commonPattern]
//
// const migrationsDir = 'src/migrations'
// const migrations = [migrationsDir + commonPattern, 'dist/' + migrationsDir + commonPattern]

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        host: process.env.TYPEORM_HOST,
        port: process.env.TYPEORM_PORT,
        type: process.env.TYPEORM_CONNECTION,
        synchronize: false,
        entities: process.env.TYPEORM_ENTITIES,
        uuidExtension: process.env.TYPEORM_UUID_EXTENSION,
        migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
        migrations: process.env.TYPEORM_MIGRATIONS,
        subscribers: process.env.TYPEORM_SUBSCRIBERS,
        cli: {
            entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
            migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
            subscribersDir: process.env.TYPEORM_SUBSCRIBERS_DIR
        }
    },
    test: {
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        host: process.env.TYPEORM_HOST,
        port: process.env.TYPEORM_PORT,
        type: process.env.TYPEORM_CONNECTION,
        synchronize: false,
        entities: process.env.TYPEORM_ENTITIES,
        uuidExtension: process.env.TYPEORM_UUID_EXTENSION,
        migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
        migrations: process.env.TYPEORM_MIGRATIONS,
        subscribers: process.env.TYPEORM_SUBSCRIBERS,
        cli: {
            entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
            migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
            subscribersDir: process.env.TYPEORM_SUBSCRIBERS_DIR
        }
    },
    production: {
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        host: process.env.TYPEORM_HOST,
        port: process.env.TYPEORM_PORT,
        type: process.env.TYPEORM_CONNECTION,
        synchronize: false, // Always false in production, otherwise you will lose your data
        entities: process.env.TYPEORM_ENTITIES,
        ssl: true,
        uuidExtension: process.env.TYPEORM_UUID_EXTENSION,
        migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
        migrations: process.env.TYPEORM_MIGRATIONS,
        subscribers: process.env.TYPEORM_SUBSCRIBERS,
        cli: {
            entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
            migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
            subscribersDir: process.env.TYPEORM_SUBSCRIBERS_DIR
        }
    },
}

export let config
switch (process.env.NODE_ENV) {
    case DEVELOPMENT:
        config = databaseConfig.development
        break
    case TEST:
        config = databaseConfig.test
        break
    case PRODUCTION:
        config = databaseConfig.production
        break
    default:
        config = databaseConfig.development
}

