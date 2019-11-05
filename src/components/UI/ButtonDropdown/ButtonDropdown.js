import React, {Component} from 'react';
import classes from './ButtonDropdown.module.css';
import {ChevronDown} from "react-feather";

class ButtonDropdown extends Component{
    dropdownValuesArray = null;
    dropdownValue = null;

    state={
      isExpanded: false
    };

    toggleDropdownVisibility = () => {
        this.setState({
            isExpanded: !(this.state.isExpanded)
        })
    };

    render() {
        this.dropdownValuesArray = this.props.dropdownValue;
        if (this.dropdownValuesArray.length > 0) {
            this.dropdownValue = this.dropdownValuesArray.map((value,index) => {
                return(
                    <li onClick={() => {this.props.clicked(value.label)}} key={index}>
                        <div>{value.label}</div>
                    </li>
                )
            });
        }

        let dropdownClasses = [classes.DropdownMenu, classes.Hide].join(" ");

        if (!this.state.isExpanded) {
            dropdownClasses = [classes.DropdownMenu, classes.Hide].join(" ");
        } else {
            dropdownClasses = [classes.DropdownMenu, classes.Show].join(" ");
        }

        return(
            <div className={classes.Dropdown}>
                <button onClick={this.toggleDropdownVisibility} type="button" className={classes.Profile}>
                    {this.props.children}
                    <span className={classes.Chevron}>
                   <ChevronDown size={12}/>
                </span>
                </button>
                <div className={dropdownClasses}>
                    <div className={classes.ArrowBox} />
                    <ul>
                        {this.dropdownValue}
                    </ul>
                </div>
            </div>
        )
    }
}
export default ButtonDropdown
