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
    const [ paymentDate, setPaymentDate ] = useState(new Date());
    const [ category, setCategory ] = useState({});
    const [ typeMove, setTypeMove ] = useState(0);
    const { recipe } = useRecipe();
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        allCategories();
    },[ recipe ]);

    async function allCategories() {
        const response = await api.get(`categories`);
        setCategories(response.data);
    }

    function handleChangeCategory(e) {

        if( e.target.value == 'Categoria' ){
            return;
        }

        categories.map( item => {

            if(item.id == e.target.value) {
                setCategory(item);
            }   

            return true;
        })
    }

    function handleChangeType(e) {
        setTypeMove(e.target.value);
    }

    async function addMove(e) {

        if( !category.name ) {
            alert('Insira uma categoria')
            e.preventDefault();
            return;
        }

        if( typeMove == 0 ){
            alert("Defina um tipo de movimentação")
            e.preventDefault();
            return;
        }

        await api.post('moves', {
          name,
          value,
          paymentDate,
          typeMove,
          recipe,
          category
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
                    selected={ paymentDate } 
                    onChange={date => setPaymentDate(date)} 
                    locale={pt}
                    dateFormat="dd/MM/yyyy"
                />
                 
                <Select 
                    required 
                    onChange={ handleChangeCategory }>
                        <option value="Categoria">Categoria</option>

                        <optgroup>

                        { categories.map( item => (

                            <option
                                value={ item.id } 
                                key={ item.id }>{ item.name }
                            </option> 
                            ))}

                        </optgroup>
                    
                </Select>

                <Select 
                    required 
                    onChange={ handleChangeType }>
                        <option 
                            value={ 0 }
                            key={ 0 }>Tipo de movimentação em conta?
                        </option>

                        <optgroup >

                            <option
                                value={ 1 } 
                                key={ 1 }>{ "RECEBIMENTO" }
                            </option> 

                            <option
                                value={ 2 } 
                                key={ 2 }>{ "GASTO" }
                            </option> 
                            ))}

                        </optgroup>
                    
                </Select>

                <button type="submit">Inserir</button>

            </form>
        </Expense>
        
    )
}

