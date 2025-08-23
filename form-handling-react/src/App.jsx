import React from 'react';
import ControlledForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>React Form Handling Demo</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <ControlledForm />
        <FormikForm />
      </div>
    </div>
  );
}

export default App;