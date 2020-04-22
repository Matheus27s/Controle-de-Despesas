import React from 'react';

import Header from './header';
import Pies from './pie';
import Bar from './bar';
import Expense from './expense';
import Footer from './footer';

import { ContainerMain } from './style';

export default function Main() {

    return(

        <ContainerMain>

            <Header />
            <Expense />
            <Pies />
            <Bar />
            <Footer />
            
        </ContainerMain>
    );

}

