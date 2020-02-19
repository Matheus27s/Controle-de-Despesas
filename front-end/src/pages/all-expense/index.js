import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/button';
import ButtonLogout from '../../components/button-logout';

import './main.css';

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
            <Header title={ salary.data } />

            <div id="container-main">
                
                <Button addExpense = { addExpense } />

                <ul>

                    { expenses.map( expense => (
                    <li className="expense-item" key={ expense.id }>

                            <header>
                                <strong>{ expense.name }</strong>
                                <button onClick={e => deleteSalary( expense.id ) }>x</button>
                            </header>

                            <article>
                                    <img src={ expense.category.icon }/>
                                    <strong> { expense.category.name }</strong>
                                    <strong> { expense.data } </strong>
                                    <strong> - { expense.value }</strong>

                            </article>

                            <footer>
                                <strong>R$</strong> 
                                <p>{ decreaseSalary(expense.value) }</p>                          
                            </footer>
                    </li>
                    ))}
                </ul>

                <Footer salary={ salary } history={ history } salaryAtual={ valorParcial } />
                
            </div>

        </>
    );
}