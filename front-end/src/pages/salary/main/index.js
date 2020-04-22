import React from 'react';

import { ContainerMain } from './style';

import Header from './header'

import ExpenseForm from '../../../components/form';

export default function Main() {

    return(

        <ContainerMain>
            <Header />
            <ExpenseForm />
        </ContainerMain>
    );

}

