import React, { useEffect, useState } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { ContainerHeader, Overflow } from './style';
import { useSalary } from '../../../context/Salary';
import api from '../../../services/api';

export default function Header() {

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

        <button>ADD</button>

            <Overflow>
                <ul>
                    { salaries.map( item => (
                        <li onClick={() => switchSalary(item) } key={item.id}>{ item.data }</li>
                    ))}
                </ul>
            </Overflow>

            <button>ADD</button>

        </ContainerHeader>
    );
}