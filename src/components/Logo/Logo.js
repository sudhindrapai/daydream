import React, {Component} from 'react';
import classes from './Logo.css';

import {NavLink} from "react-router-dom";

import {connect} from 'react-redux';

class Logo extends Component{
    logoClass = classes.White;

    render(){
        if (this.props.isAdminViewIsLoaded) {
            this.logoClass = classes.White
        } else {
            this.logoClass = classes.Blue
        }
    return(
        <div className={classes.Logo}>
            <NavLink to={"/"} >
                <span className={this.logoClass}>Day</span><span className={classes.ColBlue}>Dream</span>
            </NavLink>
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return{
        isAdminViewIsLoaded:state.layout.isAdminViewLoaded
    }
};
export default connect(mapStateToProps)(Logo);
