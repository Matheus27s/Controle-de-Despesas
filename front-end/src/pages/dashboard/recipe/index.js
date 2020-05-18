import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../../services/api';

//Contexts:
import { useAuth } from '../../../context/auth';

//Components:
import Header from '../../../components/form/header';
import DatePicker from '../../../components/form/inputs/datepicker';
import ButtonDefault from '../../../components/buttons';

import { RecipeContainer, RecipeForm } from './style';
import { useEffect } from 'react';

export default function AddRecipe() {

    const { user } = useAuth();

    const formRef = useRef(null);

    async function addRecipe(data, { reset }) {

        try {

            const schema = Yup.object().shape({
                dateMonth: Yup.date().required()
            });

            await schema.validate(data, {
                abortEarly: false
            });
            
            formRef.current.setErrors({});

            console.log(data);

            await api.post('recipes', {
                dateMonth: data.dateMonth,
                user
            });

            reset();


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
                    
                    <DatePicker name="dateMonth" />
                    <ButtonDefault type="submit">Inserir</ButtonDefault>

                </Form>
            </RecipeForm>
            
        </RecipeContainer>
    );
}
