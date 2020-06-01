import React, { useState, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../../services/api';

//Context
import { useRecipe } from '../../../context/recipe';
import { usePage } from '../../../context/page';


//Components:
import Header from '../../../components/form/header'
import Input from '../../../components/form/inputs/text';
import InputSale from '../../../components/form/inputs/sale';
import DatePicker from '../../../components/form/inputs/datepicker';
import ButtonDefault from '../../../components/buttons';
import Select from '../../../components/form/selects';

import { MoveContainer, MoveForm } from './style';

export default function Move() {

    const { recipe } = useRecipe();

    const [ category, setCategory ] = useState({});
    const [ typeMove, setTypeMove ] = useState(0);
    const [ categories, setCategories ] = useState([]);
    const [ error, setError ] = useState('');

    const [ tipos, setTipos ]  = useState([
        { value: 1, label: 'RECEBIMENTO' },
        { value: 2, label: 'GASTO' },
    ])

    const formRef = useRef(null);

    const { handlePage } = usePage();

    useEffect(() => {
       allCategories();
    },[]);

    async function allCategories() {
        const { data } = await api.get(`categories`);

        setCategories( data.map( item => (
            {value: item, label: item.name }
        )))
    }

    async function addMove(data, { reset }) {

        try {

            const schema = Yup.object().shape({

                name: Yup.string().
                    required("Campo nulo.").
                    max(13, "Texto muito grande."),

                value: Yup.string().
                    required("Campo nulo."),
                
                paymentDate: Yup.date().
                    typeError("Campo nulo."),
                    
                typeMove: Yup.string().
                    required("Topic is required!")

            });

            await schema.validate(data, {
                abortEarly: false
            });

            //await api.post('moves', {
            console.log({

                name: data.name,
                value: data.value.substr(2),
                paymentDate: data.paymentDate,
                category: data.category,
                typeMove: data.typeMove
            })
                
            //})

            await api.post('moves', {

                name: data.name,
                value: data.value.substr(2),
                paymentDate: data.paymentDate,
                recipe,
                category: data.category,
                typeMove: data.typeMove
                
            })
            
        handlePage('page01');

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

    return(
        <MoveContainer>

            <Header title="Nova movimentação"/>
            
            <MoveForm> 

            <Form ref={formRef} onSubmit={ addMove }> 
                
                <Input 
                    type="text"
                    placeholder="Movimentação*"
                    name="name"
                />

                <InputSale 
                    type="text"
                    placeholder="Valor*"
                    name="value"
                />

                <DatePicker 
                    name="paymentDate"
                    placeholderText="Data*"
                />

                <Select
                    name="category"
                    options={ categories }
                    placeholder="Categoria*"
                />

                <Select 
                    name="typeMove"
                    options={ tipos }
                    placeholder="Tipo*"
                />

                <ButtonDefault type="submit">Inserir</ButtonDefault>

            </Form>
        </MoveForm>

        </MoveContainer>

    );

}

/*<Select
                    name="category"
                    required 
                    onChange={ handleChangeCategory }>
                        <option value="Categoria">Categoria</option>

                        <optgroup>

                        { categories.map( item => (

                            <option
                                value={ item.id } 
                                key={ item.id }>{ item.name }
                            </option> 
                            ))}

                        </optgroup>
                    
                </Select> */