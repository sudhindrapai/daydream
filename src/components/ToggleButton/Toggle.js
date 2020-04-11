import React,{Component} from 'react';
import classes from './Toggle.css';

import {connect} from 'react-redux';

class Toggle extends Component{
    render() {
        let toggleContainerClasses = classes.ToggleContainer;
        if (this.props.isAdminViewLoaded) {
            toggleContainerClasses = classes.AdminToggleContainer
        }
        return(
            <div className={toggleContainerClasses}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isAdminViewLoaded:state.layout.isAdminViewLoaded
    }
};

export default connect(mapStateToProps)(Toggle);
