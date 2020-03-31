import React, { useState, useEffect } from 'react';

import { ContainerLogin, ContainerRight, ContainerLeft, LoginInput, Register } from './style';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api'

import logo from '../../img/logo.svg';

export default function Login({ history }) {

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');

    async function loginUser(e) {
        e.preventDefault();
        
        const response = await api.get('users/', {
            params: {
                login,
            }
        })

        const { id } = response.data;
        history.push(`users/${ id }`)
    }

    return (
        
        <ContainerLogin>

            <ContainerLeft>
                <img src={ logo } alt="logo"/>
                <p>Sistema que irá auxiliar no controle dos seus gastos.</p>
            </ContainerLeft>

            <ContainerRight>
            <form onSubmit={loginUser}>

                <h2>Login</h2>

                <LoginInput type="text" 
                       placeholder="Login" 
                       id="login" 
                       name="login" 
                       value={ login }
                       onChange={ e => setLogin(e.target.value) }
                       required
                />

                <LoginInput type="password" 
                       placeholder="Password" 
                       id="password" 
                       name="password"
                       value={ password }
                       onChange={ e => setPassword(e.target.value) }
                       required
                />

                <button>Login</button>

                <Register>
                    <strong>Register</strong><a href="https://www.google.com.br" ><FiChevronRight size={ 30 } color="#29B573"/></a>
                </Register>


            </form>

            </ContainerRight>
        </ContainerLogin>
    );

}