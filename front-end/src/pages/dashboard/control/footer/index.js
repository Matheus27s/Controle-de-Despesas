import React from 'react';
import { formatMoney } from '../../../../util/formatMoneyValue';

//Contexts:
import { useRecipe } from '../../../../context/recipe';

import { ContainerHeader } from './style';

export default function Footer() {

    const { recipe } = useRecipe();

    return(     
        <ContainerHeader >
           <h2>{ formatMoney( recipe.value ) }</h2>
        </ContainerHeader>
    );
}