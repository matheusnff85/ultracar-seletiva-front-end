import React from "react";
import logoUltracar from "../images/cabecalho.png"

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logoUltracar } alt="logo-ultracar" />
      </header>
    );
  }
}

export default Header;