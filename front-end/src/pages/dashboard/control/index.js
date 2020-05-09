import React from 'react';

import Header from './header';
import Move from './move';
import Pie from './pie';
import Bar from './bar';
import Footer from './footer';

import { ContainerControl } from './style'

export default function Control() {
    
    return (
        <ContainerControl>
            <Header />
            <Move /> 
            <Pie />
            <Bar />
            <Footer /> 
        </ContainerControl>
    );
}
