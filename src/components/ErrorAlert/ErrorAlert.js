import React from 'react';
import classes from './ErrorAlert.css';
import {X} from "react-feather";

const errorAlert = (props) => {
    let errorVisibilityClasses = [classes.Container, classes.Hide].join(" ");
    if (props.isVisible) {
        errorVisibilityClasses = [classes.Container, classes.Show].join(" ");
    }
    return(
        <div className={errorVisibilityClasses}>
            <div className={classes.ErrorMessageWrapper}>
                <div className={classes.ErrorMessage}>
                    {props.message}
                </div>
                <div onClick={props.clicked} className={classes.CloseBtn}>
                    <X size={13} />
                </div>
            </div>
        </div>
    )
};

export default errorAlert;
