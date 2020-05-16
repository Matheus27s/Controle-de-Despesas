import React, { useState, useRef } from 'react';

import Header from '../../../components/form/header';

import { useAuth } from '../../../context/auth';
import { useRecipe } from '../../../context/recipe';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import InputSale from '../../../components/form/inputs/inputSale';
import DefaultDatePicker from '../../../components/Date/datepicker';


import api from '../../../services/api';

import { RecipeContainer, RecipeForm } from './style';

export default function AddRecipe() {

    const { recipe } = useRecipe();

    const { setRecipe } = useRecipe();
    const [ dateMonth, setDateMonth ] = useState(new Date());
    const { user, signOut } = useAuth();

    const formRef = useRef(null);

    async function addRecipe(data, { reset }) {

        try {

            const schema = Yup.object().shape({
                value: Yup.string().required('O valor é obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            await api.post('recipes', {
                value: data.value,
                dateMonth: data.dateMonth,
                user
            });
            
            formRef.current.setErrors({});


        } catch (err) {
            if( err instanceof Yup.ValidationError ) {
                const errorMessages = {};
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }
        }

    }

    return(
        <RecipeContainer>
           <Header title="Nova receita no mês"/>

           <RecipeForm>  
                <Form ref={formRef} onSubmit={ addRecipe }>  
                    
                    <InputSale name="value" disabled="disabled"/>
                    <DefaultDatePicker name="dateMonth" />
                    <button type="submit">Inserir</button>

                </Form>
            </RecipeForm>
            
        </RecipeContainer>
    );
}
