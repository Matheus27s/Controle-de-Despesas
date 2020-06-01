import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import api from '../../services/api';

//Contexts:
import { useAuth } from '../../context/auth';

//Components:
import ButtonDefault from '../../components/buttons';
import Input from '../../components/form/inputs/text';
import Upload from '../../components/form/inputs/uploads';

import { ContainerRegister, ContainerOption, ContainerRight, ContainerLeft } from './style';
import logo from '../../img/logo.svg';

export default function Register({ history }) {

    const { user } = useAuth();
    const formRef = useRef(null);
    const [pictures, setPictures] = useState([]);

    async function registerUser(data) {

        const response = await api.post('users', {
            name: data.name,
            login: data.login,
            password: data.password,
            profile: data.profile 
        });

        history.push('/');
    }

    return (
        
        <ContainerRegister>

            <ContainerLeft>
                <img src={ logo } alt="logo"/>
                <p>Sistema que irá auxiliar no controle dos seus gastos.</p>
            </ContainerLeft>

            <ContainerRight>
            <Form ref={formRef} onSubmit={registerUser}>

                <h2>Cadastro</h2>

                <Input 
                    type="text"
                    name="name"
                />

                <Input 
                    type="text"
                    name="login"
                />

                <Input 
                    type="password"
                    name="password"
                />

                <ButtonDefault>Cadastro</ButtonDefault>

            </Form>

            <ContainerOption>
                <p>Login</p>
                <Link to="/" >{ '<' }</Link>
            </ContainerOption>

            </ContainerRight>
        </ContainerRegister>
    );
}