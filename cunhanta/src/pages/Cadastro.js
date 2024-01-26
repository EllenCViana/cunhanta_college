import './Cadastro.css';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <div className="section">
      <div className="div">
        <h1 className="titulo-cadastro">Cadastre-se</h1>
        <form>
          <div>
            <label className="label">E-mail</label>
            <br />
            <input
              className="input-cadastro"
              type="email"
              placeholder="Digite o seu e-mail"
              value=""
              onChange=""
            />
          </div>
          <div >
            <label className="label">Nome de Usuário</label>
            <br />
            <input
              className="input-cadastro"
              type="text"
              placeholder="Apelido"
              value=""
              onChange="" 
              />
          </div>
          <div >
            <label className="label">Senha</label>
            <br />
            <input
              className="input-cadastro"
              type="password"
              placeholder="Digite a sua senha"
              value=""
              onChange="" />
          </div>
          <button className="botao-cadastrar" onClick="">Cadastrar</button>
          <div className="possuirconta">
            <p>Já possui uma conta? <Link to="/login" className="possuirconta-link">Entrar</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
};


export default Cadastro;