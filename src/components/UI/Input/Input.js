import React from 'react';
import classes from './Input.module.css';

//import of images
import selectedCheckboxUrl from '../../../assets/images/checkbox-selected.svg';
import unSelectedCheckboxUrl from '../../../assets/images/checkbox-not-selected.svg'

const input = (props) => {

    let inputElement = null;

    let inputClasses = [classes.inputElement].join(" ");

    if (props.invalid && props.shouldValidate && props.touched) {
        if (props.isAdminInput === true) {
            inputClasses = [classes.AdminInputElement, classes.Invalid].join(" ")
        } else {
            inputClasses = [classes.inputElement, classes.Invalid].join(" ")
        }
    } else {
        if (props.isAdminInput === true) {
            inputClasses = [classes.AdminInputElement].join(" ");
        }else {
            inputClasses = [classes.inputElement].join(" ");
        }
    }

    let drawMultiSelect = (configObj) => {
        let multiSelectDropdown = null;
        console.log(props.value,"drawMultiSelect")
        if (configObj.isVisible){
            multiSelectDropdown = (configObj.options).map((option,index) => {
                let checkBoxUrl = option.isSelected ? selectedCheckboxUrl : unSelectedCheckboxUrl;
                let checkboxImg = <img src={checkBoxUrl} alt={option.value} />;
                let multiSelectLabel = <div className={classes.MultiSelectLabel}>{option.displayValue}</div>
                return(<div onClick={() => {props.onSelectMultipleOption(props.formElementId,option)}}
                            key={index} className={classes.MultiSelectOption}>{checkboxImg}{multiSelectLabel}</div>)
            });
        }

        let multiSelectClass = null;
            if (props.isAdminInput) {
                multiSelectClass = classes.AdminMultiSelect
            } else {
                multiSelectClass = classes.MultiSelect
            }

        return(<div onMouseEnter={props.toggleMultiSelect}
             onMouseLeave={props.toggleMultiSelect} className={multiSelectClass}>
            <input value={props.value} /><div className={classes.multiSelectOptions}>{multiSelectDropdown}</div>
            </div>)
    };

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;

            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (<select
                className={inputClasses}
                value={props.value} onChange={props.changed} >{(props.elementConfig.options).map((option,index) =>(
                    <option value={option.value} key={index}>{option.displayValue}</option>
            ))}</select>);
            break;
        case ('multiSelect'):
            inputElement = drawMultiSelect(props.elementConfig);
            break;
        default:
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};
export default input;
