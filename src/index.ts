import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./module/user/user.routes";
import authRoutes from "./module/auth/auth.routes";
import productRoutes from "./module/product/product.routes";
import variantRoutes from "./module/variant/variant.routes";
import storeRoutes from "./module/store/store.routes";
import orderRoutes from "./module/order/order.routes";
import transactionRoutes from "./module/transaction/transaction.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/variants", variantRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/transactions", transactionRoutes);

app.use(errorHandler);

app.listen(port);

console.log(`http://localhost:${port}`);

export default app;
