import { GrApple } from "react-icons/gr";

export const Sidebar = () => {
  const nav = [
    "Home",
    "Vendas",
    "Produtos",
    "Fornecedores",
    "Clientes",
    "Fretistas",
    "Caixa",
    "Configurações",
  ];
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src="./assets/logo.jpg" alt="Logo iConnect" />
          <h1>{process.env.REACT_APP_COMPANY_NAME}</h1>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {nav.map((item, index) => (
              <a href="http://localhost:3000/" key={index}>
                <GrApple/>
                <li >{item}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
