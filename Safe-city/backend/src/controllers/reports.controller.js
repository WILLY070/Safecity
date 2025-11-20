const Report = require('../models/report.model');

exports.create = async (req, res, next) => {
  try {
    const { title, description, category, lat, lon, images } = req.body;
    const report = await Report.create({
      title,
      description,
      category,
      location: { type: 'Point', coordinates: [lon, lat] },
      images,
      reporter: req.user._id
    });
    // notify via socket (attached in server.js)
    req.app.get('io')?.emit('new-report', { id: report._id, title, category, coords: report.location.coordinates });
    res.status(201).json(report);
  } catch (err) { next(err); }
};

exports.listNearby = async (req, res, next) => {
  try {
    const { lat, lon, distance = 5000 } = req.query; // meters
    if (!lat || !lon) return res.status(400).json({message:'lat & lon required'});
    const reports = await Report.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [parseFloat(lon), parseFloat(lat)] },
          $maxDistance: parseInt(distance, 10)
        }
      }
    }).limit(100);
    res.json(reports);
  } catch (err) { next(err); }
};
