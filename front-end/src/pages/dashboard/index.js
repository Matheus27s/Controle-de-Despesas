import React from 'react';

import Header from '../../components/header';
import SideBar from '../../components/side-bar';

import { ContainerDashboard } from './style';

import Main from './main';

export default function Dashboard() {

    return (

        <ContainerDashboard>

            <Header/>
            <Main />
            <SideBar />

        </ContainerDashboard>
            
    );
}
