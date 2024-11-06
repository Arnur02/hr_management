import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

function UpdateEmployeeForm() {
  const [employeeId, setEmployeeId] = useState('');
  const [updatedInfo, setUpdatedInfo] = useState({ firstName: '', lastName: '', departmentID: '' });

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`/api/employees/${employeeId}`, updatedInfo);
    alert('Employee updated successfully!');
  };

  return (
    <form onSubmit={handleUpdate}>
      <TextField label="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
      <TextField label="First Name" value={updatedInfo.firstName} onChange={(e) => setUpdatedInfo({ ...updatedInfo, firstName: e.target.value })} />
      <TextField label="Last Name" value={updatedInfo.lastName} onChange={(e) => setUpdatedInfo({ ...updatedInfo, lastName: e.target.value })} />
      <TextField label="Department ID" value={updatedInfo.departmentID} onChange={(e) => setUpdatedInfo({ ...updatedInfo, departmentID: e.target.value })} />
      <Button type="submit">Update Employee</Button>
    </form>
  );
}

export default UpdateEmployeeForm;