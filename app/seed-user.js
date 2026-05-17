require("dotenv").config();

const bcrypt = require("bcrypt");
const pool = require("./db");

async function seed() {
  try {
    const username = "admin";
    const plainPassword = "123456";

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2)",
      [username, hashedPassword]
    );

    console.log("User created ✅");

    process.exit();
  } catch (err) {
    console.error("Error creating user:", err);
    process.exit(1);
  }
}

seed();