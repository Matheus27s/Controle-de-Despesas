import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import pt from 'date-fns/locale/pt';

import { useRecipe } from '../../../context/Recipe';
import api from '../../../services/api';

import { RecipeContainer, LoginInput } from './style';

export default function RecipeForm() {

    const [ value, setValue ] = useState(0);
    const [ data, setData ] = useState(new Date());
    const { setRecipe } = useRecipe();

    async function addRecipe(e) {
        
        const response1 = await api.get(`users/${ 1 }`);
        const response = await api.post('recipes', {
          value,
          data,
          user: response1.data,
        })

        setRecipe(response.data); 
    }

    return(

        <RecipeContainer>  
            <form onSubmit={ addRecipe }>  
                
                <LoginInput 
                    onChange={ e => setValue(e.target.value) }
                    type="text"
                    placeholder="Valor"
                    name={ value }
                    required
                />

                <DatePicker 
                    selected={ data } 
                    onChange={date => setData(date)} 
                    locale={pt}
                    dateFormat="dd/MM/yyyy"
                />

                <button type="submit">Inserir</button>

            </form>
        </RecipeContainer>
        
    )
}

