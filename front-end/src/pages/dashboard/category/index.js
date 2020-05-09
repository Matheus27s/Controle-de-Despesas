import React from 'react';

import Header from '../../../components/form/header'
import CategoryForm from '../../../components/form/category';
import { ContainerAddCategory } from './style';
import { useRecipe } from '../../../context/recipe';

export default function AddCategory() {

    const { recipe } = useRecipe();

    return(
        <ContainerAddCategory>
            <Header title="Adicione uma categoria"/>

            <h1>{ recipe.id }</h1>

            <CategoryForm />
        </ContainerAddCategory>
    );

}
