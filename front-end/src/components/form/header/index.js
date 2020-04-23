import React from 'react';

import { ContainerHeader } from './style';

export default function Header({ title }) {

    return(     
        <ContainerHeader >  
            <p>{ title }</p>
        </ContainerHeader>  
    );
}