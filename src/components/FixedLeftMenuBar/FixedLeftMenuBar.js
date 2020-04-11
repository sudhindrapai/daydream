import React, {Component} from 'react';
import classes from './FixedLeftMenuBar.css';
import {NavLink} from 'react-router-dom';
import {Trello, Eye, Activity, Calendar, AlertCircle, Aperture, Box,Users} from "react-feather";
import CrossBtn from '../ToggleCrossBtn/ToggleCrossBtn';

import {connect} from 'react-redux';

import Button from '../UI/Button/Button';

class FixedLeftMenuBar extends Component{
    render() {
        if (this.props.isAdminViewLoaded) {
            return(
                <div className={classes.AdminContainer}>
                    <div className={classes.AdminToggleSection}>
                        <Button type={"button"} btnType={"Transparent"} clicked={this.props.clicked}>
                            <CrossBtn isAdminViewLoaded={this.props.isAdminViewLoaded} isDefaultLoaded = {this.props.isLeftMenuVisible} />
                        </Button>
                    </div>
                    <div className={classes.AdminLeftMenuSection}>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <NavLink to={"/admin/dashboard"}>
                                        <Box size={18} />
                                    </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NavLink to={"/admin/clients/all"}>
                                        <Users size={18}/>
                                    </NavLink>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return(
                <div className={classes.Container}>
                    <div className={classes.ToggleSection}>
                        <Button type={"button"} btnType={"Transparent"} clicked={this.props.clicked}>
                            <CrossBtn isAdminViewLoaded={this.props.isAdminViewLoaded} isDefaultLoaded = {this.props.isLeftMenuVisible} />
                        </Button>
                    </div>
                    <div className={classes.LeftMenuSection}>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <NavLink to={"/forecast"}>
                                        <Eye size={18} />
                                    </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NavLink to={"/analytics"}>
                                        <Trello size={18}/>
                                    </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NavLink to={"/anomalies"}>
                                        <AlertCircle size={18}/>
                                    </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NavLink to={"/intraday"}>
                                        <Activity size={18}/>
                                    </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NavLink to={"/schedule"}>
                                        <Calendar size={18}/>
                                    </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NavLink to={"/planner"}>
                                        <Aperture size={18}/>
                                    </NavLink>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        isAdminViewLoaded:state.layout.isAdminViewLoaded
    }
};

export default connect(mapStateToProps)(FixedLeftMenuBar);
