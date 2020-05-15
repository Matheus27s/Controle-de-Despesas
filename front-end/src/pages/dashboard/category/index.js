import React, { useState } from 'react';

import Header from '../../../components/form/header'
import { useRecipe } from '../../../context/recipe';

import { CategoryContainer, CategoryForm, CategoryInput } from './style';

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import api from '../../../services/api';

export default function AddCategory() {

    const { recipe } = useRecipe();
    const [ name, setName ] = useState('');
    const [ color, setColor ] = useState('');

    async function addCategory() {
        
        await api.post('categories', {
          name,
          color,
        })
    }

    return(
        <CategoryContainer>
            <Header title="Adicione uma categoria"/>

            <CategoryForm>  
                <form onSubmit={ addCategory }>  
                    
                    <CategoryInput 
                        onChange={ e => setName(e.target.value) }
                        type="text"
                        placeholder="Nome"
                        name={ name }
                        required
                    />

                    <CategoryInput 
                        onChange={ e => setColor(e.target.value) }
                        type="text"
                        placeholder="Cor"
                        name={ color }
                        required
                    />

                    <button type="submit">Inserir</button>

                </form>
            </CategoryForm>
        </CategoryContainer>
    );

}
