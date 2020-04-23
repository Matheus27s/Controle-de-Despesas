import React from 'react';

import { ContainerHeader } from './style';


import logo from '../../img/logo-single.svg';

export default function Header() {

    return(     
        <ContainerHeader >
            <img src={ logo }></img>
            <div></div>
        </ContainerHeader>
    );
}