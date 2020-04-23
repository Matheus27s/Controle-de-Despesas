import React from 'react';

import { FiChevronRight, FiHome, FiClipboard, FiDollarSign } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { ContainerSideBar } from './style';


export default function SideBar() {

    return(
        <ContainerSideBar>
            <ul>
                <li>
                    <Link to={`/dashboard/${ 1 }`}>
                        <FiHome size={ 32 } color="48887B"/>
                    </Link>
                </li>

                <li>
                    <Link to={"/salary"} >
                        <FiDollarSign size={ 32 } color="48887B"/>
                    </Link>
                </li>

                <li>
                    <Link to={"/expense"}>
                        <FiClipboard size={ 32 } color="48887B"/>
                    </Link>
                </li>
            </ul>
        </ContainerSideBar>
    );

}