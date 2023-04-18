import React from 'react';
import logoUltracar from '../images/cabecalho.png';
import styled from '../Css/Header.module.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className={ styled.headerContainer }>
        <img src={ logoUltracar } alt="logo-ultracar" className={ styled.headerLogo }/>
        <h2 className={ styled.headerTitle }>Ultracar</h2>
        <Link to='/' className={ styled.headerLink }>Sair</Link>
      </header>
    );
  }
}

export default Header;
