import React, { useState } from 'react';

import { ContainerLogin, ContainerRight, ContainerLeft, LoginInput, ContainerRegister } from './style';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/auth';

import logo from '../../img/logo.svg';

export default function Login() {

    const { signIn } = useAuth();

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        signIn( login );
    }

    return (
        
        <ContainerLogin>

            <ContainerLeft>
                <img src={ logo } alt="logo"/>
                <p>Sistema que irá auxiliar no controle dos seus gastos.</p>
            </ContainerLeft>

            <ContainerRight>
            <form onSubmit={ loginUser } method={"POST"}>

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

                <ContainerRegister>
                    <p>Register</p>
                    <Link to="/register" >
                        <FiChevronRight size={ 30 } color="#29B573"/>
                    </Link>
                </ContainerRegister>

            </form>

            </ContainerRight>
        </ContainerLogin>
    );

}