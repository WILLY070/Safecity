LIVE APPLICATION: https://safecity-beige.vercel.app/


SCREENSHOT: https://github.com/PLP-MERN-Stack-Development/mern-final-project-WILLY070/blob/main/image.png

VIDEO DEMO + PITCH DECK: https://youtu.be/gpzzg0la8A8


Safe City - Incident Reporting System

Safe City is a full-stack web application designed to allow citizens to report safety incidents, medical emergencies, fires, and other hazards in their community. The platform provides a secure and user-friendly interface for tracking and managing these reports.

🛠 Tech Stack

Frontend:

React.js (Vite) - Component-based UI library

Tailwind CSS - Utility-first CSS framework for styling

Axios - HTTP client for API requests

React Router - Client-side routing

Context API - State management for Authentication

Backend:

Node.js - JavaScript runtime environment

Express.js - Web framework for Node.js

MongoDB - NoSQL database for storing user and incident data

Mongoose - ODM for MongoDB

JWT (JSON Web Tokens) - Secure authentication

Bcryptjs - Password hashing

Deployment:

Frontend: Vercel

Backend: Render

✨ Features

User Authentication: Secure Registration and Login using JWT.

Incident Reporting: Users can submit reports with details including:

Title

Type (Safety, Medical, Fire, Other)

Location

Detailed Description

Real-time Feedback: Success and error messages during submission.

Responsive Design: Fully optimized for mobile and desktop screens using Tailwind CSS.

Security: Protected routes ensuring only logged-in users can submit reports.

📂 Project Structure

This project follows a monorepo-style structure:

Safe-city/
├── backend/             # Express/Node.js Server
│   ├── src/
│   │   ├── config/      # Database connection
│   │   ├── controllers/ # Logic for Auth and Incidents
│   │   ├── middleware/  # Error handling & Auth checks
│   │   ├── models/      # Mongoose Models (User, Incident)
│   │   ├── routes/      # API Routes
│   │   ├── app.js       # App configuration (CORS, Middleware)
│   │   └── server.js    # Entry point
│   ├── .env             # Environment variables (not committed)
│   └── package.json
│
└── frontend/            # React/Vite Client
    ├── src/
    │   ├── components/  # Reusable components (IncidentForm, etc.)
    │   ├── context/     # Auth Context Provider
    │   ├── pages/       # Dashboard, Login, Register
    │   ├── services/    # Axios instance (api.js)
    │   ├── App.jsx      # Main App component
    │   └── main.jsx     # Entry point
    ├── tailwind.config.js
    └── vite.config.js


⚙️ Installation & Setup

Prerequisites

Node.js installed

MongoDB Atlas account (or local MongoDB)

1. Backend Setup

Navigate to the backend directory:

cd backend
npm install


Create a .env file in the backend/ root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
NODE_ENV=development


Start the server:

npm run dev


2. Frontend Setup

Open a new terminal and navigate to the frontend directory:

cd frontend
npm install


Create a .env file in the frontend/ root:

VITE_API_URL=http://localhost:5000


Start the React app:

npm run dev


🌍 Deployment Guide

Backend (Render)

Create a new Web Service on Render.

Connect your GitHub repository.

Root Directory: backend

Build Command: npm install

Start Command: npm start

Environment Variables: Add MONGO_URI and JWT_SECRET.

Frontend (Vercel)

Import your project into Vercel.

Root Directory: frontend

Framework Preset: Vite

Environment Variables:

Key: VITE_API_URL

Value: https://your-backend-app.onrender.com (Your Render Backend URL)

Deploy!

🔌 API Endpoints

Auth

POST /api/auth/register - Register a new user

POST /api/auth/login - Login user and get Token

Incidents

POST /api/incidents - Report a new incident (Protected Route)

🤝 Contributing

Contributions, issues, and feature requests are welcome!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License

Distributed under the MIT License.
