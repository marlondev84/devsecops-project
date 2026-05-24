require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const express = require("express");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("./db");

const app = express();

function logEvent(severity, event, metadata = {}) {
  console.log(
    JSON.stringify({
      severity,
      event,
      timestamp: new Date().toISOString(),
      ...metadata,
    })
  );
}

app.use(helmet());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
const SECRET = process.env.JWT_SECRET;

// 🔐 Login com PostgreSQL + bcrypt
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user and generate JWT
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: JWT token generated
 *       401:
 *         description: Invalid credentials
 */
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Busca usuário no banco
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    const user = result.rows[0];

    // Usuário não encontrado
if (!user) {
  logEvent("WARNING", "login_failed", {
    username,
    reason: "user_not_found",
  });

  return res.status(401).json({
    message: "Invalid credentials",
  });
}

if (!match) {
  logEvent("WARNING", "login_failed", {
    username,
    reason: "wrong_password",
  });

  return res.status(401).json({
    message: "Invalid credentials",
  });
}

    // Compara senha com bcrypt
    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Gera JWT
    const token = jwt.sign(
      { id: user.id },
      SECRET,
      { expiresIn: "1h" }
    );

    // ✅ Structured log
logEvent("INFO", "login_success", {
  username,
  userId: user.id,
});

res.json({ token });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// 🔒 Middleware de autenticação
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token missing",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();

  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

// 🔒 Rota protegida
/**
 * @swagger
 * /protected:
 *   get:
 *     summary: Protected route requiring JWT
 *     tags:
 *       - Protected
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Access granted
 *       401:
 *         description: Invalid token
 */

app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

// 🌐 Root route
app.get("/", (req, res) => {
  res.json({
    message: "Secure API running 🚀",
  });
});

// ❤️ Healthcheck
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Healthcheck endpoint
 *     tags:
 *       - Monitoring
 *     responses:
 *       200:
 *         description: API is healthy
 */
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

// 🚀 Jest Importa a API
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;