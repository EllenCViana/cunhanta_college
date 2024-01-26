import './Home.css';
import Header from "./../components/Header";
import Continuar from "./../components/Continuar";
import Recomendados from "./../components/Recomendados";
import Shorts from "./../components/Shorts";

function Home() {

  return (
    <div className="home">
      <Header />     
      <main >
        <Continuar />
        <Recomendados />
        <Shorts />
        <Recomendados />
        <Recomendados /> 
        <Recomendados />
        <Recomendados />      

        <div>
          <h1>Nós acreditamos no seu potencial!</h1>
          <p>Bem-vindo(a) ao nosso universo de aprendizado, onde as portas do conhecimento estarão abertas para você. Nós acreditamos que o aprendizado é a chave para desbloquear um futuro repleto de oportunidades.<br />
            Cada curso que você encontra aqui é mais do que uma simples lição; é um passo para desbloquear o seu potencial ilimitado. Nosso compromisso é fornecer a você as ferramentas necessárias para moldar o seu destino, capacitando-o(a) com conhecimentos que
            transcendem barreiras.</p>
          <img src="" alt="" />
        </div>
      </main>
      <footer>
        <div>
          <p>Quem Somos</p>
          <p>Ajuda e Suporte</p>
          <p>Fale Conosco</p>
          <p>Política de Privacidade</p>
          <p>Declaração de Acessibilidade</p>
        </div>
        <img src="/logo-white.svg" alt="logo" />
      </footer>
    </div>
  );
}

export default Home;