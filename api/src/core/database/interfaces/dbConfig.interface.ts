export interface IDatabaseConfigAttributes {
  name?: string
  type: string
  host: string
  port?: string
  username: string
  password: string
  database: string
  synchronize?: boolean
  logging?: boolean
  entities: string
  migrations: string
  migrationsTableName: string
  subscribers?: string
  ssl?: boolean
  /**
   * The Postgres extension to use to generate UUID columns. Defaults to uuid-ossp.
   * If pgcrypto is selected, TypeORM will use the gen_random_uuid() function from this extension.
   * If uuid-ossp is selected, TypeORM will use the uuid_generate_v4() function from this extension.
   */
  readonly uuidExtension?: string
  cli: {
    entitiesDir: string,
    migrationsDir: string
    subscribersDir: string
  }
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes
  test: IDatabaseConfigAttributes
  production: IDatabaseConfigAttributes
}
