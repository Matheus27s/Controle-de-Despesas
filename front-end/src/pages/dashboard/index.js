import React, { useEffect, useState } from 'react';

//Provedor de acesso ao 'Salary'
import { useSalary } from '../../context/Salary';

import Header from './header';
import Main from './main';
import Footer from './footer';

import { ContainerDashboard } from './style';
import api from '../../services/api';

export default function Dashboard() {

    return (

        <ContainerDashboard>

            <Header />
            <Main />
            <Footer />

        </ContainerDashboard>
            
    );
}
