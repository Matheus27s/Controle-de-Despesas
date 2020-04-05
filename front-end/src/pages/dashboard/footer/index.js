import React from 'react';

import { FiUser } from 'react-icons/fi';
import { ContainerFooter } from './style'

import { useSalary } from '../../../context/Salary';

export default function Footer() {

    const { salary } = useSalary();

    return(

        <ContainerFooter>

            <div>
                <h1>$ { salary.value }</h1>
                <FiUser size={ 30 } color=""/>
            </div>

        </ContainerFooter>

    );

}
