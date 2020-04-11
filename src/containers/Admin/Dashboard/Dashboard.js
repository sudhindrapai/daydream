import React, {Component} from 'react';
import classes from './Dashboard.css';

import {connect} from 'react-redux';
import * as action from '../../../store/actions';

class Dashboard extends Component{
    componentDidMount() {
        this.props.loadAdminView()
    }

    render() {
        return(<div className={classes.Container}>Coming Soon</div>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadAdminView: () => dispatch(action.changeAdminView(true))
    }
};

export default connect(null,mapDispatchToProps)(Dashboard);
