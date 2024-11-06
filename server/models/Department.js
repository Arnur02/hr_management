const mongoose = require('mongoose');
const DepartmentSchema = new mongoose.Schema({
  departmentID: Number,
  departmentName: String,
});
module.exports = mongoose.model('Department', DepartmentSchema);