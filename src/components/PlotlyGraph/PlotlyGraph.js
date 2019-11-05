import React from 'react';
import Plotly from "plotly.js-basic-dist";

import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);


class PlotlyGraph extends React.Component {
    render() {
        let layout = {
            showlegend: true,
            width:900,
            title: '',
            xaxis: {
                rangeslider: {},
            },
            font:{
                color: '#000000'
            },
            yaxis: {
                fixedrange: true
            },
            rangeslider: {
                visible: true
            },
            margin: {
                t: 20, //top margin
                l: 50, //left margin
                r: 20, //right margin
                b: 20 //bottom margin
            }
        };
        let data = this.props.graphObj;
        return (
            <Plot
                data={data}
                layout={layout}
            />
        );
    }
}

export default PlotlyGraph;
