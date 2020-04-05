import React, { useEffect, useState } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { ContainerHeader } from './style';

import { useSalary } from '../../../context/Salary';

import api from '../../../services/api';

export default function Header() {

    const { salary, setSalary } = useSalary();
    const [ salaries, setSalaries ] = useState([]);

    useEffect( () => {
        allSalaries();
    },[salary])

    async function allSalaries() {
        const response = await api.get(`users/${1}`);
        console.log(response.data)
        setSalaries(response.data.salaries);
    }

    function switchSalary( item ) {
        setSalary(item);
    }
 
   return(     
        <ContainerHeader >

            <FiChevronLeft size={ 50 } color="#c4c4c4"/>

            <div>
                <ul>
                    { salaries.map( item => ( <li key={item.id} onClick={ () => switchSalary(item) }>{ item.data }</li> ) ) }
                </ul>
            </div>

            <FiChevronRight size={ 50 } color="#c4c4c4"/>

        </ContainerHeader>
    );
}