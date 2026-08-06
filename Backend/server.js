import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./Config/db.js";
import contactUserRoute from "./Routes/contactUserRoute.js";
import projectRoute from "./Routes/projectRoute.js"
import skillRoute from "./Routes/skillRoute.js"
import authRoute from "./Routes/authRoute.js"

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/contacts", contactUserRoute);
app.use("/api/projects", projectRoute);
app.use("/api/skills", skillRoute)
app.use("/api/auth", authRoute);

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running...",
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// Start Server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();