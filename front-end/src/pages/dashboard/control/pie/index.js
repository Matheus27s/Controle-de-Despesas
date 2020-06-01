import React, { useState } from 'react';
import { Pie as Chart } from 'react-chartjs-2';
import { ContainerPie } from './style';
import api from '../../../../services/api';
import { useEffect } from 'react';

//Contexts:
import { useRecipe } from '../../../../context/recipe';

export default function Pie() {

    const [ data, setData ] = useState({}); 
    const [ options, setOptions ] = useState({}); 

    const { recipe } = useRecipe();

    useEffect( ()=> {

        async function getStatus() {

            if( recipe.id ) {

                const response = await api.get(`status/${ recipe.id }`)

                setData({ 

                    labels: response.data[1].categoriesUtil.map( item => ( item.name )),
                    datasets: [
                      { 
                        label: 'Análize de Gastos',
                        data: response.data[1].categoriesUtil.map( item => ( item.value )),
                        backgroundColor: response.data[1].categoriesUtil.map( item => (item.color)),
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: 1,
                        hoverBorderColor: 'rgba(0,0,0,0.1)',
                      }
                    ]
                  });

                setOptions({

                    layout: {
                      padding: {
                        left: 0,
                        right: 16,
                        top: 0,
                        bottom: 0
                      }
                    },
              
                    animation: {
                      duration: 1000,
                      },
              
                    legend: {
                      labels: {
                        fontColor: '#fff',
                        fontSize: 12,
                        fontStyle: 'bold',
                        usePointStyle: true
                      },
                      position: 'right',
                      align: 'center',
                    }
              
                  });
            }
        }

        getStatus();
    }, [ recipe ]) 


    return(

       <ContainerPie>
           <Chart data={ data } options={ options }/>
        </ContainerPie>
    );
}