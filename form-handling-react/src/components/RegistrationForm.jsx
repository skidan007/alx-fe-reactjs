import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for errors and submission status
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Individual change handlers for each input
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (errors.username) {
      setErrors(prev => ({ ...prev, username: '' }));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Basic validation: check if fields are empty
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
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
    setSubmitMessage('');
    
    try {
      // Mock API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      
      if (response.ok) {
        setSubmitMessage('Registration successful!');
        // Reset form fields
        setUsername('');
        setEmail('');
        setPassword('');
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
      <h2>User Registration (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              border: errors.username ? '1px solid red' : '1px solid #ccc', 
              borderRadius: '4px' 
            }}
          />
          {errors.username && (
            <span style={{ color: 'red', fontSize: '0.8rem' }}>
              {errors.username}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              border: errors.email ? '1px solid red' : '1px solid #ccc', 
              borderRadius: '4px' 
            }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '0.8rem' }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              border: errors.password ? '1px solid red' : '1px solid #ccc', 
              borderRadius: '4px' 
            }}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '0.8rem' }}>
              {errors.password}
            </span>
          )}
        </div>

        {/* Submit Button */}
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

        {/* Submission Message */}
        {submitMessage && (
          <div style={{ 
            marginTop: '1rem', 
            color: submitMessage.includes('successful') ? 'green' : 'red' 
          }}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;