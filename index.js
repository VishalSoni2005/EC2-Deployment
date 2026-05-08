import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URI);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connection done"))
  .catch(() => console.log("connection failed"));

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "Server working",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
