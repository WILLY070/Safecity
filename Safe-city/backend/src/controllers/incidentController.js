// src/controllers/incidentController.js

const Incident = require('../models/Incident');

// @desc    Create a new incident report
// @route   POST /api/incidents
// @access  Private (Requires authentication, which you have set up)
exports.createIncident = async (req, res) => {
    try {
        const { title, description, location, type } = req.body;
        
        if (!title || !description || !location) {
            return res.status(400).json({ message: 'Please fill out all required fields.' });
        }

        const newIncident = new Incident({
            title,
            description,
            location,
            type,
            // Assuming user ID is attached to the request by authentication middleware:
            // reporter: req.user.id 
        });

        const incident = await newIncident.save();
        
        res.status(201).json({ 
            message: 'Incident successfully reported!',
            incident 
        });

    } catch (error) {
        console.error("Error creating incident:", error);
        res.status(500).json({ message: 'Server error while saving incident.' });
    }
};

// You can add a getIncidents function here later:
// exports.getIncidents = async (req, res) => { /* ... logic ... */ };