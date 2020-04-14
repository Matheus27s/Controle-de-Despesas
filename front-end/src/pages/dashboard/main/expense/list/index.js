import React, { useState, useEffect } from 'react';

import { ExpenseList, ContainerLeft, ContainerCenter, ContainerRight, Overflow } from './style';
import { useSalary } from '../../../../../context/Salary';
import { usePartialSalary } from '../../../../../context/PartialSalary';

import { format } from 'date-fns';

import { FiChevronsDown, FiX } from 'react-icons/fi';

export default function List() {

    const [ expenses, setExpenses ] = useState([]);
    const { salary } = useSalary();
    const { partialSalary, setPartialSalary } = usePartialSalary();

    useEffect( () => {
        allExpenses();
        soma();
    },[ salary ])

    async function allExpenses() {
        setExpenses(salary.expenses || [])
    }

    function soma() {
        expenses.map( item => (
            setPartialSalary( partialSalary + item.value )
        ))
    }

    return(
        <Overflow>
            <ExpenseList >
                   { expenses.map( item => (

                        <li key={ item.id }>
                            <ContainerLeft>

                                <FiChevronsDown color="red"/>
                                <div>
                                    <strong>{ item.name }</strong>
                                    <p>{ item.category.name }</p>
                                </div>

                            </ContainerLeft>

                            <ContainerCenter>
                                    <h2>{ format(item.data, "dd/MM") }</h2>
                            </ContainerCenter>

                            <ContainerRight>
                                <p>-</p>
                                    <strong>{ item.value },00</strong>
                                    <a href="#"><FiX /></a>
                            </ContainerRight>
                            </li>
                    ))}
               </ExpenseList>
            </Overflow>
    );
}
