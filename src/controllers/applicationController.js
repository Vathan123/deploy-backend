const Application = require('../models/Application');

const submitApplication = async (req, res) => {
  try {
    const newApp = new Application(req.body);
    await newApp.save();
    res.status(201).json(newApp);
  } catch (error) {
    res.status(500).json({ error: 'Error saving application' });
  }
};

const getStatistics = async (req, res) => {
  try {
    const totalApplications = await Application.countDocuments();
    const avgLoanAmount = await Application.aggregate([
      { $group: { _id: null, avg: { $avg: "$loanAmount" } } }
    ]);
    
    res.json({
      totalApplications,
      averageLoanAmount: avgLoanAmount[0]?.avg || 0
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching statistics' });
  }
};

module.exports = {
  submitApplication,
  getStatistics
};
