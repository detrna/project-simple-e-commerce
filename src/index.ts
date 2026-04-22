import express from "express";
import "dotenv/config";
const app = express();
app.use(express.json());

import userRoutes from "./module/user/user.routes";
import authRoutes from "./module/auth/auth.routes";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
