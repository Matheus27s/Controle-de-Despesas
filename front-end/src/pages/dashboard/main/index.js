import React from 'react';

import Pie from './pie';
import Bar from './bar';
import Expenses from './expenses';

import { ContainerMain } from './style';

export default function Main() {

    return(

        <ContainerMain>

            <Expenses />
            <Pie />
            <Bar />
            
        </ContainerMain>
    );

}

