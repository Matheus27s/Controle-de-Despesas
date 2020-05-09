import React from 'react';

import Header from '../../components/header';
import SideBar from '../../components/side-bar';

import { ContainerDashboard } from './style';

import { PageProvider } from '../../context/page';
import { RecipeProvider } from '../../context/recipe';

import AppPagesRoutes from '../../routes/app.pages.routes';

export default function Dashboard() {

    return (

        <ContainerDashboard>
            <PageProvider>

                    <Header/>
                    <RecipeProvider>
                        
                        <AppPagesRoutes />

                    </RecipeProvider>
                    <SideBar />

            </PageProvider>
        </ContainerDashboard>
            
    );
}
