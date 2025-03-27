import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from "../Header";
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/gyms/login', {
        username,
        password,
      });
    
      localStorage.setItem('authToken', response.data.token); 
      navigate('/academias/admin'); 
    } catch (error) {
      alert('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <div>
        <Header />
    
    <div className="login-container">
        
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
    </div>
  );
}

export default Login;