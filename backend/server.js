const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);
app.use(cors({
  origin: "http://localhost:5173"
}));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  });

app.listen(process.env.PORT, () => {
  console.log(
    `Server Running On Port ${process.env.PORT}`
  );
});