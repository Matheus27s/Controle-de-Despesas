import React, { useState } from 'react';

import Header from '../../../components/form/header';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import pt from 'date-fns/locale/pt';

import { useAuth } from '../../../context/auth';
import { useRecipe } from '../../../context/recipe';

import api from '../../../services/api';

import { RecipeContainer, RecipeForm, RecipeInput } from './style';

export default function AddRecipe() {

    const { recipe } = useRecipe();

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
           <Header title="Nova receita no mês"/>

           <RecipeForm>  
            <form onSubmit={ addRecipe }>  
                
                <RecipeInput 
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
        </RecipeForm>
            
        </RecipeContainer>
    );

}
