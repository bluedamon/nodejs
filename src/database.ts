import knex from 'knex';

export const knexConfig = knex({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./tmp/app.db"
    }
  });
  