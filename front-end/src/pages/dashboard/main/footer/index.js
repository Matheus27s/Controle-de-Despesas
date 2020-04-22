import React, { useEffect, useState } from 'react';

import { ContainerHeader } from './style';
import { useSalary } from '../../../../context/Salary';
import api from '../../../../services/api';

export default function Footer() {

    const id = localStorage.getItem('id');
    const [ salaries, setSalaries ] = useState([]);
    const { setSalary } = useSalary();

    useEffect( () => {
        allSalaries();
    },[ id ])

    async function allSalaries() {
        const response = await api.get(`users/${ id }`);
        setSalaries(response.data.salaries);
        setSalary(response.data.salaries[0]);
    }

    async function switchSalary( salary ) {
        setSalary(salary);        
    }

    return(     
        <ContainerHeader >
            <h2>800,00 / 1.200,00 $</h2>
        </ContainerHeader>
    );
}