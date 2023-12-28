import React from 'react';
import imagem_inicial from "./../img/imagem-inicial.jpg";
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="format">
                <div className="logo"><img src="/logo.png" alt="logo" /></div>
                <div>
                    <input type="text" placeholder="O que você quer aprender hoje?" />
                    <button type="button"><img src="/lupa.png" alt="lupa" /></button>
                </div>

                <div>
                    <button type="button" className="login">Login</button>
                    <button type="button" className="cadastro">Cadastro</button>
                </div>
            </div>
            <nav>
                <ul className="nav">
                    <li>Home</li>
                    <li>Retomar</li>
                    <li>Explorar cursos</li>
                    <li>Certificados</li>
                    <li>Quiz</li>
                    <li>Sobre</li>
                </ul>
            </nav>
            <div className="container">
                <div>
                    <h1>Sua jornada começa aqui!</h1>
                    <p>Navegue pelas inúmeras opções de cursos disponíveis e dê o pontapé inicial na construção do seu caminho para o futuro. Sua jornada começa agora!</p>
                    <button type="button">Explorar cursos</button>
                </div>
                <img src={imagem_inicial} alt="" />
            </div>
        </header>
    );
};

export default Header;