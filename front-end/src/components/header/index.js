import React from 'react';

import { Headers } from './styles';

import MenuButton from '../../img/menu-button.png';
import Logo from '../../img/logo.png';

export default function Header( { title, history } ) {

    function logout() {
        alert('Deseja deslogar?');
        history.push('/');
    } 

    return(
        <Headers>
            <img src={ Logo } />
            <h3>{ title }</h3>
    <button onClick={ logout }>{'< Logout'}</button>
        </Headers>
    );
    
}
