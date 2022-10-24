import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {

    return (
        <header>
            <div className='insideHeader'>
                <h2 className='logo'>Food</h2>
                <ul>
                    <NavLink className="link" to="/" exact={true} activeClassName="selected">Home</NavLink>
                    <NavLink className="link" to="/cardapio" activeClassName="selected">Cardápio</NavLink>
                    <NavLink className="link" to="/equipe" activeClassName="selected">Equipe</NavLink>
                </ul>
                <Link className='loginButton'>Login</Link>
            </div>
        </header>
    );
}

export default Header;