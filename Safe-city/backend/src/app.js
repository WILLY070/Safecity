const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Define all allowed domains here
const allowedOrigins = [
  "https://safecity070.vercel.app", // Main Production Domain
  "http://localhost:5173",          // Local Development
  "https://safecity070-inf2i3i6q-willys-projects-9b108f6c.vercel.app" // Your specific preview URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/incidents", require("./routes/incident.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

// Error middleware
const { errorHandler } = require("./middleware/errorMiddleware");
app.use(errorHandler);

module.exports = app;
