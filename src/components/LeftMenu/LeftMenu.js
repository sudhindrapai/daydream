import React, {Component,Fragment} from 'react';
import classes from './LeftMenu.module.css';

import {connect} from 'react-redux';

import MenuItem from './MenuItem/MenuItem';

class LeftMenu extends Component{
    render() {
        if (this.props.isAdminViewLoaded) {
            return (
                <Fragment>
                    <table className={classes.AdminLeftMenu}>
                        <tbody>
                        <tr>
                            <td className={classes.LeftMenuTitle} colSpan={2}>MAIN</td>
                        </tr>
                        <MenuItem isAdminMenuItem={true} icon={"box"} link={"/admin/dashboard"}>Dashboard</MenuItem>
                        <tr>
                            <td className={[classes.LeftMenuTitle, classes.PT22].join(" ")} colSpan={2}>COMPONENTS</td>
                        </tr>
                        <MenuItem isAdminMenuItem={true} icon={"users"} link={"/admin/clients/all"}>Client</MenuItem>
                        </tbody>
                    </table>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <table className={classes.LeftMenu}>
                        <tbody>
                        <MenuItem isAdminMenuItem={false} icon={"eye"} link={"/forecast"}>Forecast</MenuItem>
                        <MenuItem isAdminMenuItem={false} icon={"trello"} link={"/analytics"}>Analytics</MenuItem>
                        <MenuItem isAdminMenuItem={false} icon={"alertCircle"} link={"/anomalies"}>Anomalies</MenuItem>
                        <MenuItem isAdminMenuItem={false} icon={"activity"} link={"/intraday"}>Intraday</MenuItem>
                        <MenuItem isAdminMenuItem={false} icon={"calendar"} link={"/schedule"}>Schedule</MenuItem>
                        <MenuItem isAdminMenuItem={false} icon={"aperture"} link={"/planner"}>Planner</MenuItem>
                        <MenuItem isAdminMenuItem={false} icon={"plusSquare"} link={"/integration"} >Integration</MenuItem>
                        </tbody>
                    </table>
                </Fragment>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        isAdminViewLoaded:state.layout.isAdminViewLoaded
    }
};

export default connect(mapStateToProps)(LeftMenu);
