import React from 'react';

//Contexts:
import { PageProvider } from '../../context/page';
import { RecipeProvider } from '../../context/recipe';

//Routes:
import AppPagesRoutes from '../../routes/app.pages.routes';

//Components:
import Header from '../../components/header';
import SideBar from '../../components/side-bar';

import { ContainerDashboard } from './style';

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
