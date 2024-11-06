import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

function DeleteEmployeeForm() {
  const [employeeId, setEmployeeId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/employees/${employeeId}`);
    alert('Employee deleted successfully!');
  };

  return (
    <form onSubmit={handleDelete}>
      <TextField label="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
      <Button type="submit">Delete Employee</Button>
    </form>
  );
}

export default DeleteEmployeeForm;