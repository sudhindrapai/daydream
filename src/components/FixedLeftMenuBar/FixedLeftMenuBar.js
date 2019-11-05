import React, {Component} from 'react';
import classes from './FixedLeftMenuBar.module.css';
import {NavLink} from 'react-router-dom';
import {Trello, Eye, Activity, Calendar, AlertCircle, Aperture} from "react-feather";
import CrossBtn from '../ToggleCrossBtn/ToggleCrossBtn';

import Button from '../UI/Button/Button';

class FixedLeftMenuBar extends Component{
    render() {
        return(
                <div className={classes.Container}>
                    <div className={classes.ToggleSection}>
                        <Button type={"button"} btnType={"Transparent"} clicked={this.props.clicked}>
                            <CrossBtn isDefaultLoaded = {this.props.isLeftMenuVisible} />
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

export default FixedLeftMenuBar;
