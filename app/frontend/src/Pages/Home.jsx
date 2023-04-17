import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <main>
        <h2>HOME PAGE</h2>
        <Link to={ "/service" } >Criar Novo Serviço</Link>
        <Link to={ "/" } >Gerenciar Serviços</Link>
      </main>
    );
  }
}

export default Home;