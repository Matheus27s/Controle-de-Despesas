import React from 'react';

import { Buttons } from './styles';

export default function Button( { addExpense } ) {

    return (
        <Buttons onClick={ addExpense } >+</Buttons>
    );

}