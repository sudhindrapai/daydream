import React from 'react';
import classes from './ToggleCrossBtn.module.css';

const toggleCrossBtn = (props) => {
    let viewClass = null;
    if (!(props.isDefaultLoaded)) {
        if (props.isAdminViewLoaded) {
            viewClass = [classes.AdminContainer, classes.Cross].join(" ");
        } else {
            viewClass = [classes.Container, classes.Cross].join(" ");
        }
    } else {
        if (props.isAdminViewLoaded) {
            viewClass = [classes.AdminContainer, classes.Default].join(" ");
        } else {
            viewClass = [classes.Container, classes.Default].join(" ");
        }
    }
    return(
        <div className={viewClass}>
            <div className={classes.Div1}></div>
            <div className={classes.Div2}></div>
        </div>
    )
};

export default toggleCrossBtn
