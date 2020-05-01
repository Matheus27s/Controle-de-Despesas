import React from 'react';

import { ContainerMain } from './style';

import Header from '../../../components/form/header'

import MoveForm from '../../../components/form/move';

export default function Main() {

    return(

        <ContainerMain>
            <Header title="Nova movimentação"/>
            <MoveForm />
        </ContainerMain>
    );

}

