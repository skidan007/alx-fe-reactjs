// src/App.jsx
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div>
      {/* You can comment one out to see the other */}
      <RegistrationForm />
      <hr style={{ margin: '4rem 0' }} />
      <FormikForm />
    </div>
  );
}

export default App;