import { Link } from 'react-router-dom';
import { FaBriefcase, FaLandmark, FaTree, FaGavel, FaBan, FaGlobeAmericas, FaGem, FaMale, FaPiggyBank } from 'react-icons/fa';

import logo from '../assets/upminer.svg';

function Details() {
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
        },
        {
          name: "Profissional",
          description: "",
          price: "29,99",
          id: ["0","1"],
          icon: <FaBriefcase />
        },
        {
          name: "Histórico Empresarial",
          description: "O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.",
          price: "40,00",
          id: ["10"]          
        },
      ];

    const currentPathName = window.location.href;
    const splitPath = currentPathName.split('/', 4);
    const id = splitPath[3];
    
    let filteredProducts = products.filter(a => a.id.includes(id));
    let productData = filteredProducts[0];

    
    return(
      <header className="header">
        <div className="header__title--row">
          <img className="header__logo" src={logo} height="40px" alt="upMiner"/>
          <h1 className="header__title">{productData.name}</h1>
        </div>
        <p className="header__description">{productData.description}</p>
        <div className="header__price--row">
          <span className="header__currency">R$</span>
          <span className="header__price">{productData.price}</span>
          <Link to={"/" + id}>
            <button className="header__button">Saiba Mais</button>
          </Link>
        </div>
      </header>
    );
}

export default Details;