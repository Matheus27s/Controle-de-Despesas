import React from 'react';

import { ContainerHeader } from './style';
import { useRecipe } from '../../../../context/recipe';

export default function Footer() {

    const { recipe } = useRecipe();

    return(     
        <ContainerHeader >
            <h2>{ recipe.value },00 $</h2>
        </ContainerHeader>
    );
}