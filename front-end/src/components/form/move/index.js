import React, { useState, useEffect } from 'react';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import pt from 'date-fns/locale/pt';

import { useRecipe } from '../../../context/Recipe';
import api from '../../../services/api';

import { Expense, LoginInput, Select } from './style';

export default function MoveForm() {

    const [ name, setName ] = useState('');
    const [ value, setValue ] = useState(0);
    const [ data, setData ] = useState(new Date());
    const [ category, setCategory ] = useState({ name: 'Selecione...',  color: 'blue' });
    const { recipe } = useRecipe();
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        allCategories();
    },[ recipe ]);

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

    async function addMove(e) {

        if( category.name == 'Selecione...' ) {
            alert('Insira uma categoria')
            return;
        }

        const response = await api.post('moves', {
          name,
          value,
          data,
          recipe,
          category,
        })
    }

    return(

        <Expense>  
            <form onSubmit={ addMove }>  
                
                <LoginInput 
                    onChange={ e => setName(e.target.value) }
                    type="text"
                    placeholder="Movimentação"
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

