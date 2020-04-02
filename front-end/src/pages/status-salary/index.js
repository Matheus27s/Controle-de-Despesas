import React, { useState, useEffect } from 'react';

import { ContainerStatus, ContainerPie, ContainerBar } from './styles';

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
            <Header title={ 'Status' } history={ history }/>
            <ContainerStatus>

                <ContainerPie>
                        <PieChart 
                            donut={true}
                            suffix=" R$" 
                            legend="bottom"
                            thousands=","
                            dataset={{borderWidth: 3}}

                            data={

                            categories.map( category =>  (
                                [ category.name, category.value ] 
                            )) } 
                        />
                </ContainerPie>

                <ContainerBar>
                    <BarChart data={
categories.map( category =>  (
    [ category.name, category.value ] 
)) }
                        
                    />

                </ContainerBar>

            </ContainerStatus>
        </>          
    );

}