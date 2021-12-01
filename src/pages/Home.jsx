import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaBriefcase, FaLandmark, FaTree, FaGavel, FaBan, FaGlobeAmericas, FaGem, FaMale, FaPiggyBank } from 'react-icons/fa';

import '../index.sass';
import logo from '../assets/upminer.svg';

function Home() {
  const products = [
    {
      name: "Profissional",
      description: "",
      price: "29,99",
      id: ["0","1"],
      icon: <FaBriefcase />
    },
    {
      name: "Reguladores",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","2"],
      icon: <FaLandmark />
    },
    {
      name: "Sócio Ambiental",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","3"],
      icon: <FaTree />
    },
    {
      name: "Jurídico",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","4"],
      icon: <FaGavel />
    },
    {
      name: "Listas Restritivas",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","5"],
      icon: <FaBan />
    },
    {
      name: "Mídia / Internet",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","6"],
      icon: <FaGlobeAmericas />
    },
    {
      name: "Bens e Imóveis",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","7"],
      icon: <FaGem />
    },
    {
      name: "Cadastro",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","8"],
      icon: <FaMale />
    },
    {
      name: "Financeiro",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","9"],
      icon: <FaPiggyBank />
    },
    {
      name: "Financeiro",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","9"],
      icon: <FaPiggyBank />
    },
    {
      name: "Sócio Ambiental",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","3"],
      icon: <FaTree />
    },
    {
      name: "Jurídico",
      description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.",
      price: "29,99",
      id: ["0","4"],
      icon: <FaGavel />
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("0");
  const [productsList, setProductsList] = useState(products);

  function onSelectCategory(id) {
    setSelectedCategory(id);
    
    let filteredProducts = products.filter(a => a.id.includes(id));
     
    setProductsList(filteredProducts);
  }

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
          <Link to="10">
            <button className="header__button">Saiba Mais</button>
          </Link>
        </div>
      </header>
      <section className="menu">
        <ul>
          <li 
            className={`menu__category ${selectedCategory === "0" ? "menu__category--is-selected" : ""}`}
            id="0"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaGlobe /></span>
            Todos
          </li>
          <li
            className={`menu__category ${selectedCategory === "1" ? "menu__category--is-selected" : ""}`}
            id="1"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaBriefcase /></span>
            Profissional
          </li>
          <li
            className={`menu__category ${selectedCategory === "2" ? "menu__category--is-selected" : ""}`}
            id="2"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaLandmark /></span>
            Reguladores
          </li>
          <li
            className={`menu__category ${selectedCategory === "3" ? "menu__category--is-selected" : ""}`}
            id="3"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaTree /></span>
            Sócio Ambiental
          </li>
          <li
            className={`menu__category ${selectedCategory === "4" ? "menu__category--is-selected" : ""}`}
            id="4"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaGavel /></span>
            Jurídico
          </li>
          <li
            className={`menu__category ${selectedCategory === "5" ? "menu__category--is-selected" : ""}`}
            id="5"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaBan /></span>
            Listas Restritivas
          </li>
          <li
            className={`menu__category ${selectedCategory === "6" ? "menu__category--is-selected" : ""}`}
            id="6"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaGlobeAmericas /></span>
            Mídia / Internet
          </li>
          <li 
            className={`menu__category ${selectedCategory === "7" ? "menu__category--is-selected" : ""}`}
            id="7"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaGem /></span>
            Bens e Imóveis
          </li>
          <li 
            className={`menu__category ${selectedCategory === "8" ? "menu__category--is-selected" : ""}`}
            id="8"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaMale /></span>
            Cadastro
          </li>
          <li 
            className={`menu__category ${selectedCategory === "9" ? "menu__category--is-selected" : ""}`}
            id="9"
            onClick={e => onSelectCategory(e.currentTarget.id)}>
            <span><FaPiggyBank /></span>
            Financeiro
          </li>
        </ul>
      </section>
      <form className="form">
        <label className="form__label" htmlFor="order">ORDENAR:</label>
        <select name="order" id="order">
          <option value="launch">Lançamento</option>
          <option value="price">Preço</option>
        </select>
      </form>
      <ul className="products">
        {productsList.map((product, index) => (
          <li key={index} className="product">
            <span className="product__icon">{product.icon}</span>
            <h2 className="product__title">{product.name}</h2>
            <p className="product__description">{product.description}</p>            
            <Link to={"/" + product.id[1]} className="product__button">
              <span className="product__price">R$ {product.price}</span>
              <span className="product__button__text">Saiba mais</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
