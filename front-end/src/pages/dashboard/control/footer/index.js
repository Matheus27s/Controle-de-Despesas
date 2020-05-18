import React from 'react';

//Contexts:
import { useRecipe } from '../../../../context/recipe';

import { ContainerHeader } from './style';

export default function Footer() {

    const { recipe } = useRecipe();

    return(     
        <ContainerHeader >
            <h2>{ recipe.value } $</h2>
        </ContainerHeader>
    );
}