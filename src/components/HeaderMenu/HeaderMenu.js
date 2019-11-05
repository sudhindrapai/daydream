import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {Calendar} from "react-feather";
import * as actons from '../../store/actions/index';

import classes from './HeaderMenu.module.css';

import DropdownButton from '../UI/ButtonDropdown/ButtonDropdown';
import Profile from '../ProfileHeader/Profile';
import Notifications from '../NotificationsHeader/Notifications';
import * as actions from "../../store/actions";

class HeaderMenu extends Component{

    state={
        iconColor: "#535353",
    };

    componentDidMount() {
        this.props.getHeaderValues();
    };

    onChangeAccountTypeHandle = (accountType) => {

        this.props.onChangeAccountType(accountType);
        let selectedAccount = (accountType).split("-")[1];

        let pathname = this.props.location.pathname;
        if (pathname !== undefined) {
            if (pathname === "/") {
                pathname = "/analytics";
            }

            if (pathname === "/forecast") {
                (this.props.forecastMetrics).map((graphMetrics, index) => {
                    this.props.getForeCastHistoryResponse(this.props.daysCount,selectedAccount,graphMetrics,index);
                    this.props.getForeCastFutureResponse(this.props.daysCount,selectedAccount,graphMetrics,index);
                    return null
                });
            } else if (pathname === "/analytics") {
                this.props.onChangeAccountTypeInAnalytics(selectedAccount,this.props.startDate,this.props.endDate);
            } else if (pathname === "/anomalies") {
                (this.props.anomaliesRequestMetrics).map((graphMetric,index) => {
                    this.props.getAnomaliesResponseData(selectedAccount,graphMetric,index);
                    return null;
                });
            }
        }

    };

    changeToThemeColor = () => {
      this.setState({
          iconColor: "#4e5af2"
      });
    };

    changeToDefaultColor = () => {
        this.setState({
            iconColor: "#535353"
        });
    };

    render() {
        return(
            <div className={classes.HeaderMenu}>
                <div className={[classes.ProfileSection, classes.HeaderMenuItem].join(" ")}>
                    <DropdownButton clicked={this.onChangeAccountTypeHandle}
                                    dropdownValue={this.props.accounts}>
                        {"ACCOUNT-"+this.props.accountType}
                    </DropdownButton>
                </div>
                <div onMouseEnter={this.changeToThemeColor} onMouseLeave={this.changeToDefaultColor}
                     className={classes.HeaderMenuItem}>
                <Calendar color={this.state.iconColor} size={22} />
                </div>
                <div className={classes.HeaderMenuItem}>
                <Notifications />
                </div >
                <div className={classes.HeaderMenuItem}>
                <Profile color={"#535353"}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
  return{
      accountType:state.header.accountType,
      accounts: state.header.accounts,
      profileObj: state.header.profileImgObj,
      notificationsCount: state.header.notificationsCount,
      startDate:state.analytics.startDate,
      endDate:state.analytics.endDate,
      calendarNotificationCount: state.header.calendarNotificationCount,
      forecastMetrics: state.forecast.forecastRequestMetrics,
      daysCount: state.forecast.selectedDaysCount,
      anomaliesRequestMetrics: state.anomalies.anomaliesRequestMetrics,
  }
};

const mapDispatchToProps = dispatch => {
    return {
        getHeaderValues: () => dispatch(actons.getHeaderValues()),
        onChangeAccountType: (accountType) => {dispatch(actons.updateAccountType(accountType))},
        onChangeAccountTypeInAnalytics:
            (accountType,startDate,endDate) => {dispatch(actons.getAnalyticsMetrics(accountType,startDate,endDate))},
        getForeCastHistoryResponse:(daysCount,accountType,graphMetric,arrayIndex) =>
        {dispatch(actions.getForecastHistoryResponse(daysCount,accountType,graphMetric,arrayIndex))},
        getForeCastFutureResponse:(daysCount, accountType, graphMetric,arrayIndex) => {
            dispatch(actions.getForecastFutureResponse(daysCount,accountType,graphMetric,arrayIndex));
        },
        getAnomaliesResponseData: (accountType,graphMetrics,arrayIndex) =>
        {dispatch(actions.getAnomaliesData(accountType,graphMetrics,arrayIndex))}

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HeaderMenu))
