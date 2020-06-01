import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

//Contexts:
import { useAuth } from '../../context/auth';

//Components:
import ButtonDefault from '../../components/buttons';
import Input from '../../components/form/inputs/text';

import { ContainerLogin, ContainerRight, ContainerLeft, ContainerOption } from './style';
import logo from '../../img/logo.svg';

export default function Login() {

    const { signIn } = useAuth();

    const formRef = useRef(null);

    const loginUser = async (data, { reset }) => {

        try {

            const schema = Yup.object().shape({
                login: Yup.string().required('O Login é obrigatório'),
                password: Yup.string().required(),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            formRef.current.setErrors({});
            signIn(data.login);

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

                <ContainerOption>
                    <p>Registrar-se</p>
                    <Link to="/register" >{ '>' }</Link>
                </ContainerOption>
            </ContainerRight>
        </ContainerLogin>
    );
}