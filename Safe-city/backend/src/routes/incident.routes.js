// src/routes/incident.routes.js

const express = require('express');
const router = express.Router();

const incidentController = require('../controllers/incidentController');
// Assuming you have middleware for protecting routes (e.g., authMiddleware)
// const { protect } = require('../middleware/authMiddleware'); 

// Route for creating a new incident report
// The frontend form submits here: http://localhost:5000/api/incidents
router.post('/', 
    // protect, // Uncomment this if you implement auth middleware
    incidentController.createIncident
); 

// Route to get all incidents (for the Incident List component later)
// router.get('/', protect, incidentController.getIncidents);

module.exports = router;