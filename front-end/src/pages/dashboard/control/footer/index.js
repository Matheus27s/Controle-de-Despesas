import React from 'react';

import { ContainerHeader } from './style';
import { useRecipe } from '../../../../context/Recipe';

export default function Footer() {

    return(     
        <ContainerHeader >
            <h2>{ 1200 },00 $</h2>
        </ContainerHeader>
    );
}