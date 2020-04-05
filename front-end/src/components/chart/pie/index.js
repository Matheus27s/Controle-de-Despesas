import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

export default function Pies({ salaryStatus }) {

  const [ series, setSeries ] = useState([]);
  const [ options, setOptions ] = useState({ labels: [] });

  useEffect(() => {
    showStatus();
  }, [salaryStatus]);

  function showStatus() {

    console.log(salaryStatus)

    const aux = [];
    const labels = [];

    salaryStatus.map( item => (
      aux.push(item.value),
      labels.push(item.name)
    ));

    setSeries(aux);
    setOptions({ labels });

  }

  return (
        
    <div id="chart">
      <Chart 
        options={ options } 
        series={ series } 
        type="pie" 
        width={"100%"} 
      />
    </div>
  );
}