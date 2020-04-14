import React from 'react';

import Pies from './pie';
import Bar from './bar';
import Expense from './expense';

import { ContainerMain } from './style';

export default function Main() {

    return(

        <ContainerMain>

            <Expense />
            <Pies />
            <Bar />
            
        </ContainerMain>
    );

}

