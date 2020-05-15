import React from 'react';

import { Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';

const style = {

  a: {
    color: 'red'
  }

}

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
        borderWidth: 4,
        borderColor: '#48887B',
        borderAlign: 'center',
        weight: 5,
        hoverBorderWidth: 1,
        backgroundColor: [],
      }]
    } 
  )

  return(
    <div>
      <Pie style={{ a: { color: 'red' } }}
        data={ data }
        redraw={ false }
      />
    </div>
  );
}