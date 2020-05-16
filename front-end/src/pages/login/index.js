import React, { useState, useRef } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import { ContainerLogin, ContainerRight, ContainerLeft, LoginInput, ContainerRegister } from './style';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/auth';

import ButtonDefault from '../../components/buttons';
import Input from '../../components/form/inputs/text';

import logo from '../../img/logo.svg';

export default function Login() {

    const formRef = useRef(null);
    const { signIn } = useAuth();

    const loginUser = (data, { reset }) => {

        console.log(data)
        signIn(data.login);
    }

    return (
        
        <ContainerLogin>

            <ContainerLeft>
                <img src={ logo } alt="logo"/>
                <p>Sistema que irá auxiliar no controle dos seus gastos.</p>
            </ContainerLeft>

            <ContainerRight>
            <Form ref={formRef} onSubmit={ loginUser } >

                <h2>Login</h2>

                <Input name="login" type="text" placeholder="Login"/>
                <Input name="password" type="password" placeholder="Password"/>

                <ButtonDefault>Login</ButtonDefault>

            </Form>

            </ContainerRight>
        </ContainerLogin>
    );

}