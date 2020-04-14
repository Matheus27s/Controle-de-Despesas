import React from 'react';

import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Bars({ status }) {

  useEffect(() => {
    setData({ 
      labels: status.map( item => ( item.name )),
      datasets: [
        { 
          label: 'Análize de Gastos',
          data: status.map( item => ( item.value )),
          backgroundColor: '#48887B',
          borderColor: 'green',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'green',
        }
      ]
    })
  },[ status ])  

    const [ data, setData ] = useState({

      labels: [],
      datasets: [
      
        {
          label: '',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [],
        }
     
      ]
    } 
  )

  return(
    <div>
      <Bar 
        data={ data }
        width={ 180 }
        height={ 150 } 
        redraw={ false }
      />
    </div>
  );
}