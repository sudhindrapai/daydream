import React, {Component} from 'react';
import {Bell, Eye} from "react-feather";
import classes from './Notifications.module.css';

class Notification extends Component{
    state = {
        iconColor:"#535353",
        isDropdownVisible: false,
        notificationsObj: {
            count: 1
        }
    };

    clearAllNotificationHandler = () => {
        console.log("clear all notifications");
    };

    viewAllNotificationsHandler = () => {
        console.log("view all notifications handler")
    };

    toggleDropdown = () => {
        this.setState({
            isDropdownVisible: !(this.state.isDropdownVisible)
        })
    };

    changeToThemeColor = () => {
        this.setState({
            iconColor: "#4e5af2"
        })
    };

    changeToDefaultColor = () => {
        this.setState({
            iconColor: "#535353"
        })
    };

    render() {
        let dropdownClasses = null;
        if(this.state.isDropdownVisible){
            dropdownClasses = [classes.NotificationDropdown, classes.Show].join(" ")
        } else {
            dropdownClasses = [classes.NotificationDropdown, classes.Hide].join(" ");
        }
        return(
            <div onMouseEnter={this.changeToThemeColor} onMouseLeave={this.changeToDefaultColor}
                 className={classes.Container} onClick={this.toggleDropdown}>
                <span className={classes.Pulse} />
                <Bell color={this.state.iconColor} size={22} />
                <div className={dropdownClasses}>
                    <div className={classes.ArrowBox} />
                    <div className={classes.NotificationHeader}>
                        <div className={classes.TotalNotificationsCount}>
                            {this.state.notificationsObj.count} New Notifications
                        </div>
                        <div onClick={this.clearAllNotificationHandler} className={classes.ClearAllBtnDiv}>
                            clear all
                        </div>
                    </div>
                    <div className={classes.NotificationBody}>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <div className={classes.NotificationIcon}>
                                        <Eye color={"#727CF5"} strokewith={1} size={14} />
                                    </div>
                                </td>
                                <td>
                                    <div className={classes.NotificationValueHeader}>
                                        New Forecast available
                                    </div>
                                    <div className={classes.NotificationTime}>
                                        10 sec ago
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={classes.NotificationFooter}>
                        <span onClick={this.viewAllNotificationsHandler}>View all</span>
                    </div>
                </div>
            </div>
            )
    }
}

export default Notification
