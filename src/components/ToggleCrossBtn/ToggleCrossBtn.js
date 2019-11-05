import React from 'react';
import classes from './ToggleCrossBtn.module.css';

const toggleCrossBtn = (props) => {
    let viewClass = [classes.Container, classes.Default].join(" ");
    if (!(props.isDefaultLoaded)) {
        viewClass = [classes.Container, classes.Cross].join(" ");
    }
    return(
        <div className={viewClass}>
            <div className={classes.Div1}></div>
            <div className={classes.Div2}></div>
        </div>
    )
};

export default toggleCrossBtn
