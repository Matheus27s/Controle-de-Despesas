import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

export default function Bar({ salaryStatus }) {

   const [ options, setOptions ] = useState({ 

     xaxis: { 
       categories: [],
      } 

    });

   const [ series, setSeries ] = useState([

    { name: '',  data: [] },

   ]);

  useEffect(() => {
    showStatus();
  }, [salaryStatus]);

  function showStatus() {

    const aux = [];
    const labels = [];

    salaryStatus.map( item => (
      aux.push(item.value),
      labels.push(item.name)
    ));

    setOptions({ xaxis: { categories: labels } });
    setSeries([ { name: 'Olá, Mundo!',data: aux } ])
  }

  return (
    <Chart options={ options } series={ series } type="bar"/>
  );
}