import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!isEmailValid(email)) {
      setError('Por favor, digite um e-mail válido.');
      return;
    }

    if (password.trim() === '') {
      setError('Por favor, digite a sua senha.');
      return;
    }

    

    setError('');
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const [showFirstImage, setShowFirstImage] = useState(true);

  const handleClick = () => {
    setShowFirstImage(!showFirstImage);
  };

   

  return (
    <div className="section">
      <div className="div">
        <h1 className="titulo-login">Entrar</h1>
        <form>
          <div>
            <label className="label">E-mail</label>
            <br />
            <input
              className="input-login"
              type="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div >
            <label className="label">Senha</label>
            <br />
            <input
              className="input-login"
              type="password"
              placeholder="Digite a sua senha"
              value={password}
              onChange={handlePasswordChange} />
          </div>
          <p>
            <Link className="esqueceusenha">Esqueceu a senha?</Link>
          </p>
          <button className="botao-entrar" onClick={handleLogin}>Entrar</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="checkbox">
            <img
              className="checked"
              src={showFirstImage ? '/activated1.svg' : '/disabled.svg'}
              alt="checkbox"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            />
            <p className="manterconectado">Mantenha-me conectado</p>
          </div>
          <div className="possuirconta">
            <p>Não possui uma conta? <Link to="/cadastro" className="possuirconta-link">Cadastre-se</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Login;