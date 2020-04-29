import React from 'react';

import { FiHome, FiClipboard, FiDollarSign, FiHash } from 'react-icons/fi';

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
                    <Link to={"/recipes"} >
                        <FiDollarSign size={ 32 } color="48887B"/>
                    </Link>
                </li>

                <li>
                    <Link to={"/moves"}>
                        <FiClipboard size={ 32 } color="48887B"/>
                    </Link>
                </li>

                <li>
                    <Link to={"/categories"}>
                        <FiHash size={ 32 } color="48887B"/>
                    </Link>
                </li>
            </ul>
        </ContainerSideBar>
    );

}