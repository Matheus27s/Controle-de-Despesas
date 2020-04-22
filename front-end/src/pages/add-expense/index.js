import React from 'react';

import Header from './header';
import SideBar from './side-bar';
import { ContainerAddExpense } from './style';
import PartialSalaryProvider from '../../context/PartialSalary'; 

import Main from './main';

export default function AddExpense() {

    return(
        <PartialSalaryProvider>
            <ContainerAddExpense>

                <Header/>
                <Main />
                <SideBar />

            </ContainerAddExpense>
        </PartialSalaryProvider>

    );

}
