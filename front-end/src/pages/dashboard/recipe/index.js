import React from 'react';

import Header from '../../../components/form/header';
import RecipeForm from '../../../components/form/recipe';
import { ContainerAddRecipe } from './style';
import { useRecipe } from '../../../context/recipe';

export default function AddRecipe() {

    const { recipe } = useRecipe();

    return(
        <ContainerAddRecipe>
           <Header title="Nova receita no mês"/>
           <RecipeForm />
        </ContainerAddRecipe>
    );

}
