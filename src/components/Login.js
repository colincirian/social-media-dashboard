import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom"; // Import Link and useHistory
import "./Login.css";
import Navbar from "./Navbar";
import supabase from "../config/SupabaseClient";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const history = useHistory(); // Get the history object

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { username, password });
      // Handle login success
      
      // Redirect to the home page once login is successful
      history.push('/');
    } catch (error) {
      console.error(error);
      setLoginError('Login failed. Please check your credentials.');
    }
  }

  const handleCreateAccount = () => {
    history.push('/register');
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
          </form>
          <p>Don't have an account?</p>
          <button
            onClick={handleCreateAccount}
            className="create-account-button"
          >
            Create an Account
          </button>
          <p>{loginError}</p>
        </div>
      </div>
    </>
  );
}

export default Login;
