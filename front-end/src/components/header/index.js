import React from 'react';

//Contexts:
import { useAuth } from '../../context/auth';

import { ContainerHeader, ContainerUser } from './style';

import logo from '../../img/logo-single.svg';

export default function Header() {

    const { user } = useAuth();

    return(     
        <ContainerHeader >
            <img src={ logo } alt="logo"></img>
            
            <ContainerUser>
                <strong>{ user.name }</strong>
                <div></div>
            </ContainerUser>
        </ContainerHeader>
    );
}