import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {DownloadCloud} from "react-feather";

import * as actions from '../../store/actions/index';

import classes from './Analytics.module.css';

import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import CardWithGraph from '../../components/CardWithChart/CardWithChart';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';
import AnalyticsDetail from '../../containers/AnalyticsDetail/AnalyticsDetail';


class Analytics extends Component {

    state={
      isDetailViewLoaded: false,
      selectedLabel:""
    };

    updateDateRangeDateHandler = (dateRangeObj) => {
        this.props.onApplyDateRange(dateRangeObj);
        this.props.getAnalyticsResponse(this.props.accountType, this.props.startDate, this.props.endDate);
    };

    downloadAnalyticsReportHandler = () => {
    };

    componentDidMount() {
        this.props.getAnalyticsResponse(this.props.accountType, this.props.startDate, this.props.endDate);
        this.props.loadUserView();
    }

    loadAnalyticsDetail = (id) => {
        let updatedLabel = (id.split(" ").join("_")).toLowerCase();
        this.setState({
            isDetailViewLoaded: true,
            selectedLabel: updatedLabel
        })
    };

    toggleAnalyticsView = () => {
        this.setState({
            ...this.state,
            isDetailViewLoaded: false,
            selectedLabel:""
        })
    };

    render() {
        let analyticsCards = null;
        analyticsCards = this.props.analyticsResponse.map((analyticsObj, index) => {
            return (
                <div onClick={() => {this.loadAnalyticsDetail(analyticsObj.label)}} key={index} className={classes.Card}>
                    <CardWithGraph xAxisValues={analyticsObj.xAxisValues}
                                   yAxisValues={analyticsObj.yAxisValues}
                                   lineColor="#4e5af2"
                                   description={analyticsObj.description}
                                   cardTitle={analyticsObj.label} count={analyticsObj.metricsCount}/>
                </div>
            )
        });


        let analyticsView =
            (
                <Fragment>
                <Spinner/>
                    <ErrorAlert isVisible={this.props.isError}
                                clicked={this.props.toggleError}
                                message={this.props.errorMessage} />
                </Fragment>
        );
        if (!this.props.isLoading && !this.state.isDetailViewLoaded) {
            analyticsView = (
                <Fragment>
                    <div className={classes.TitleBar}>
                        <div className={classes.ContainerTitle}>
                            <ContainerTitle>Analytics</ContainerTitle>
                        </div>
                        <div className={classes.TitleOptions}>
                            <DateRangePicker calendarStartDate={this.props.startDate}
                                             calendarEndDate={this.props.endDate}
                                             onApplyDateRange={this.updateDateRangeDateHandler}/>
                            <Button type={"button"} btnType={"BtnPrimary"}
                                    clicked={this.downloadAnalyticsReportHandler}>
                                <span className={classes.PR15}><DownloadCloud size={18}/> </span>Download Report
                            </Button>
                        </div>
                    </div>
                    <div className={classes.ContainerDetail}>
                        {analyticsCards}
                    </div>
                    <ErrorAlert isVisible={this.props.isError}
                                clicked={this.props.toggleError}
                                message={this.props.errorMessage} />
                </Fragment>
            )
        } else if (!this.props.isLoading && this.state.isDetailViewLoaded){
                            analyticsView =
                            <Fragment>
                                <div className={classes.MT5}>
                                <Button type={"button"} btnType={"BtnPrimary"} clicked={this.toggleAnalyticsView}>
                                    CLOSE
                                </Button>
                                </div>
                                <AnalyticsDetail selectedCard={this.state.selectedLabel} />
                            </Fragment>
        }
        return (
            analyticsView
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accountType: state.header.accountType,
        startDate: state.analytics.startDate,
        endDate: state.analytics.endDate,
        analyticsResponse: state.analytics.analyticsResponse,
        isLoading: state.analytics.isLoading,
        isError:state.analytics.isError,
        errorMessage: state.analytics.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onApplyDateRange: (dateRangeObj) => {
            dispatch(actions.onApplyDateRangeInAnalytics(dateRangeObj))
        },
        getAnalyticsResponse:
            (accountType, startDate, endDate) => {
                dispatch(actions.getAnalyticsMetrics(accountType, startDate, endDate))
            },
        toggleError: () => {dispatch(actions.toggleAnalyticsErrorView())},
        loadUserView: () => dispatch(actions.changeAdminView(false))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Analytics));
