import React from 'react';
import PlotlyGraph from '../PlotlyGraph/PlotlyGraph'
import classes from './AnomaliesGraph.module.css';

const anomaliesGraph = (props) => {
    return(
        <div className={classes.Card}>
            <div className={classes.CardTitle}>
                {props.cardTitle}
            </div>
            <div className={classes.CardDescription}>
                {props.description}
            </div>
            <PlotlyGraph graphObj={props.graphData}/>
        </div>
    )
};

export default anomaliesGraph;
