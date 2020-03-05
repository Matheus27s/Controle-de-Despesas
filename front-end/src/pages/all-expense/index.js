import React, { useState, useEffect } from 'react';

import { ContainerExpenses, ExpensesUl, ExpensesLi } from './styles';

import api from '../../services/api';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/button';

export default function Main( { match, history } ) {

    const [ salary, setSalary ] = useState('');
    const [ expenses, setExpenses ] = useState([]);

    let valorParcial = salary.value;

    useEffect(() => {

        async function getAllExpenses() {
            const response = await api.get(`salaries/${ match.params.id }`);
            setSalary(response.data);
            valorParcial = response.data.value;
            setExpenses(response.data.expenses);
        }

        getAllExpenses();

    }, [expenses]);

    function addExpense() {
        history.push(`/add-expense/${ salary.id }`);
    }
    
    function decreaseSalary( value ) {
        return valorParcial -= value;
    }

    function increaseSalary( value ) {
        return valorParcial += value;
    }

    async function deleteSalary(id) {
        const response = await api.delete(`expenses/${id}`);
        console.log(response);
    }

    return (

        <>
            <Header title={ salary.data } history={ history }/>

            <ContainerExpenses>
                
                <Button addExpense = { addExpense } />

                <ExpensesUl>

                    { expenses.map( expense => (
                    <ExpensesLi key={ expense.id }>

                            <header>
                                <strong>{ expense.name }</strong>
                                <button onClick={e => deleteSalary( expense.id ) }>x</button>
                            </header>

                            <article>
                                    <img src={ expense.category.icon }/>
                                    <strong> { expense.category.name }</strong>
                                    <strong> { expense.data } </strong>
                                    <h4> - { expense.value }</h4>

                            </article>

                            <footer>
                                <strong>$</strong>
                                <p> - </p>
                                <p>{ decreaseSalary(expense.value) }</p>                          
                            </footer>
                    </ExpensesLi>
                    ))}
                </ExpensesUl>

                <Footer salary={ salary } history={ history } salaryAtual={ valorParcial } />
                
            </ContainerExpenses>

        </>
    );
}