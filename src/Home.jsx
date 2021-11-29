import './index.sass';

function Home() {
  return (
    <div className="Home">
      <header className="header">
        <div className="header__title--row">
          <span className="header__logo">upMiner</span>
          <h1 className="header__title">Histórico Empresarial</h1>
        </div>
        <p className="header__description">O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.</p>
        <div className="header__price--row">
          <span className="header__currency">R$</span>
          <span className="header__price">40,00</span>
          <button className="header__button">Saiba Mais</button>
        </div>
      </header>
      <main>

      </main>
    </div>
  );
}

export default Home;
