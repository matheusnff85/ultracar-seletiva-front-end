import React from 'react';
import { Link } from 'react-router-dom';
import logoNova from '../images/Logo Nova-04.png';

class Home extends React.Component {
  render() {
    return (
      <main>
        <img src={logoNova} alt='Logo da ultracar' />
        <Link to={ '/service' } >Criar Novo Serviço</Link>
        <Link to={ '/manage' } >Gerenciar Serviços</Link>
      </main>
    );
  }
}

export default Home;