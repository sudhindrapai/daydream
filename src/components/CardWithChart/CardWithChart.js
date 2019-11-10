import React, {Component} from 'react';
import classes from './CardWithChart.module.css';
import Tooltip from '../../components/UI/Tooltip/Tooltip';
import {Info} from "react-feather";
import ApexChart from '../../components/ApexGraph/Graph';
class CardWithChart extends Component {

    render() {
        let graphObj = {};
        graphObj["xAxis"] = this.props.xAxisValues;
        graphObj["graphValues"] = this.props.yAxisValues;
        graphObj["label"] = this.props.cardTitle;
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
                        <ApexChart graphObj = {graphObj} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardWithChart;
