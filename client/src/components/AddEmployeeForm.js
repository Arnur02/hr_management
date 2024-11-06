import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

function AddEmployeeForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [departmentID, setDepartmentID] = useState('');

  const handleSubmit = async (e) => {
	  e.preventDefault();
	  if (!firstName || !lastName || !departmentID) {
		alert("Please fill in all fields");
		return;
	  }
	  try {
		await axios.post('/api/employees', { firstName, lastName, departmentID });
		alert('Employee added successfully!');
	  } catch (error) {
		console.error('Error adding employee:', error);
		alert('Failed to add employee');
	  }
    };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Department ID"
        value={departmentID}
        onChange={(e) => setDepartmentID(e.target.value)}
      />
      <Button type="submit">Add Employee</Button>
    </form>
  );
}

export default AddEmployeeForm;