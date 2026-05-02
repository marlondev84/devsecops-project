const express = require("express");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
const app = express();

app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const SECRET = process.env.JWT_SECRET || "dev-secret";

// Usuário mock (simples para demo)
const user = {
  id: 1,
  username: "admin",
  password: "123456"
};

// 🔐 Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });

  res.json({ token });
});

// 🔒 Middleware de autenticação
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// 🔒 Rota protegida
app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

// 🌐 Rotas existentes
app.get("/", (req, res) => {
  res.json({ message: "Secure API running 🚀" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});