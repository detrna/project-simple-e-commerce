import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

import userRoutes from "./module/user/user.routes";
import authRoutes from "./module/auth/auth.routes";
import productRoutes from "./module/product/product.routes"

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes)

app.get("/api/v1/token", (req, res) => {
  const header = req.headers.authorization
  const token = header!.split(" ")[1]

  if(!token){
    res.send({msg: "No cookie provided"})
  }

  const key: string = process.env.ACCESS_JWT_SECRET!
  const payload = jwt.verify(token, key)
  res.send(payload)
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
