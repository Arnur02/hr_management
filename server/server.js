const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config');
const Employee = require('./models/Employee');
const Department = require('./models/Department');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
app.get('/api/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.post('/api/employees', async (req, res) => {
  try {
    const { firstName, lastName, departmentID } = req.body;
    if (!firstName || !lastName || !departmentID) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newEmployee = new Employee({ firstName, lastName, departmentID });
    await newEmployee.save();
    res.json(newEmployee);
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/employees/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const updatedEmployee = await Employee.findByIdAndUpdate(id, updateData, { new: true });
  res.json(updatedEmployee);
});

app.delete('/api/employees/:id', async (req, res) => {
  const { id } = req.params;
  await Employee.findByIdAndDelete(id);
  res.json({ message: 'Employee deleted' });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
