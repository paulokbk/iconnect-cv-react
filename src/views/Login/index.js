import "./index.scss";

export const Login = () => {
  return (
    <div className="body">
      <div className="max-width-content">
        <div className="box-login">
          <img src="./assets/logo.jpg" alt="Logo iConnect" className="logo" />
          <h1 className="title">Controle de Vendas</h1>
          <form className="display-flex flex-direction-column">
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Senha"/>
            <button type="submit">Acessar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
