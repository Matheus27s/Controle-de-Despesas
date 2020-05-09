import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import pt from 'date-fns/locale/pt';

import { useAuth } from '../../../context/auth';
import { useRecipe } from '../../../context/recipe';


import api from '../../../services/api';

import { RecipeContainer, LoginInput } from './style';

export default function RecipeForm() {

    const { setRecipe } = useRecipe();
    const [ value, setValue ] = useState(0);
    const [ dateMonth, setDateMonth ] = useState(new Date());
    const { user, signOut } = useAuth();

    async function addRecipe() {
        
        const response = await api.post('recipes', {
          value,
          dateMonth,
          user,
        })

        signOut();
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
                    selected={ dateMonth } 
                    onChange={date => setDateMonth(date)} 
                    locale={pt}
                    dateFormat="dd/MM/yyyy"
                />

                <button type="submit">Inserir</button>

            </form>
        </RecipeContainer>
        
    )
}

