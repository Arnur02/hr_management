import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';
import UpdateEmployeeForm from './components/UpdateEmployeeForm';
import DeleteEmployeeForm from './components/DeleteEmployeeForm';

function App() {
  const [action, setAction] = useState('view');

  const renderActionComponent = () => {
    switch (action) {
      case 'add':
        return <AddEmployeeForm />;
      case 'update':
        return <UpdateEmployeeForm />;
      case 'delete':
        return <DeleteEmployeeForm />;
      default:
        return <EmployeeList />;
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <div>
        <button onClick={() => setAction('view')}>View Employees</button>
        <button onClick={() => setAction('add')}>Add Employee</button>
        <button onClick={() => setAction('update')}>Update Employee</button>
        <button onClick={() => setAction('delete')}>Delete Employee</button>
      </div>
      <hr />
      {renderActionComponent()}
    </div>
  );
}

export default App;