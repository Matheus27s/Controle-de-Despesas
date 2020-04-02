import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: ['Lazer', 'Gasolina', 'Comida', 'Estudo', 'Trabalho']
        }
      },
      series: [{
        name: 'series-1',
        data: [44, 55, 13, 43, 22],
      }]
    }
  }
  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="bar"/>
    )
  }
}

export default Bar;