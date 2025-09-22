// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Import routes
const postRouter = require("./routes/post.routes.js");

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose
    .connect(process.env.MANGO_URL)
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((err) => console.log("Database connection error: ", err));

// Use the API routes
app.use("/api", postRouter);

// Start the server
app.listen(6969, () => {
    console.log("Server is running on port 6969 ");
});