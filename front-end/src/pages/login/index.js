import React, { useState } from 'react';

import { LoginForm, LoginInput, LoginContainer } from './style';

import api from '../../services/api'

import logo from '../../img/logo.png';

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
        
        <LoginContainer>
            <LoginForm onSubmit={loginUser}>

                <img src={ logo } alt="logo"/>

                <LoginInput type="text" 
                       placeholder="Login" 
                       id="login" 
                       name="login" 
                       value={ login }
                       onChange={ e => setLogin(e.target.value) }
                />

                <LoginInput type="password" 
                       placeholder="Password" 
                       id="password" 
                       name="password"
                       value={ password }
                       onChange={ e => setPassword(e.target.value) }
                />

                <button>Enviar</button>

            </LoginForm>
        </LoginContainer>
    );

}