import React, { useState, useRef, useEffect } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import Header from '../../../components/form/header';
import ButtonDefault from '../../../components/buttons';
import Input from '../../../components/form/inputs/text';

import api from '../../../services/api';

import { CategoryContainer, CategoryForm } from './style';

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function AddCategory() {

    const formRef = useRef(null);

    async function addCategory(data, { reset }) {

        try {

            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                color: Yup.string().required('A cor é obrigatório')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            console.log(data);
            formRef.current.setErrors({});

            await api.post('categories', data )

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
        <CategoryContainer>
            <Header title="Adicione uma categoria"/>

            <CategoryForm>  
                <Form ref={formRef} onSubmit={ addCategory }>  
                    <Input name="name" placeholder="Nome*"/>
                    <Input name="color" type="color" placeholder="Cor*"/>
                    <ButtonDefault type="submit">Inserir</ButtonDefault>
                </Form>
            </CategoryForm>
        </CategoryContainer>
    );
}