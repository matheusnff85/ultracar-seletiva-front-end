import React from 'react';
import { Link } from 'react-router-dom';
import logoNova from '../images/Logo Nova-04.png';
import styled from '../Css/Home.module.css';

class Home extends React.Component {
  render() {
    return (
      <main className={ styled.homeMainContainer }>
        <img src={logoNova} alt='Logo da ultracar' className={ styled.homeLogoImg } />
        <div className={ styled.homeButtonsContainer }>
          <button><Link to={ '/service' } className={ styled.homeLink }>Criar Novo Serviço</Link></button>
          <button><Link to={ '/manage' } className={ styled.homeLink }>Gerenciar Serviços</Link></button>
        </div>
      </main>
    );
  }
}

export default Home;