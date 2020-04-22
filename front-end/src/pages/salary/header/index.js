import React, { useEffect, useState } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { ContainerHeader, Overflow } from './style';
import { useSalary } from '../../../context/Salary';
import api from '../../../services/api';

import logo from '../../../img/logo-single.svg';

export default function Header() {

    return(     
        <ContainerHeader >
            <img src={ logo }></img>
            <div></div>
        </ContainerHeader>
    );
}