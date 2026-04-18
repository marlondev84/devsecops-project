const express = require("express");
const helmet = require("helmet");

const app = express();

// Middleware de segurança
app.use(helmet());

// Middleware para parsing de JSON
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Secure API running 🚀",
  });
});

// Rota de healthcheck (boa prática para cloud)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

// Porta (Cloud Run usa variável de ambiente)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});