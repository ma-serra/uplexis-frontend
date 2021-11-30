import { useState } from 'react';
import { FaGlobe, FaBriefcase, FaLandmark, FaTree, FaGavel, FaBan, FaGlobeAmericas, FaGem, FaMale, FaPiggyBank } from 'react-icons/fa';

import './index.sass';
import logo from './assets/upminer.svg';
import React from 'react';

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
          <li className="menu__item menu__item--is-selected"><span><FaGlobe /></span>Todos</li>
          <li className="menu__item"><span><FaBriefcase /></span>Profissional</li>
          <li className="menu__item"><span><FaLandmark /></span>Reguladores</li>
          <li className="menu__item"><span><FaTree /></span>Sócio Ambiental</li>
          <li className="menu__item"><span><FaGavel /></span>Jurídico</li>
          <li className="menu__item"><span><FaBan /></span>Listas Restritivas</li>
          <li className="menu__item"><span><FaGlobeAmericas /></span>Mídia / Internet</li>
          <li className="menu__item"><span><FaGem /></span>Bens e Imóveis</li>
          <li className="menu__item"><span><FaMale /></span>Cadastro</li>
          <li className="menu__item"><span><FaPiggyBank /></span>Financeiro</li>
        </ul>
      </section>
      <form className="form">
        <label htmlFor="">ORDENAR:</label>
        <select name="order" id="order">
          <option value="launch">Lançamento</option>
          <option value="price">Preço</option>
        </select>
      </form>
      <section className="products">        
        <div className="product">
          <span className="product__icon"><FaBriefcase /></span>
          <h2 className="product__title">Profissional</h2>
          <p className="product__description">O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.</p>
          <div className="product__button">
            <span className="product__price">R$ 29,99</span>
            <span className="product__button__text">Saiba mais</span>
          </div>
        </div>
        <div className="product">
          <span className="product__icon"><FaBriefcase /></span>
          <h2 className="product__title">Profissional</h2>
          <p className="product__description">O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.</p>
          <div className="product__button">
            <span className="product__price">R$ 29,99</span>
            <span className="product__button__text">Saiba mais</span>
          </div>
        </div>
        <div className="product">
          <span className="product__icon"><FaBriefcase /></span>
          <h2 className="product__title">Profissional</h2>
          <p className="product__description">O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.</p>
          <div className="product__button">
            <span className="product__price">R$ 29,99</span>
            <span className="product__button__text">Saiba mais</span>
          </div>
        </div>
        <div className="product">
          <span className="product__icon"><FaBriefcase /></span>
          <h2 className="product__title">Profissional</h2>
          <p className="product__description">O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.</p>
          <div className="product__button">
            <span className="product__price">R$ 29,99</span>
            <span className="product__button__text">Saiba mais</span>
          </div>
        </div>
        <div className="product">
          <span className="product__icon"><FaBriefcase /></span>
          <h2 className="product__title">Profissional</h2>
          <p className="product__description">O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.</p>
          <div className="product__button">
            <span className="product__price">R$ 29,99</span>
            <span className="product__button__text">Saiba mais</span>
          </div>
        </div>
        <div className="product">
          <span className="product__icon"><FaBriefcase /></span>
          <h2 className="product__title">Profissional</h2>
          <p className="product__description">O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S. A., de capital aberto e limitadas (LTDA) de grande porte.</p>
          <div className="product__button">
            <span className="product__price">R$ 29,99</span>
            <span className="product__button__text">Saiba mais</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
