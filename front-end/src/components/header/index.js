import React from 'react';

import './header.css';

import MenuButton from '../../img/menu-button.png';
import Logo from '../../img/logo.png';

import api from '../../services/api'

export default function Header( { title } ) {

    const logout = () => alert('Usuário deslogou!!');

    return(
        <header className="header">
            <img className="logo" src={ Logo } />
            <h3>{ title }</h3>
            <button onClick={ logout } className="btn-menu"><img src={ MenuButton }/></button>
        </header>
    );
    
}
