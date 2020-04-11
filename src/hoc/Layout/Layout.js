import React, {Component} from 'react';
import classes from './Layout.css';

import LeftMenu from '../../components/LeftMenu/LeftMenu';
import Logo from '../../components/Logo/Logo';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import ToggleButton from '../../components/ToggleButton/Toggle';
import Button from '../../components/UI/Button/Button';
import FixedLeftMenu from '../../components/FixedLeftMenuBar/FixedLeftMenuBar';
import ProjectMode from '../../components/ProjectMode/ProjectMode';

import {connect} from 'react-redux';

class Layout extends Component {
    state = {
        leftMenuVisible: true
    };

    toggleLeftMenuHandler = () => {
        let updatedState = {...this.state};
        updatedState.leftMenuVisible = !(updatedState.leftMenuVisible);
        this.setState({leftMenuVisible: updatedState.leftMenuVisible});
    };


    render() {
        let leftMenuClasses = [classes.LeftMenu, classes.Open].join(" ");
        let contentClasses = [classes.Contents, classes.ML245].join(" ");
        if (!this.state.leftMenuVisible) {

            if (this.props.isAdminViewLoaded) {
                leftMenuClasses = [classes.AdminLeftMenu, classes.Close].join(" ");
                contentClasses = [classes.AdminContents, classes.ML85].join(" ");
            } else {

                leftMenuClasses = [classes.LeftMenu, classes.Close].join(" ");
                contentClasses = [classes.Contents, classes.ML85].join(" ");
            }


        } else {

            if (this.props.isAdminViewLoaded) {
                leftMenuClasses = [classes.AdminLeftMenu, classes.Open].join(" ");
                contentClasses = [classes.AdminContents, classes.ML245].join(" ");
            } else {

                leftMenuClasses = [classes.LeftMenu, classes.Open].join(" ");
                contentClasses = [classes.Contents, classes.ML245].join(" ");
            }

        }

        // -------------- changes body color starts here ------------
        let layoutContainerClass = classes.Container;
        if (this.props.isAdminViewLoaded) {
            document.body.style = "background: #070C19; color:#ffffff";
            layoutContainerClass = classes.AdminContainer;
        } else {
            document.body.style ="background: #F9FAFB";
        }
        // -------------- changes body color ends here --------------

        // ------------ logo section classes starts here ----------
        let logoSectionClasses = classes.LogoSection;
        if (this.props.isAdminViewLoaded) {
            logoSectionClasses = classes.AdminLogoSection
        }
        // ------------ logo section classes ends here ------------

        let projectMode = null;

        if (this.props.isAdminViewLoaded) {
            projectMode = <ProjectMode/>;
        }

        return (
            <div className={layoutContainerClass}>
                {projectMode}
                <FixedLeftMenu isLeftMenuVisible={this.state.leftMenuVisible} clicked={this.toggleLeftMenuHandler}/>
                <div className={leftMenuClasses}>
                    <div className={logoSectionClasses}>
                        <div className={classes.Logo}>
                            <Logo />
                        </div>
                        <div className={classes.ToggleSection}>
                            <Button type={"button"} btnType={"Transparent"} clicked={this.toggleLeftMenuHandler}>
                                <ToggleButton/>
                            </Button>
                        </div>
                    </div>
                    <LeftMenu/>
                </div>
                <HeaderMenu/>
                <div className={contentClasses}>
                    <div className={classes.StatusBar}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isAdminViewLoaded:state.layout.isAdminViewLoaded
    }
};

export default connect(mapStateToProps)(Layout);
