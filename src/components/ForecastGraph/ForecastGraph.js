import React, {Fragment, Component} from 'react';

import classes from "./ForecastGraph.css";
import PlotlyGraph from "../PlotlyGraph/PlotlyGraph";

class forecastGraph extends Component{
    render() {
        return(
            <Fragment>
                <div className={classes.Card}>
                    <div className={classes.CardTitle}>
                        {this.props.cardTitle}
                    </div>
                    <div className={classes.CardDescription}>
                        {this.props.description}
                    </div>
                    <PlotlyGraph graphObj={this.props.graphData} />
                </div>
            </Fragment>
        )
    }
}

export default forecastGraph;
