import React, {Component} from 'react';
import {connect} from 'react-redux';
import {User, Edit, LogOut} from 'react-feather';
import classes from './Profile.module.css';

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

    render() {

        if (this.state.isDropdownVisible) {
            this.dropdownClasses = [classes.ProfileDropdown, classes.Show].join(" ");
        } else {
            this.dropdownClasses = [classes.ProfileDropdown, classes.Hide].join(" ");
        }

       this.profileImg = <img src={this.props.profile.imgUrl} alt={"user profile"} className={classes.ProfileImg}/>;

        return (
            <div onClick={this.toggleProfileDropdown} className={classes.Container}>
                {this.profileImg}
                <div className={this.dropdownClasses}>
                    <div className={classes.ArrowBox}/>
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
        profile: state.header.profileImgObj
    }
};

export default connect(mapStateToProps)(Profile)
