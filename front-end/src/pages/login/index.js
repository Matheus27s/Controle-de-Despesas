import React, { useState } from 'react';

import api from '../../services/api'

import logo from '../../img/logo.png';
import './login.css';

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
        <div id="container-login">
            <form onSubmit={loginUser}>

                <img src={ logo } alt="logo"/>

                <input type="text" 
                       placeholder="Login" 
                       id="login" 
                       name="login" 
                       value={ login }
                       onChange={ e => setLogin(e.target.value) }
                />

                <input type="password" 
                       placeholder="Password" 
                       id="password" 
                       name="password"
                       value={ password }
                       onChange={ e => setPassword(e.target.value) }
                />

                <button>Enviar</button>

            </form>
        </div>
    );

}