import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import pt from 'date-fns/locale/pt';

import { useUser } from '../../../context/User';
import { useRecipe } from '../../../context/Recipe';


import api from '../../../services/api';

import { RecipeContainer, LoginInput } from './style';

export default function RecipeForm() {

    const [ value, setValue ] = useState(0);
    const [ dateMonth, setDateMonth ] = useState(new Date());
    //const { recipe, setRecipe } = useRecipe();

    //const { user } = useUser();

    async function addRecipe() {
        
        //const response = await api.post('recipes', {
         // value,
          //dateMonth,
          //user,
       // })

       // setRecipe(response.data); 
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

