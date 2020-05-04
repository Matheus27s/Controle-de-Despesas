import React from 'react';


import Header from '../../../components/form/header'
import MoveForm from '../../../components/form/move';

import { ContainerAddMove } from './style';

export default function AddMove() {

    return(
        <ContainerAddMove>
            <Header title="Nova movimentação"/>
            <MoveForm />
        </ContainerAddMove>

    );

}
