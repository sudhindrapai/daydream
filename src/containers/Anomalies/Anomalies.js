import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from "./Anomalies.module.css";
import ContainerTitle from "../../components/ContainerTitle/ContainerTitle";
import AnomaliesGraph from '../../components/AnomaliesGraph/AnomaliesGraph';

class Anomalies extends Component{
    componentDidMount() {
        (this.props.anomaliesRequestMetrics).map((graphMetric,index) => {
            this.props.getAnomaliesResponseData(this.props.accountType,graphMetric,index);
            return null;
        });
        this.props.loadUserView()
    }

    render() {
        let anomaliesCard = null;
        if ((this.props.anomaliesResponse).length === 3) {
            anomaliesCard = (this.props.anomaliesResponse).map((graphObj, index) =>{
                return(<AnomaliesGraph cardTitle={graphObj.cardTitle}
                                       description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
                                       graphData={graphObj.graphValues}   />)
            });
        }
        return(
            <Fragment>
            <div className={classes.TitleBar}>
                <div className={classes.ContainerTitle} >
                    <ContainerTitle >Anomalies</ContainerTitle>
                </div>
            </div>
                {anomaliesCard}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
        return{
            accountType:state.header.accountType,
            isLoading: state.anomalies.isLoading,
            anomaliesRequestMetrics: state.anomalies.anomaliesRequestMetrics,
            anomaliesResponse: state.anomalies.anomaliesResponse
        }
};

const mapDispatchToProps = (dispatch) => {
    return{
        getAnomaliesResponseData: (accountType,graphMetrics,arrayIndex) =>
        {dispatch(actions.getAnomaliesData(accountType,graphMetrics,arrayIndex))},
        loadUserView: () => dispatch(actions.changeAdminView(false))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Anomalies)
