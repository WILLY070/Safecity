// src/models/Incident.js

const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Safety', 'Medical', 'Fire', 'Other'],
        default: 'Safety',
    },
    reporter: { // Optional: Link to the user who reported it
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // Assuming you have a User model for authenticated reporters
        // required: true, 
    },
    status: {
        type: String,
        enum: ['Reported', 'In Progress', 'Resolved'],
        default: 'Reported',
    }
}, { timestamps: true });

const Incident = mongoose.model('Incident', IncidentSchema);

module.exports = Incident;