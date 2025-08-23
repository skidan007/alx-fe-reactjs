import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Mock API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitMessage('Registration successful!');
        setFormData({ username: '', email: '', password: '' });
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      setSubmitMessage('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>User Registration (Controlled)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username} // Added missing value attribute
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', border: errors.username ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.username && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.username}</span>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email} // Added missing value attribute
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', border: errors.email ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password} // Added missing value attribute
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', border: errors.password ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.password && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.password}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: isSubmitting ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>

        {submitMessage && (
          <div style={{ marginTop: '1rem', color: submitMessage.includes('successful') ? 'green' : 'red' }}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;