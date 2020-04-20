import React, { useState, useEffect } from 'react';

import Header from './header';
import Main from './main';
import SideBar from './side-bar';


import { ContainerDashboard } from './style';

import PartialSalaryProvider from '../../context/PartialSalary'; 

export default function Dashboard() {

    return (

        <PartialSalaryProvider>
            <ContainerDashboard>
                
                <Header/>
                <Main />
                <SideBar />

            </ContainerDashboard>
        </PartialSalaryProvider>
            
    );
}
