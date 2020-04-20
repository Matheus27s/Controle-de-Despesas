import React from 'react';

import { FiChevronRight, FiHome, FiClipboard, FiDollarSign } from 'react-icons/fi';

import { ContainerSideBar } from './style';


export default function SideBar() {

    return(
        <ContainerSideBar>
            <ul>
                <li>
                    <FiHome size={ 32 } color="48887B"/>
                    <strong>Despesa</strong>
                </li>

                <li>
                    <FiDollarSign size={ 32 } color="48887B"/>
                    <strong>Despesa</strong>
                </li>

                <li>
                    <FiClipboard size={ 32 } color="48887B"/>
                    <strong>Despesa</strong>
                </li>
            </ul>
        </ContainerSideBar>
    );

}