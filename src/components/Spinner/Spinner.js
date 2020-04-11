import React from 'react';
import classes from './Spinner.css';

const spinner = () =>(
    <div className={classes.Container}>
        <div className={classes.LoadingImgContainer}>
            <div className={classes.LoadingImg}>
                <div className={classes.Loader}></div>
            </div>
        </div>
    </div>
);

export default spinner;
