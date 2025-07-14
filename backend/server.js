import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Food Redistribution Model
const FoodSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  location: String,
  contact: String,
  postedAt: { type: Date, default: Date.now }
});

const Food = mongoose.model("Food", FoodSchema);

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Root Route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start Server
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
