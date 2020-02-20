import React from 'react';

import { Headers } from './styles';

import MenuButton from '../../img/menu-button.png';
import Logo from '../../img/logo.png';

export default function Header( { title } ) {

    const logout = () => alert('Usuário deslogou!!');

    return(
        <Headers>
            <img src={ Logo } />
            <h3>{ title }</h3>
            <button onClick={ logout }><img src={ MenuButton }/></button>
        </Headers>
    );
    
}
