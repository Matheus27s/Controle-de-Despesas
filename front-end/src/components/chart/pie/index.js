import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Pie extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: "100%",
            type: 'pie',
          },

          labels: ['Lazer', 'Gasolina', 'Comida', 'Estudo', 'Trabalho'],
          
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      };
    }

    render() {
      return (
        <div id="chart">
          <Chart 
              options={this.state.options} 
              series={this.state.series} 
              type="pie" 
              width={"100%"} 
            />
        </div>
      );
    }
  }
export default Pie;