import React from 'react';

import Add from './add';
import List from './list';

import { ContainerExpense } from './style';

export default function Expenses() {

    return(

        <ContainerExpense>

            <List />
            <Add />

        </ContainerExpense>

    );

}
