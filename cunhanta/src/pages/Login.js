import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticação aqui (por enquanto, apenas logamos os valores)
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Mantenha-me conectado:', rememberMe);
  };

  return (
    <div className="login">
      <div className="div">
        <h1>Entrar</h1>
        <div>
          <label>E-mail</label>
          <br />
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <div className="senha">
          <label>Senha</label>
          <br />
          <input
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <p>
          <Link className="esqueceusenha">Esqueceu a senha?</Link>
        </p>

        <button className="entrar" onClick={handleLogin}>Entrar</button>


        <label className="manterconectado">
          <input className="checkbox" type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          Mantenha-me conectado
        </label>

        <div>
          <p>Não possui uma conta? <Link>Cadastre-se</Link></p>
        </div>

      </div>


    </div>
  )
}

export default Login;