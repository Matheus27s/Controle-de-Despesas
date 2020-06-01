import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

//API
import api from '../../../services/api';

//Context
import { useAuth } from '../../../context/auth';

//Components:
import Header from '../../../components/form/header'
import Input from '../../../components/form/inputs/text';
import ButtonDefault from '../../../components/buttons';
import Upload from '../../../components/form/inputs/uploads';

import { MoveContainer, MoveForm } from './style';

export default function User() {

    const { user, signIn } = useAuth();
    const formRef = useRef(null);
    const [pictures, setPictures] = useState([]);

    const initialData = {
        name: user.name,
        login: user.login,
        password: user.password
    }

    async function editUser(data) {
        const response = await api.post('users', {
            id: user.id,
            name: data.name,
            login: data.login,
            password: data.password,
            profile: data.profile 
        })

        signIn(response.data.login);

    }

    return(
        <MoveContainer>

            <Header title="Editar usuário"/>
            
            <MoveForm> 

            <Form ref={formRef} initialData={ initialData } onSubmit={ editUser }> 

                <Upload 
                    name="profile"
                />
                
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

                <ButtonDefault type="submit">Alterar</ButtonDefault>

            </Form>
        </MoveForm>

        </MoveContainer>

    );

}
