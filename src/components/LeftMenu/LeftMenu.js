import React, {Fragment} from 'react';
import classes from './LeftMenu.module.css';

import MenuItem from './MenuItem/MenuItem';

const LeftMenu = () => {
    return (
        <Fragment>
            <table className={classes.LeftMenu}>
                <tbody>
                <MenuItem icon={"eye"} link={"/forecast"}>Forecast</MenuItem>
                <MenuItem icon={"trello"} link={"/analytics"}>Analytics</MenuItem>
                <MenuItem icon={"alertCircle"} link={"/anomalies"}>Anomalies</MenuItem>
                <MenuItem icon={"activity"} link={"/intraday"}>Intraday</MenuItem>
                <MenuItem icon={"calendar"} link={"/schedule"}>Schedule</MenuItem>
                <MenuItem icon={"aperture"} link={"/planner"}>Planner</MenuItem>
                </tbody>
            </table>
        </Fragment>
    );
};

export default LeftMenu;
