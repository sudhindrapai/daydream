import React, {Component} from 'react';
import classes from './Layout.module.css';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import Logo from '../../components/Logo/Logo';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import ToggleButton from '../../components/ToggleButton/Toggle';
import Button from '../../components/UI/Button/Button';
import FixedLeftMenu from '../../components/FixedLeftMenuBar/FixedLeftMenuBar';

class Layout extends Component {
    state={
      leftMenuVisible:true
    };

    toggleLeftMenuHandler = () => {
      let updatedState = {...this.state};
      updatedState.leftMenuVisible = !(updatedState.leftMenuVisible);
      this.setState({leftMenuVisible:updatedState.leftMenuVisible});
    };

    render() {
        let leftMenuClasses = [classes.LeftMenu, classes.Open].join(" ");
        let contentClasses = [classes.Contents, classes.ML245].join(" ");
        if(!this.state.leftMenuVisible){
            leftMenuClasses = [classes.LeftMenu, classes.Close].join(" ");
            contentClasses = [classes.Contents, classes.ML85].join(" ");
        }

        return(
            <div className={classes.Container}>
                <FixedLeftMenu isLeftMenuVisible={this.state.leftMenuVisible} clicked={this.toggleLeftMenuHandler}  />
                <div className={leftMenuClasses}>
                    <div className={classes.LogoSection}>
                        <div className={classes.Logo}>
                            <Logo/>
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

export default (Layout);
