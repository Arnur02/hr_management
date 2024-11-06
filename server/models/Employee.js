const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  departmentID: { type: Number, required: true },
});

module.exports = mongoose.model('Employee', EmployeeSchema);