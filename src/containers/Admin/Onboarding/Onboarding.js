import React, {Component} from 'react';
import classes from './Onboarding.module.css';

import ClientDetailForm from '../Forms/ClientDetail/ClientDetail';
import AccountDetailForm from '../Forms/AccountDetail/AccountDetail';
import LocationDetailForm from '../Forms/LocationDetail/LocationDetail';
import LicenseDetailFrom from '../Forms/LicenseDetails/LicenseDetail';

import {connect} from 'react-redux';

import * as action from "../../../store/actions";

class Onboarding extends Component{

    render() {
        return(<div className={classes.Container}>
            <ClientDetailForm isAdminViewLoaded={this.props.isAdminViewLoaded} />
            <AccountDetailForm isAdminViewLoaded={this.props.isAdminViewLoaded} />
            <LocationDetailForm isAdminViewLoaded={this.props.isAdminViewLoaded}  />
            <LicenseDetailFrom isAdminViewLoaded={this.props.isAdminViewLoaded} />
        </div>)
    }
    componentDidMount() {
        this.props.loadAdminView()
    }
}

const mapStateToProps = (state) => {
    return{
        isAdminViewLoaded:state.layout.isAdminViewLoaded
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadAdminView: () => dispatch(action.changeAdminView(true))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Onboarding)
