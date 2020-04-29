import React, { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';

import { CategoryContainer, LoginInput } from './style';

export default function CategoryForm() {

    const [ name, setName ] = useState('');
    const [ color, setColor ] = useState('');

    async function addCategory() {
        
        const response = await api.post('categories', {
          name,
          color,
        })
    }

    return(

        <CategoryContainer>  
            <form onSubmit={ addCategory }>  
                
                <LoginInput 
                    onChange={ e => setName(e.target.value) }
                    type="text"
                    placeholder="Nome"
                    name={ name }
                    required
                />

                <LoginInput 
                    onChange={ e => setColor(e.target.value) }
                    type="text"
                    placeholder="Cor"
                    name={ color }
                    required
                />

                <button type="submit">Inserir</button>

            </form>
        </CategoryContainer>
        
    )
}

