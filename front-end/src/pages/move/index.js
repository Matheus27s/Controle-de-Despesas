import React from 'react';

import Header from '../../components/header';
import SideBar from '../../components/side-bar';

import { ContainerAddMove } from './style';

import Main from './main';

export default function AddMove() {

    return(
        <ContainerAddMove>

            <Header/>
            <Main />
            <SideBar />

        </ContainerAddMove>

    );

}
