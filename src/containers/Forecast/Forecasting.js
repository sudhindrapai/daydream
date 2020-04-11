import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import classes from './Forecasting.css';
import ContainerTitle from "../../components/ContainerTitle/ContainerTitle";
import DaysSelector from '../../components/DaysSelector/DaysSelector';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../store/actions/index';

import ForecastGraph from '../../components/ForecastGraph/ForecastGraph';

class Forecasting extends Component{
    componentDidMount() {
        (this.props.forecastMetrics).map((graphMetrics, index) => {
            this.props.getForeCastHistoryResponse(this.props.daysCount,this.props.accountType,graphMetrics,index);
            this.props.getForeCastFutureResponse(this.props.daysCount,this.props.accountType,graphMetrics,index);
            return null
        });
        this.props.loadUserView();
    }

    updateSelectedDaysCount = (daysCount) => {
        this.props.updateDaysCount(daysCount);
        (this.props.forecastMetrics).map((graphMetrics, index) => {
            this.props.getForeCastHistoryResponse(this.props.daysCount,this.props.accountType,graphMetrics,index);
            this.props.getForeCastFutureResponse(this.props.daysCount,this.props.accountType,graphMetrics,index);
            return null
        });
    };

    render() {
        let forecastView = <Spinner/>;
        if (!(this.props.isLoading)) {

            let graphCards = null;

            if (this.props.forecastResponse !== undefined && this.props.forecastMetrics !== undefined &&
                (this.props.forecastResponse).length === (this.props.forecastMetrics).length) {
                graphCards = (this.props.forecastResponse).map((graphCardObj,index) => {
                    return (
                        <ForecastGraph key={index}
                                       cardTitle = {graphCardObj.cartTitle}
                                       description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} graphData={graphCardObj.graphValues} />
                    )
                });
            }

            forecastView =
                (
                    <Fragment>
                        <div className={classes.TitleBar}>
                            <div className={classes.ContainerTitle}>
                                <ContainerTitle >Forecast</ContainerTitle>
                            </div>
                            <div className={classes.TitleOptions}>
                                <DaysSelector selectedDay = {this.props.daysCount} clicked={this.updateSelectedDaysCount}/>
                            </div>
                        </div>
                        {graphCards}
                    </Fragment>
                );
        }
        return(forecastView)
    }
}

const mapStateToProps = (state) => {
    return{
        isLoading: state.forecast.isLoading,
        forecastMetrics: state.forecast.forecastRequestMetrics,
        forecastResponse: state.forecast.forecastResponse,
        accountType: state.header.accountType,
        daysCount: state.forecast.selectedDaysCount
    }
};

const matDispatchToProps = (dispatch) => {
    return{
        getForeCastHistoryResponse:(daysCount,accountType,graphMetric,arrayIndex) =>
        {dispatch(actions.getForecastHistoryResponse(daysCount,accountType,graphMetric,arrayIndex))},
        getForeCastFutureResponse:(daysCount, accountType, graphMetric,arrayIndex) => {
            dispatch(actions.getForecastFutureResponse(daysCount,accountType,graphMetric,arrayIndex));
        },
        updateDaysCount:(daysCount) => {dispatch(actions.setForecastDaysCount(daysCount))},
        loadUserView: () => dispatch(actions.changeAdminView(false))
    }
};

export default connect(mapStateToProps,matDispatchToProps)(Forecasting)
