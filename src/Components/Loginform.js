import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './first.css';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [inputFocus, setInputFocus] = useState({ id: false, password: false });
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = (field) => {
    setInputFocus({ ...inputFocus, [field]: true });
  };

  const handleInputBlur = (field) => {
    setInputFocus({ ...inputFocus, [field]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/logintable/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password }),
      });

      if (response.ok) {
        localStorage.setItem('userId', id); // Store user ID in localStorage
        navigate('/home');
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 style={{ color: 'rgb(19, 8, 145)', fontWeight: 'bold', fontSize: '25px' }}><center>Login</center></h2>
        <div className={`form-group ${inputFocus.id ? 'focused' : ''}`}>
          <label htmlFor="userId" style={{ display: 'flex', alignItems: 'center' }}>
            <CgProfile style={{ marginRight: '5px' }} />
            USER ID
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              id="userId"
              value={id}
              onChange={(e) => setId(e.target.value)}
              onFocus={() => handleInputFocus('id')}
              onBlur={() => handleInputBlur('id')}
              placeholder="userID"
            />
          </div>
        </div>
        <div className={`form-group password-group ${inputFocus.password ? 'focused' : ''}`}>
          <label htmlFor="password" style={{ display: 'flex', alignItems: 'center' }}>
            <RiLockPasswordFill style={{ marginRight: '5px' }} />
            PASSWORD
          </label>
          <div className="password-input-wrapper">
            <div className="password-input-inner">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => handleInputFocus('password')}
                onBlur={() => handleInputBlur('password')}
                placeholder="Password"
              />
              <span className="password-toggle-icon" onClick={handlePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
