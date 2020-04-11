import React, {Fragment} from 'react';
import classes from './SelectDropdown.css';

const selectDropDown = (props) => {

    let onChangeSelectedValue = (event) => {
        let selectedValue = event.target.value;
        let selectedObj = props.onSelectObj;
        selectedObj.selectedHeader = selectedValue;
        props.onSelectValue(selectedObj)
    };

    let dropdownValues = null;
    if (props.dropdownValues !== undefined && (props.dropdownValues).length > 0) {
        dropdownValues = (props.dropdownValues).map((obj,index) => {
            if (index === 0) {
                return(
                    <Fragment key={index}>
                    <option>-- select --</option>
                    <option  value={obj.value}>{obj.label}</option>
                    </Fragment>
                )
            } else {
                return (<option key={index} value={obj.value}>{obj.label}</option>)
            }
        });
    }
    return(
        <div className={classes.Container}>
            <select onChange={(event) => {onChangeSelectedValue(event)}}>
                {dropdownValues}
            </select>
        </div>
    )
};

export default selectDropDown
