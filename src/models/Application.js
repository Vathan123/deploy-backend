const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: String,
  loanAmount: Number,
  loanTenure: String,
  employmentStatus: String,
  loanReason: String,
  employmentAddress: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Application', applicationSchema);
