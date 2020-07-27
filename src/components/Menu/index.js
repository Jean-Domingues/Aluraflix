import React from 'react';

import logo from '../../assets/logo.png';
import './styles.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="AluraFlix" />
      </a>

      <Button href="/">Novo Vídeo</Button>
    </nav>
  );
}

export default Menu;
