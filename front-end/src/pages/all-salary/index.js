import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Button from '../../components/button';
import Header from '../../components/header';

import './salary.css';

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

            <div id="container-main">

                { salaries.map( salary => (
                    <button className="btn-salary" onClick={ () => allExpenses(salary) } key={ salary.id }>{ salary.data }</button>
                ))}

                <Button addExpense = { addSalary }/>

            </div>


        </>
    );

}