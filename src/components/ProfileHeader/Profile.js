import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {User, Edit, LogOut, Repeat} from 'react-feather';
import classes from './Profile.css';

class Profile extends Component{
    profileImg = null;
    dropdownClasses = null;

    state={
      isDropdownVisible: false
    };

    toggleProfileDropdown = () => {
        this.setState({
            isDropdownVisible: !(this.state.isDropdownVisible)
        });
    };

    toggleAdminView = () => {
        if (this.props.isAdminViewLoaded) {
            this.props.history.push("/");
        } else {
            this.props.history.push("/admin/dashboard");
        }
    };

    render() {

        if (this.state.isDropdownVisible) {
            if(this.props.isAdminViewLoaded){
                this.dropdownClasses = [classes.AdminProfileDropdown, classes.Show].join(" ");
            } else {
                this.dropdownClasses = [classes.ProfileDropdown, classes.Show].join(" ");
            }
        } else {
            this.dropdownClasses = [classes.ProfileDropdown, classes.Hide].join(" ");
        }

        let arrowClasses = null;
        if (this.props.isAdminViewLoaded) {
            arrowClasses = classes.AdminArrowBox;
        } else {
            arrowClasses = classes.ArrowBox;
        }

       this.profileImg = <img src={this.props.profile.imgUrl} alt={"user profile"} className={classes.ProfileImg}/>;

        return (
            <div onClick={this.toggleProfileDropdown} className={classes.Container}>
                {this.profileImg}
                <div className={this.dropdownClasses}>
                    <div className={arrowClasses}/>
                    <div className={classes.Profile}>
                        <img src={this.props.profile.imgUrl} alt={"profile"} className={classes.DropdownProfileImg}/>
                        <div className={classes.UserName}>
                            {this.props.profile.name}
                        </div>
                        <div className={classes.UserEmail}>
                            {this.props.profile.emailId}
                        </div>
                    </div>
                    <div className={classes.ProfileOptions}>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <User size={16} strokeWidth={2} />
                                </td>
                                <td>
                                    Profile
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Edit size={16} strokeWidth={2} />
                                </td>
                                <td>
                                    Edit
                                </td>
                            </tr>
                            <tr onClick={this.toggleAdminView}>
                                <td><Repeat size={16} strokeWidth={2}/></td>
                                <td>
                                    Switch User
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <LogOut size={16} strokeWidth={2} />
                                </td>
                                <td>
                                    <a className={classes.Logout} href={"/logout"}>
                                        Log Out
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.header.profileImgObj,
        isAdminViewLoaded: state.layout.isAdminViewLoaded
    }
};

export default connect(mapStateToProps)(withRouter(Profile))
