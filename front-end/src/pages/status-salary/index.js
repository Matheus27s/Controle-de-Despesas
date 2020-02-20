import React, { useState, useEffect } from 'react';

import { ContainerStatus } from './styles';

import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'

import api from '../../services/api';

import Header from '../../components/header';


export default function StateSalary( { match, history } ) {

//  Preciso somar o valor de cada despesa de uma determinada categoria

/*
    

 */ 

    const [ categories, setCategories ] = useState([]);

    useEffect( () => {



    },[])

    async function loadCategory(){

        const response = await api.get('/categories');
        setCategories(response.data);

        //<PieChart data={[["Conta", 44], ["Lazer", 23], ["Estudo", 20]]} />

    }

    loadCategory();

    return(

        <>
            <Header title={ 'Status' }/>
            <ContainerStatus>

                <PieChart data={

                    categories.map( category =>  (
                        [ category.name, category.id ] 
                    )) } 
                />

                <BarChart data={

                    categories.map( category =>  (
                        [ category.name, category.id ] 
                    )) } 
                />

            </ContainerStatus>
        </>          
    );

}