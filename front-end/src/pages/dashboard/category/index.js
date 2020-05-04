import React from 'react';

import Header from '../../../components/form/header'
import CategoryForm from '../../../components/form/category';
import { ContainerAddCategory } from './style';

export default function AddCategory() {

    return(
        <ContainerAddCategory>
            <Header title="Adicione uma categoria"/>
            <CategoryForm />
        </ContainerAddCategory>
    );

}
