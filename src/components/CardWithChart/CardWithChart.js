import React, {Component} from 'react';
import classes from './CardWithChart.module.css';
import Tooltip from '../../components/UI/Tooltip/Tooltip';
import {Info} from "react-feather";
import {Line} from 'react-chartjs-2';
class CardWithChart extends Component {
    data = {
        labels: this.props.xAxisValues,
        datasets: [{
            label: this.props.cardTitle,
            data:this.props.yAxisValues,
            borderColor: this.props.lineColor,
            backgroundColor: 'rgba(0,0,0,0.0)',
            borderWidth: 2,
        }]
    };

    options= {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [
                {
                    display: false
                }
            ]
        },
        elements: {
            point: {
                radius: 0,
            }
        }
    };


    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.CardTitleSection}>
                    <div className={classes.CardTitle}>
                        {this.props.cardTitle}
                    </div>
                    <div className={classes.CardMoreOption}>
                        <Tooltip description={this.props.description} >
                            <Info size={14} strokeWidth={2} />
                        </Tooltip>
                    </div>
                </div>
                <div className={classes.GraphSection}>
                    <div className={classes.GraphCount}>
                        {this.props.count}
                    </div>
                    <div className={classes.Graph}>
                        <Line
                            data={this.data}
                            options={this.options}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardWithChart;
