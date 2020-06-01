import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../../services/api';

//Contexts:
import { usePage } from '../../../context/page';

//Components:
import Header from '../../../components/form/header';
import ButtonDefault from '../../../components/buttons';
import Input from '../../../components/form/inputs/text';

import { CategoryContainer, CategoryForm } from './style';

export default function AddCategory() {

    const formRef = useRef(null);
    const { handlePage } = usePage();

    async function addCategory( data ) {

        try {

            const schema = Yup.object().shape({
                name: Yup.string().required('Campo nulo.'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            console.log(data);
            formRef.current.setErrors({});

            await api.post('categories', data )

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
        <CategoryContainer>
            <Header title="Adicione uma categoria"/>

            <CategoryForm>  
                <Form ref={formRef} onSubmit={ addCategory }>  
                
                    <Input 
                        name="name" 
                        placeholder="Nome*"
                    />

                    <Input 
                        name="color" 
                        type="color" 
                        placeholder="Cor*"
                    />

                    <ButtonDefault type="submit">Inserir</ButtonDefault>
                </Form>
            </CategoryForm>
        </CategoryContainer>
    );
}