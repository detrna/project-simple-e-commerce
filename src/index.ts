import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

import userRoutes from "./module/user/user.routes";
import authRoutes from "./module/auth/auth.routes";
import productRoutes from "./module/product/product.routes";
import variantRoutes from "./module/variant/variant.routes";
import storeRoutes from "./module/store/store.routes";
import orderRoutes from "./module/order/order.routes";
import transactionRoutes from "./module/transaction/transaction.routes";
import { errorHandler } from "./middleware/ErrorHandler";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/variants", variantRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/transactions", transactionRoutes);

app.use(errorHandler);

app.get("/api/v1/token", (req, res) => {
  const header = req.headers.authorization;
  const token = header!.split(" ")[1];

  if (!token) {
    res.send({ msg: "No cookie provided" });
  }

  const key: string = process.env.ACCESS_JWT_SECRET!;
  const payload = jwt.verify(token, key);
  res.send(payload);
});

export default app;

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

// TO-DO:
// Response schema
// Pagination
// Input Validation
// Dependency injection
// OAuth

// Swap payment from Order to Transaction
