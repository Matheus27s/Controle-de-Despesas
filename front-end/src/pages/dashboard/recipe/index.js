import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../../services/api';

//Contexts:
import { useAuth } from '../../../context/auth';
import { usePage } from '../../../context/page';

//Components:
import Header from '../../../components/form/header';
import DatePicker from '../../../components/form/inputs/datepicker';
import ButtonDefault from '../../../components/buttons';

import { RecipeContainer, RecipeForm } from './style';

export default function Recipe() {

    const { user } = useAuth();
    const formRef = useRef(null);
    const { handlePage } = usePage();

    async function addRecipe(data, { reset }) {

        try {

            const schema = Yup.object().shape({
                dateMonth: Yup.date().
                typeError("Campo nulo."),
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
            handlePage('page01');

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
                    
                    <DatePicker 
                        name="dateMonth"                     
                        placeholderText="Data*"
                    />

                    <ButtonDefault type="submit">Inserir</ButtonDefault>

                </Form>
            </RecipeForm>
            
        </RecipeContainer>
    );
}
