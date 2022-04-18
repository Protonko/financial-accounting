module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/entities/**/*{ .ts,.js}'],
  migrations: ['dist/migrations/**/*{ .ts,.js}'],
  migrationsTableName: 'migrations_history',
  synchronize: true,
  cli: {
    migrationsDir: 'migrations',
  },
}
