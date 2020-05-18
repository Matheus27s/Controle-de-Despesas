import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

export default function Pies({ status }) {

  useEffect(() => {

    setData({ 
      labels: status.map( item => ( item.name )),
      datasets: [
        { 
          data: status.map( item => ( item.value )),
          backgroundColor: status.map( item => (item.color)),
        }
      ]
    })

  },[ status ])  

    const [ data, setData ] = useState({

      labels: [],
      
      datasets: [{
        data: [],
        borderWidth: 1,
        borderColor: '#48887B',
        borderAlign: 'center',
        weight: 5,
        hoverBorderWidth: 1,
        backgroundColor: [],
      }]
    } 
  )

  return(
    <>
      <Pie
        data={ data }
        redraw={ false }
      />
    </>
  );
}