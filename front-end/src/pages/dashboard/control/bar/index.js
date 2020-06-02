import React, { useState, useEffect} from 'react';
import { Bar as Chart } from 'react-chartjs-2';
import { ContainerBar } from './style';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../../../services/api';

//Contexts:
import { useRecipe } from '../../../../context/recipe';

export default function Bars({ status }) {

  const [ data, setData ] = useState({}); 
    const [ options, setOptions ] = useState({}); 

    const { recipe } = useRecipe();

    useEffect( ()=> {

      async function getStatus() {

          if( recipe.id ) {

              const response = await api.get(`status/${ recipe.id }`)

              setData({                 
                datasets: [
                  { 
                    label: format(response.data[1].dateMonth, "MMMM", { locale: pt }),
                    data: response.data[1].categoriesUtil.map( item => ( item.value )),
                    backgroundColor: response.data[1].categoriesUtil.map( item => (item.color)),
                    borderColor: 'rgba(0,0,0,0.3)',
                    borderWidth: 1,
                    hoverBorderColor: 'rgba(0,0,0,0.3)',

                  },

                  { 
                    label: format(response.data[0].dateMonth, "MMMM", { locale: pt }),
                    data: response.data[0].categoriesUtil.map( item => ( item.value )),
                    backgroundColor: response.data[0].categoriesUtil.map( item => (item.color)),
                    borderColor: 'rgba(0,0,0,0.3)',
                    borderWidth: 1,
                    hoverBorderColor: 'rgba(0,0,0,0.3)',
                  }

        
                ],

                labels: response.data[0].categoriesUtil.map( item => ( item.name )),
              });

              setOptions({

                layout: {
                  padding: {
                    left: 16,
                    right: 16,
                    top: 16,
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
                    usePointStyle: true,
                    fillStyle: 'rgba(255,0,0)',
          
                 }
                },

                scales: {
                  xAxes: [{
                      position: 'bottom',

                      ticks: {
                        stepSize: 50,
                        fontColor: '#fff',
                        fontSize: 12,
                        fontStyle: 'bold',
                      }
                    }],

                  yAxes: [
                    {
                      position: 'left',
                      ticks: {
                        stepSize: 50,
                        fontColor: '#FFF',
                        fontSize: 12,
                        padding: 20,
            
                        callback: function(value) {
                          return '$' + value;
                        }
                      }
                    }
                  ],
              }})
          }
      }
      getStatus();
  }, [ recipe ]) 

  return(
    <ContainerBar>
      <Chart height={ 200 } data={ data }options= { options } />
    </ContainerBar>
  );
}