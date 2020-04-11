import React from 'react';
import classes from './ContainerTitle.css';

const containerTitle = (props) => {
    let titleClasses = [classes.containerTitle].join(" ");
    if (props.isAdminViewLoaded !== undefined && props.isAdminViewLoaded === true) {
        titleClasses = [classes.AdminContainerTitle].join(" ");
    }
    return(
        <div className={titleClasses}>{props.children}</div>
    )
};
export default containerTitle
