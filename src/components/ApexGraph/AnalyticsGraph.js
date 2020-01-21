import React from 'react';
import Plotly from "plotly.js-basic-dist";

import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);


class AnalyticsGraph extends React.Component {
    render() {
        let layout = {
            showlegend: false,
            width: 190,
            height: 130,
            title: '',
            dragmode: false,
            hovermode: false,
            xaxis: {
                showgrid: false,
                visible: false,
                hovermode: false,
                fixedrange: true
            },
            yaxis: {
                showgrid: false,
                showline: false,
                zeroline: false,
                visible: false,
                fixedrange: true
            },
            rangeslider: {
                visible: false
            },
            margin: {
                t: 10,
                l: 10,
                r: 10,
                b: 10
            },
            config: {
                'displayModeBar': true
            }
        };
        let tempData = [
            {
                type: 'scatter',
                mode: 'lines',
                x: this.props.graphObj.xAxis,
                y: this.props.graphObj.graphValues,
                line: {
                    color: '#5863ed',
                    width: 1,
                    shape: "spline"
                }
            }
        ];
        return (
            <Plot
                config={{
                    displaylogo: false,
                    modeBarButtonsToRemove: ['sendDataToCloud', 'hoverCompareCartesian', 'toImage', 'pan2d', 'lasso2d', 'hoverClosestCartesian', 'toggleSpikelines']
                }}
                data={tempData}
                layout={layout}
            />
        );
    }
}

export default AnalyticsGraph;
