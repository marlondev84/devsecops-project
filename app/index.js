const express = require("express");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");

const app = express();

// Security middleware
app.use(helmet());
app.use(express.json());

// Rate limiting (anti-abuse)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// Secret (em produção viria do env)
const SECRET = process.env.JWT_SECRET || "supersecret";

// Public route
app.get("/", (req, res) => {
  res.json({ message: "Secure API running 🚀" });
});

// Healthcheck
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Login (gera token)
app.post("/login", (req, res) => {
  const { username } = req.body;

  const token = jwt.sign({ user: username }, SECRET, {
    expiresIn: "1h"
  });

  res.json({ token });
});

// Protected route
app.get("/protected", (req, res) => {
  const auth = req.headers.authorization;

  if (!auth) return res.status(401).json({ error: "No token" });

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ message: "Protected data", user: decoded });
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});