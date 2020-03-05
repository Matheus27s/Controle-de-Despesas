import React, { useState, useEffect } from 'react';

import Select from 'react-select'

import { ContainerExpense, ExpenseUl, ExpenseForm } from './styles';

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

import api from '../../services/api'
import Header from '../../components/header';

export default function AddExpense( { match, history } ) {

    registerLocale('pt', pt);

    const [ categories, setCategories ] = useState([]);

    const [ name, setName ] = useState('');
    const [ value, setValue ] = useState(''); 
    const [ category, setCategory ] = useState(''); 
    const [ salary, setSalary ] = useState('');

    const [startDate , setStartDate ] = useState(new Date());

    const selectStyle = {
        color:'red'
    }

    useEffect(()=> {

        async function allCategories() {
            const response = await api.get('categories/');

            setCategories(response.data.map( category => (
                  { id: category.id, value:category.name, label:category.name }
            )));
        };

        allCategories();

    }, []);

    useEffect(() => {

        async function showSalary() {
            const response = await api.get(`salaries/${ match.params.id }`);
            setSalary(response.data);
        };

        showSalary();

    }, []);

    async function handleChange( category ) {
        const response = await api.get(`categories/${ category.id }`);
        const { data } = response;

        setCategory(data);
    }

    async function insertExpense(e) {
        e.preventDefault();

        const data = startDate.toLocaleDateString();

        const response = await api.post('expenses/', {
            name,
            value,
            data,
            category,
            salary,
        });
        
        history.push(`/salaries/${ salary.id }`);
    }

    return(

        <>
            <Header title={ salary.data } history={ history }/>
            <ContainerExpense id="container-main">

                <ExpenseUl>

                    <h4>Inserir uma nova despesa</h4>

                    <ExpenseForm onSubmit={insertExpense}>

                        <input
                            type="text"
                            placeholder="Nome"
                            id="name"
                            name="name"
                            onChange={ e => setName(e.target.value) }
                            value={ name } 
                            required  
                        />

                        <input
                            type="text"
                            placeholder="Valor"
                            id="value"
                            name="value"
                            onChange={ e => setValue(e.target.value) }
                            value={ value } 
                            required 
                        />

                        <Select
                            type="select"
                            options={ categories }
                            onChange={ handleChange }
                            placeholder={'Escolha uma opção!'}
                            styles={selectStyle}
                        />

                        <DatePicker 
                            type="date" 
                            selected={ startDate } 
                            onChange={date => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            locale="pt"
                        />

                        <button>Cadastrar</button>
                        <button>Cancelar</button>

                    </ExpenseForm>
                </ExpenseUl>
            </ContainerExpense>
        </>
    );
}