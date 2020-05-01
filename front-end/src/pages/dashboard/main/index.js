import React from 'react';

import Header from './header';
import Pies from './pie';
import Bar from './bar';
import Move from './move';
import Footer from './footer';

import { ContainerMain } from './style';

export default function Main() {

    return(

        <ContainerMain>

            <Header />
            <Move />
            <Pies />
            <Bar />
            <Footer />
            
        </ContainerMain>
    );

}

