import React from 'react';

import { FiUser } from 'react-icons/fi';
import { ContainerFooter } from './style'

import { useSalary } from '../../../context/Salary';
import { usePartialSalary } from '../../../context/PartialSalary';


export default function Footer() {

    const { salary } = useSalary();
    const { partialSalary } = usePartialSalary();

    return(

        <ContainerFooter>

            <div>
                <FiUser size={ 30 } color=""/>
                <h1>{ partialSalary }</h1>
                <h1>{ salary.value }</h1>
                <h1>User</h1>
            </div>

        </ContainerFooter>

    );

}
