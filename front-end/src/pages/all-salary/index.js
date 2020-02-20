import React, { useState, useEffect } from 'react';

import { ContainerSalaries } from './styles';

import api from '../../services/api';

import Button from '../../components/button';
import Header from '../../components/header';

export default function AllSalary( { match, history } ) {
    
    const [ salaries, setSalaries ] = useState([]);

    useEffect(() => {

        async function allSalaries() {
            const response = await api.get(`users/${ match.params.id }`);
            setSalaries(response.data.salaries);
        } 
        allSalaries();

    },[match.params.id]);

    function allExpenses( salary ) {
        history.push(`/salaries/${ salary.id }`); 
    }

    function addSalary() {
        history.push(`/salary/${ match.params.id }`);
    }

    return(
        <>
            <Header title={ 'Insira um novo valor' }/>

            <ContainerSalaries>

                { salaries.map( salary => (
                    <button onClick={ () => allExpenses(salary) } key={ salary.id }>{ salary.data }</button>
                ))}

                <Button addExpense = { addSalary }/>

            </ContainerSalaries>


        </>
    );

}