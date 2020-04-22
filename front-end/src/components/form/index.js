import React, { useState } from 'react';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import pt from 'date-fns/locale/pt';

import { FiArrowUp } from 'react-icons/fi';

import { useSalary } from '../../context/Salary';
import api from '../../services/api';

import { Expense, LoginInput, Select } from './style';

export default function ExpenseForm() {

    const [ name, setName ] = useState('');
    const [ value, setValue ] = useState(0);
    const [ data, setData ] = useState(new Date());
    const [ category, setCategory ] = useState({ name: 'Selecione...',  color: 'blue' });
    const { salary } = useSalary();
    const [ categories, setCategories ] = useState([]);

    allCategories();

    async function allCategories() {
        const response = await api.get(`categories`);
        setCategories(response.data);
    }

    function handleChange(e) {
        categories.map( item => {

            if(item.id == e.target.value) {
                setCategory(item);
                console.log(item.name);
            }
        })
    }

    async function addExpense(e) {

        if( category.name == 'Selecione...' ) {
            alert('Insira uma categoria')
            return;
        }

        const response = await api.post('expenses', {
          name,
          value,
          data,
          salary,
          category,
        })
    }

    return(

        <Expense>  
            <form onSubmit={ addExpense }>  
                
                <LoginInput 
                    onChange={ e => setName(e.target.value) }
                    type="text"
                    placeholder="Despesa"
                    name={name}
                    required
                />

                <LoginInput 
                    onChange={ e => setValue(e.target.value) }
                    type="text"
                    placeholder="Valor"
                    name={value}
                    required
                />

                <DatePicker 
                    selected={data} 
                    onChange={date => setData(date)} 
                    locale={pt}
                    dateFormat="dd/MM/yyyy"
                />
                 
                <Select 
                    required 
                    onChange={ handleChange }>
                        <option>Selecione...</option>

                        <optgroup label="Categoria">

                        { categories.map( item => (

                            <option
                                value={ item.id } 
                                key={ item.id }>{ item.name }
                            </option> 
                            ))}

                        </optgroup>
                    
                </Select>

                <button type="submit">Inserir</button>

            </form>
        </Expense>
        
    )
}

