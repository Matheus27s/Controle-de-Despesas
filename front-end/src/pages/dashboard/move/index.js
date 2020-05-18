import React, { useState, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../../services/api';

//Context
import { useRecipe } from '../../../context/recipe';

//Components:
import Header from '../../../components/form/header'
import Input from '../../../components/form/inputs/text';
import InputSale from '../../../components/form/inputs/sale';
import DatePicker from '../../../components/form/inputs/datepicker';
import ButtonDefault from '../../../components/buttons';

import { MoveContainer, MoveForm, Select } from './style';

export default function AddMove() {

    const { recipe } = useRecipe();

    const [ category, setCategory ] = useState({});
    const [ typeMove, setTypeMove ] = useState(0);
    const [ categories, setCategories ] = useState([]);

    const formRef = useRef(null);

    useEffect(() => {
       allCategories();
    },[]);

    async function allCategories() {
        const response = await api.get(`categories`);
        setCategories(response.data);
    }

    function handleChangeCategory(e) {

        if( e.target.value == 'Categoria' ){
            return;
        }

        categories.map( item => {

            if(item.id == e.target.value) {
                setCategory(item);
            }   

            return true;
        })
    }

    function handleChangeType(e) {
        setTypeMove(e.target.value);
    }

    async function addMove(data) {

        try {

            const schema = Yup.object().shape({
                name: Yup.string().required("A movimentação é obrigatório").max(10, "Texto muito grande"),
                paymentDate: Yup.date().required(),
            });

            if( !category.name ) {
                alert('Insira uma categoria')
                return;
            }
    
            if( typeMove == 0 ){
                alert("Defina um tipo de movimentação")
                return;
            }

            await schema.validate(data, {
                abortEarly: false
            });

            //await api.post('moves', {
            console.log({

                name: data.name,
                value: data.value.substr(2),
                paymentDate: data.paymentDate,
                typeMove,
                recipe,
                category

            })
                
            //})

            await api.post('moves', {

                name: data.name,
                value: data.value.substr(2),
                paymentDate: data.paymentDate,
                typeMove,
                recipe,
                category
                
            })
                    


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
                    placeholder="Movimentação"
                    name="name"
                />

                <InputSale 
                    type="text"
                    placeholder="Valor"
                    name="value"
                />

                <DatePicker 
                    name="paymentDate"
                />
                 
                <Select 
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
                    
                </Select>

                <Select 
                    required 
                    onChange={ handleChangeType }>
                        <option 
                            value={ 0 }
                            key={ 0 }>Tipo de movimentação em conta?
                        </option>

                        <optgroup >

                            <option
                                value={ 1 } 
                                key={ 1 }>{ "RECEBIMENTO" }
                            </option> 

                            <option
                                value={ 2 } 
                                key={ 2 }>{ "GASTO" }
                            </option> 
                            ))}

                        </optgroup>
                    
                </Select>

                <ButtonDefault type="submit">Inserir</ButtonDefault>

            </Form>
        </MoveForm>

        </MoveContainer>

    );

}
