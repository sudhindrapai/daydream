import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../store/actions/index';
import {ChevronLeft, ChevronRight} from "react-feather";

import classes from './AnalyticsDetail.css';

import PlotlyGraph from '../../components/PlotlyGraph/PlotlyGraph';
import Table from '../../components/Table/Table';

class AnalyticsDetail extends Component {

    state = {
        responseObj: {},
        isGraphViewLoaded: true,
        currentIndex: null,
        isLastIndex: null,
        isFirstIndex: null,
        isLoading: true,
        graphObj: {}
    };

    updateResponseObj = (label) => {
        if (label !== undefined && label !== "") {
            let arrayIndex = 0;
            for (let analyticsObj of this.props.analyticsResponse) {
                if (analyticsObj !== undefined && Object.keys(analyticsObj).length > 0) {
                    let updatedLabel = ((label).split(" ").join("_")).toUpperCase();
                    let analyticsObjLabel = ((analyticsObj.label).split(" ").join("_")).toUpperCase();
                    if (updatedLabel === analyticsObjLabel) {
                        this.setState({
                            ...this.state,
                            responseObj: analyticsObj,
                            currentIndex: arrayIndex,
                            isFirstIndex: arrayIndex === 0,
                            isLastIndex: arrayIndex === (this.props.analyticsResponse).length - 1,
                            isLoading: false,
                            graphObj: {
                                name: updatedLabel,
                                xAxis: analyticsObj.xAxisValues,
                                yAxis: analyticsObj.yAxisValues
                            }
                        });

                        break;
                    }
                }
                arrayIndex++;
            }
        }
    };

    componentDidMount() {
        this.setState({
            ...this.state,
            isGraphViewLoaded: true
        });
        this.updateResponseObj(this.props.selectedCard);
        this.props.loadUserView();
    }

    toggleGraphAndTableView = (isGraphViewSelected) => {
        if (isGraphViewSelected !== undefined && isGraphViewSelected !== null) {
            this.setState({
                ...this.state,
                isGraphViewLoaded: isGraphViewSelected
            })
        }
    };

    loadPreviousGraphData = () => {
        if (!this.state.isFirstIndex) {
            let updatedArrayIndex = (this.state.currentIndex) -1;
            let graphObj = (this.props.analyticsResponse)[updatedArrayIndex];
            let updatedLabel = (graphObj.label).split(" ").join("_");
            this.setState({
                ...this.state,
                responseObj: graphObj,
                currentIndex: updatedArrayIndex,
                isFirstIndex: updatedArrayIndex === 0,
                isLastIndex: updatedArrayIndex === (this.props.analyticsResponse).length - 1,
                isLoading: false,
                graphObj: {
                    ...this.state.graphObj,
                    name: updatedLabel,
                    xAxis: graphObj.xAxisValues,
                    yAxis: graphObj.yAxisValues
                }
            });
        }
    };

    loadNextGraphData = () => {
        if (!this.state.isLastIndex) {
            let updatedArrayIndex = (this.state.currentIndex) +1;
            let graphObj = (this.props.analyticsResponse)[updatedArrayIndex];
            let updatedLabel = (graphObj.label).split(" ").join("_");
            this.setState({
                ...this.state,
                responseObj: graphObj,
                currentIndex: updatedArrayIndex,
                isFirstIndex: updatedArrayIndex === 0,
                isLastIndex: updatedArrayIndex === (this.props.analyticsResponse).length - 1,
                isLoading: false,
                graphObj: {
                    ...this.state.graphObj,
                    name: updatedLabel,
                    xAxis: graphObj.xAxisValues,
                    yAxis: graphObj.yAxisValues
                }
            });
        }
    };

    render() {

        let detailView = null;

        if (this.state.isGraphViewLoaded && !this.state.isLoading) {

            let graphObj = {};
            graphObj["name"] = this.state.graphObj.name;
            graphObj["mode"] = 'lines';
            graphObj["type"] = 'scatter';
            graphObj["line"] = {
                color: '#4e5af2',
                width: 2,
                shape:"spline"
            };
            graphObj["x"] = this.state.graphObj.xAxis;
            graphObj["y"] = this.state.graphObj.yAxis;
            detailView = <PlotlyGraph graphObj={[graphObj]}/>
        } else if (!this.state.isGraphViewLoaded && !this.state.isLoading) {
            let label = this.state.graphObj.name;
            let tableHeader = ["DATE", label];
            let tableBody = {
                DATE: this.state.graphObj.xAxis,
                [label]: this.state.graphObj.yAxis,
            };

            let arrayLength = (this.state.graphObj.xAxis).length;

            detailView = <Table tableClassName={"AnalyticsDetail"}
                                tableHeader={tableHeader} tableBody={tableBody} tableLength={arrayLength}/>
        }

        let graphDivClass = [classes.ToggleDiv, classes.Selected].join(" ");
        let tableDivClass = classes.ToggleDiv;
        if (this.state.isGraphViewLoaded) {
            graphDivClass = [classes.ToggleDiv, classes.Selected].join(" ");
            tableDivClass = classes.ToggleDiv;
        } else {
            tableDivClass = [classes.ToggleDiv, classes.Selected].join(" ");
            graphDivClass = classes.ToggleDiv;
        }

        let previousBtnClass = "";
        if (this.state.isFirstIndex) {
            previousBtnClass = [classes.Previous, classes.Disabled].join(" ");
        } else {
            previousBtnClass = classes.Previous;
        }

        let nextBtnClass = "";
        if (this.state.isLastIndex) {
            nextBtnClass = [classes.Next, classes.Disabled].join(" ");
        } else {
            nextBtnClass = classes.Next;
        }

        return (
            <div className={classes.Container}>
                <div className={classes.HeaderBar}>
                    <div onClick={this.loadPreviousGraphData} className={previousBtnClass}>
                        <ChevronLeft/> Previous
                    </div>
                    <div className={classes.CardLabel}>
                        {this.state.responseObj.label}
                    </div>
                    <div onClick={this.loadNextGraphData} className={nextBtnClass}>
                        Next <ChevronRight/>
                    </div>
                </div>
                <div className={classes.CountSection}>
                    <div className={classes.MetricsCount}>
                        {this.state.responseObj.metricsCount}
                    </div>
                </div>
                <div className={classes.ToggleBtnContainer}>
                    <div onClick={() => {
                        this.toggleGraphAndTableView(true)
                    }} className={graphDivClass}>
                        Graph
                    </div>
                    <div onClick={() => {
                        this.toggleGraphAndTableView(false)
                    }} className={tableDivClass}>
                        Table
                    </div>
                </div>
                {detailView}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        analyticsResponse: state.analytics.analyticsResponse
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadUserView: () => dispatch(action.changeAdminView(false))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AnalyticsDetail);
