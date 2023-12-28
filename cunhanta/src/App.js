import './App.css';
import Header from "./../src/components/Header"; 

function App() {

  return (
    <div className="App">
      <Header />
      <main >
        <div>
          <p>Continuar</p>
        </div>
        <div>
          <p>Recomendados</p>
        </div>
        <div>
          <p>Shorts</p>
        </div>
        <div>
          <p>Informática básica</p>
        </div>
        <div>
          <p>Criatividade e Inovação</p>
        </div>
        <div>
          <p>Empreendedorismo</p>
        </div>

        <div>
          <h1>Nós acreditamos no seu potencial!</h1>
          <p>Bem-vindo(a) ao nosso universo de aprendizado, onde as portas do conhecimento estarão abertas para você. Nós acreditamos que o aprendizado é a chave para desbloquear um futuro repleto de oportunidades.<br />
            Cada curso que você encontra aqui é mais do que uma simples lição; é um passo para desbloquear o seu potencial ilimitado. Nosso compromisso é fornecer a você as ferramentas necessárias para moldar o seu destino, capacitando-o(a) com conhecimentos que
            transcendem barreiras.</p>
          <img src="" alt="" />
        </div>
      </main>
      <footer>
        <p>Quem Somos</p>
        <p>Ajuda e Suporte</p>
        <p>Fale Conosco</p>
        <p>Política de Privacidade</p>
        <p>Declaração de Acessibilidade</p>  
        <div><div><img src="/logo-white.png" alt="logo" /></div>
</div>
      </footer>
    </div>
  );
}

export default App;

