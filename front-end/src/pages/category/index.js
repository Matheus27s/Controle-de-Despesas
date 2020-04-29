import React from 'react';

import Header from '../../components/header';
import SideBar from '../../components/side-bar';

import { ContainerAddCategory } from './style';

import Main from './main';

export default function AddCategory() {

    return(
        <ContainerAddCategory>

            <Header/>
            <Main />
            <SideBar />

        </ContainerAddCategory>
    );

}
