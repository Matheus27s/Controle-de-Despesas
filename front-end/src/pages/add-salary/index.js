import React, { useState, useEffect, useReducer } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";

import pt from 'date-fns/locale/pt-BR';

import { ContainerForm, FormUl, Form, Button } from '../../components/form/styles';

import api from '../../services/api';

import Header from '../../components/header';


export default function AddSalary( { match, history } ) {

    registerLocale('pt', pt);

    const [ value, setValue ] = useState('');
    const [ user, setUser ] = useState('');

    const [startDate , setStartDate ] = useState(new Date());

    useEffect( () => {

        async function showUser() {
            const response = await api.get(`/users/${ match.params.id }`);
            setUser(response.data);
        }

        showUser();

    }, []);

    async function addSalary(e) {
        e.preventDefault();

        const data = startDate.toLocaleDateString();

        const response = await api.post('/salaries/', {
            data,
            value,
            user
        });

        history.push(`/users/${ match.params.id }`);

    }

    return(

        <>
        <Header title={ 'Adicionando um novo salário' } history={ history }/>
        
        <ContainerForm>

                 <FormUl>

                 <h4>Informações do mês em trabalho</h4>

                    <Form onSubmit = { addSalary }>

                        <DatePicker

                            type="number"
                            selected={ startDate } 
                            onChange={date => setStartDate(date)}
                            dateFormat="MM/yyyy"
                            locale="pt"
                            required
                        />

                        <input 

                            type="text"
                            placeholder="Valor" 
                            id="value"
                            name="value"
                            onChange={ e => setValue(e.target.value) }
                            value={ value }
                            required
                        />

                        <Button type="submit">Cadastrar</Button>
                        <Button type="error">{"< Voltar"}</Button>

                    </Form>

                    </FormUl>
            </ContainerForm> 

        </>          
    );

}