const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/incidents", require("./routes/incident.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

// Error middleware
const { errorHandler } = require("./middleware/errorMiddleware");
app.use(errorHandler);

module.exports = app;
