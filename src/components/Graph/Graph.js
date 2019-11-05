import React, {Component} from 'react'
import Chart from 'react-apexcharts'

class Graph extends Component {

    render() {
        let arrayValues = [];
        if (this.props.graphObj.graphValues !== undefined) {
            arrayValues = this.props.graphObj.graphValues;
        }

        let options ={
            chart: {
                id: 'forecast',
            },
            stroke: {
                width: [2,2,2,2]
            },
            xaxis: {
                categories: [],
            }
        };

        if (this.props.graphObj.xAxis !== undefined) {
            options ={
                chart: {
                    id: 'forecast'
                },
                fill: {
                    colors:['#F58B54','#fb2629','#CEE3F0','#ffffff'],
                    type: 'gradient',
                    gradient:{
                        shade:'light',
                        type: 'vertical',
                        opacityFrom: [1,1,1,0],
                        opacityTo:[0.2,0,0,0],
                        stops: [0,100]
                    },
                },
                colors: ['#000000','#0072B2','#3E64FF','#3E64FF'],
                stroke: {
                    width: [0,2,0,2],
                },
                markers: {
                    size: [4,0.1,0.1,0.1],
                    colors:['#000000','#0072B2','#3E64FF','#3E64FF'],
                    strokeColors: ['#000000','#0072B2','#3E64FF','#3E64FF'],
                    strokeWidth:[0,0,0,0]
                },
                xaxis: {
                    categories: this.props.graphObj.xAxis,
                }
            };
        }
        return (
            <Chart options={options} series={arrayValues} width={1000} height={520}/>
        )
    }

}

export default Graph
