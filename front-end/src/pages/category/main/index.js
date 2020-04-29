import React from 'react';

import { ContainerMain } from './style';

import Header from '../../../components/form/header'
import CategoryForm from '../../../components/form/category';

export default function Main() {

    return(

        <ContainerMain>
            <Header title="Adicione uma categoria"/>
            <CategoryForm />
        </ContainerMain>
    );

}

