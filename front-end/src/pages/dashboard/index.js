import React from 'react';

import Header from '../../components/header';
import SideBar from '../../components/side-bar';

import { ContainerDashboard } from './style';

import { PageProvider } from '../../context/page';

import Main from './main';

export default function Dashboard() {

    return (

        <ContainerDashboard>
            <PageProvider>

                <Header/>
                <Main />
                <SideBar />

            </PageProvider>
        </ContainerDashboard>
            
    );
}
