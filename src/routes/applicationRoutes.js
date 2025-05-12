const express = require('express');
const router = express.Router();
const { submitApplication, getStatistics } = require('../controllers/applicationController');

// Submit a new application
router.post('/', submitApplication);

// Get all applications (this route should work for viewing all applications)
router.get('/', async (req, res) => {
  try {
    const applications = await require('../models/Application').find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching applications' });
  }
});

// Get statistics
router.get('/stats', getStatistics);

module.exports = router;
