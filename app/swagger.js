const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Secure API",
      version: "1.0.0",
      description:
        "Production-style DevSecOps backend API built with Node.js, PostgreSQL, Cloud Run and JWT authentication.",
    },

    servers: [
      {
        url: process.env.K_SERVICE
          ? "https://secure-api-1097545195926.us-central1.run.app"
          : "http://localhost:3000",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./index.js"],
};

module.exports = swaggerJsdoc(options);