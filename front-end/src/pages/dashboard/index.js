import React, { useState, useEffect } from 'react';

import { Switch, Route, Link } from 'react-router-dom';  

import Header from './header';
import SideBar from './side-bar';
import { ContainerDashboard } from './style';
import PartialSalaryProvider from '../../context/PartialSalary'; 

import Main from './main';

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
