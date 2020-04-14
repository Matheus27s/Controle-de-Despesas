import React, { useState, useEffect } from 'react';

import Header from './header';
import Main from './main';
import Footer from './footer';

import { ContainerDashboard } from './style';

import PartialSalaryProvider from '../../context/PartialSalary'; 

export default function Dashboard() {

    return (

        <PartialSalaryProvider>
            <ContainerDashboard>
                
                <Header/>
                <Main />
                <Footer />

            </ContainerDashboard>
        </PartialSalaryProvider>
            
    );
}
