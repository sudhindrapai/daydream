import React from 'react';
import PlotlyGraph from '../PlotlyGraph/PlotlyGraph'
import classes from './AnomaliesGraph.css';

const anomaliesGraph = (props) => {
    console.log(props.graphData)
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
