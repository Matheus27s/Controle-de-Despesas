import React, { useState, useEffect } from 'react';

import { ContainerStatus } from './styles';

import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'

import api from '../../services/api';

import Header from '../../components/header';


export default function StateSalary( { match, history } ) {

    const [ categories, setCategories ] = useState([]);

    useEffect( () => {

        async function loadCategory(){
            const response = await api.get(`status/${ match.params.id }`);
            setCategories(response.data);
        }
    
        loadCategory();

    },[]);

    return(

        <>
            <Header title={ 'Status' }/>
            <ContainerStatus>

                <PieChart data={

                    categories.map( category =>  (
                        [ category.name, category.value ] 
                    )) } 
                />

                <BarChart data={

                    categories.map( category =>  (
                        [ category.name, category.value ] 
                    )) } 
                />

            </ContainerStatus>
        </>          
    );

}