import React from 'react';

import { ContainerMain } from './style';

import Header from '../../../components/form/header'
import RecipeForm from '../../../components/form/recipe';

export default function Main() {

    return(

        <ContainerMain>
            <Header title="Adicione um salário"/>
            <RecipeForm />
        </ContainerMain>
    );

}
