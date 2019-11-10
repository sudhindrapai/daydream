import React, {Component} from 'react'
import Chart from 'react-apexcharts'

class Graph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    sparkline: {
                        enabled: true
                    },
                },
                tooltip:{
                  enable: false
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#727CF5'],
                stroke: {
                    curve: 'smooth',
                    width:2
                },
                grid: {
                    show: false,
                    padding: {
                        left: 5,
                        right: 5,
                        top:10,
                        bottom:10
                    }
                },
                xaxis: {
                    categories: this.props.graphObj.xAxis,
                    crosshairs: {
                        width: 1
                    },
                },
            },
            series: [{
                name: this.props.graphObj.label,
                data: this.props.graphObj.graphValues
            }],
        }
    }

    render() {
        return (
                <Chart options={this.state.options} series={this.state.series} type="line" height="100" />
        );
    }

}

export default Graph
