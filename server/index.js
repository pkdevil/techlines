import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./db.js";
import express from "express";
import cors from "cors";

//Routes

import productRoutes from "./routes/productRoutes.js";

connectToDatabase();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);

//localhost:5000/api/products
const port = 5000;

app.get("/", (req, res) => {
  res.send("Api is calling...");
});
app.listen(port, () => {
  console.log(`server run port on ${port}`);
});
