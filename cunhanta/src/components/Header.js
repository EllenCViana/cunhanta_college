import React from 'react';
import imagem_inicial from "./../img/imagem-inicial.png";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <section className="inicio">
                <img className="logo" src="/logo.svg" alt="logo" />
                <div className="procurar">
                    <input type="text" placeholder="O que você procura?" />
                    <button type="button" className='lupa'><img src="/loupe.svg" alt="lupa" /></button>
                </div>

                    <button type="button" className="login">Entrar</button>
                    <button type="button" className="cadastro">Cadastre-se</button>
            </section>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Retomar</li>
                    <li>Explorar cursos</li>
                    <li>Quiz</li>
                    <li>Certificados</li>
                    
                    <li>Sobre</li>
                </ul>
            </nav>
            <section className="container">
                <div>
                    <h1>Sua jornada começa aqui!</h1>
                    <p>Navegue pelas inúmeras opções de cursos disponíveis e dê o pontapé inicial na construção do seu caminho para o futuro. Sua jornada começa agora!</p>
                    <button type="button">Explorar cursos</button>
                </div>
                <img className="imageminicial" src={imagem_inicial} alt="imagem inicial"  />
            </section>
        </header>
    );
};

export default Header;