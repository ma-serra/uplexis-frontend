import { FaGlobe, FaBriefcase, FaLandmark, FaTree, FaGavel, FaBan, FaGlobeAmericas, FaGem, FaMale, FaPiggyBank } from 'react-icons/fa';

import './index.sass';
import logo from './assets/upminer.svg';

function Home() {
  const products = [
    {
      name: "Profissional",
      description: "",
      price: "29,99"
    },
    {
      name: "Reguladores",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Sócio Ambiental",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Jurídico",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Listas Restritivas",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Mídia / Internet",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Bens e Imóveis",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Cadastro",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Financeiro",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Financeiro",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Sócio Ambiental",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    },
    {
      name: "Jurídico",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99"
    }
  ];

  return (
    <div className="Home">
      <header className="header">
        <div className="header__title--row">
          <img className="header__logo" src={logo} height="40px" alt="upMiner"/>
          <h1 className="header__title">Histórico Empresarial</h1>
        </div>
        <p className="header__description">O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.</p>
        <div className="header__price--row">
          <span className="header__currency">R$</span>
          <span className="header__price">40,00</span>
          <button className="header__button">Saiba Mais</button>
        </div>
      </header>
      <section className="menu">
        <ul>
          <li><span><FaGlobe /></span>Todos</li>
          <li><span><FaBriefcase /></span>Profissional</li>
          <li><span><FaLandmark /></span>Reguladores</li>
          <li><span><FaTree /></span>Sócio Ambiental</li>
          <li><span><FaGavel /></span>Jurídico</li>
          <li><span><FaBan /></span>Listas Restritivas</li>
          <li><span><FaGlobeAmericas /></span>Mídia / Internet</li>
          <li><span><FaGem /></span>Bens e Imóveis</li>
          <li><span><FaMale /></span>Cadastro</li>
          <li><span><FaPiggyBank /></span>Financeiro</li>
        </ul>
      </section>
      <section className="products">
        <form>
          <label htmlFor="">ORDENAR:</label>
          <select name="order" id="order">
            <option value="launch">Lançamento</option>
            <option value="price">Preço</option>
          </select>
        </form>
        <div className="product">
          <span><FaBriefcase /></span>
          <h2>Profissional</h2>
          <p>O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.</p>
          <div className="product__button">
            <span>R$ 29,99</span>
            <span>Saiba mais</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
