import React from 'react';
import classes from './ContainerTitle.module.css';

const containerTitle = (props) => {
    return(
        <div className={classes.containerTitle}>{props.children}</div>
    )
};
export default containerTitle
