import React from 'react';

import Header from '../../components/header';
import SideBar from '../../components/side-bar';

import { ContainerAddRecipe } from './style';

import Main from './main';

export default function AddRecipe() {

    return(
        <ContainerAddRecipe>

            <Header/>
            <Main />
            <SideBar />

        </ContainerAddRecipe>
    );

}
