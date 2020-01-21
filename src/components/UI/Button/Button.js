import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    return(
        <button type={props.type}
                disabled={props.isBtnDisabled}
                className={[classes.Btn, classes[props.btnType]].join(" ")}
                onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default button;
