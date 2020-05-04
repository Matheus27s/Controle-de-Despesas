import React from 'react';

import Header from '../../../components/form/header';
import RecipeForm from '../../../components/form/recipe';
import { ContainerAddRecipe } from './style';

export default function AddRecipe() {

    return(
        <ContainerAddRecipe>
           <Header title="Nova receita no mês"/>
           <RecipeForm />
        </ContainerAddRecipe>
    );

}
