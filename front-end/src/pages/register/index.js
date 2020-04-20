import React, { useState } from 'react';

import { ContainerLogin, ContainerRight, ContainerLeft, LoginInput, ContainerRegister, ContainerAdress } from './style';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api'

import logo from '../../img/logo.svg';

export default function Register({ history }) {

    const [ name, setName ] = useState('');
    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUF ] = useState('');


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

                <h2>Cadastro</h2>

                <LoginInput type="text" 
                       placeholder="Nome" 
                       id="name" 
                       name="name" 
                       value={ name }
                       onChange={ e => setName(e.target.value) }
                       required
                />

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

                <ContainerAdress>

                    <LoginInput type="text" 
                       placeholder="Cidade" 
                       id="city" 
                       name="city"
                       value={ city }
                       onChange={ e => setCity(e.target.value) }
                       required
                    />

                    <LoginInput type="text" 
                       placeholder="UF" 
                       id="uf" 
                       name="uf"
                       value={ uf }
                       onChange={ e => setUF(e.target.value) }
                       required
                    />

                </ContainerAdress>

                <button>Cadastro</button>

                <ContainerRegister>
                    <p>Login</p>
                    <Link to="/" >
                        <FiChevronLeft size={ 30 } color="#29B573"/>
                    </Link>
                </ContainerRegister>


            </form>

            </ContainerRight>
        </ContainerLogin>
    );

}