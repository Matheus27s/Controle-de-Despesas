import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'date-fns/locale/pt-BR';

import api from '../../services/api';

import Button from '../../components/button';
import Header from '../../components/header';

import '../form.css';

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
        <Header title={ 'Adicionando um novo salário' }/>
        <div id="container-main">

                 <div className="ul">

                 <h4>Informações do mês em trabalho</h4>

                    <form onSubmit = { addSalary }>
                        
                        <DatePicker 
                            selected={ startDate } 
                            onChange={date => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            locale="pt"
                        />

                        <input 
                            placeholder="Valor" 
                            id="value"
                            name="value"
                            onChange={ e => setValue(e.target.value) }
                            value={ value }
                            
                        />

                        <button>Cadastrar</button>
                        <button>Cancelar</button>
                    </form>

                    </div>
            </div> 

        </>          
    );

}