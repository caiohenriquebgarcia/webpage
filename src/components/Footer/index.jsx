import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="insideFooter">
        <div className="insideFooterLeft">
          <h3>Food</h3>
          <p>Trabalho realizado no curso de pós-graduação Desenvolvimento Web Full Stack da Unyleya em outubro de 2022.</p>
        </div>
        <div className="insideFooterRight">
          <div className="divFooter">
            <h3>Menu</h3>
            <Link>Home</Link>
            <Link>Cardápio</Link>
            <Link>Equipe</Link>
          </div>
          <div className="divFooter">
            <h3>Redes Sociais</h3>
            <Link>Facebook</Link>
            <Link>Twitter</Link>
          </div>
          <div className="divFooter">
            <h3>Legal</h3>
            <Link>Termos e condições</Link>
            <Link>Política e privacidade</Link>
            <Link>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;