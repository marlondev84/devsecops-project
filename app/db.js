require("dotenv").config();

const { Pool } = require("pg");

const isCloudRun = !!process.env.K_SERVICE;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  ...(isCloudRun
    ? {
        host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
      }
    : {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
      }),
});

module.exports = pool;