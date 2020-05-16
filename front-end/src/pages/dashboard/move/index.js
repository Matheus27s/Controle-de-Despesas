import React, { useState, useEffect, useRef } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import pt from 'date-fns/locale/pt';

import api from '../../../services/api';

import { MoveContainer, MoveForm, MoveInput, Select } from './style';

import Header from '../../../components/form/header'
import { useRecipe } from '../../../context/recipe';

import Input from '../../../components/form/inputs/text';
import InputSale from '../../../components/form/inputs/sale';
import DatePicker from '../../../components/form/inputs/datepicker';
import ButtonDefault from '../../../components/buttons';

export default function AddMove() {

    const formRef = useRef(null);

    const { recipe } = useRecipe();

    const [ category, setCategory ] = useState({});
    const [ typeMove, setTypeMove ] = useState(0);
    const [ categories, setCategories ] = useState([]);

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

    async function addMove(e) {

        if( !category.name ) {
            alert('Insira uma categoria')
            e.preventDefault();
            return;
        }

        if( typeMove == 0 ){
            alert("Defina um tipo de movimentação")
            e.preventDefault();
            return;
        }

       /*await api.post('moves', {

         name,
         value,
         paymentDate,
         typeMove,
         recipe,
         category
         
       })*/
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
