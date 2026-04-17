import express from "express";
import "dotenv/config";
import authRoutes from "./modules/auth/public/auth.routes";

const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/test", (req, res) => {
  res.send("OK");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
