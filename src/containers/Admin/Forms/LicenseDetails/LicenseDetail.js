import React, {Component} from 'react';
import classes from './LicenseDetails.module.css';
import Input from "../../../../components/UI/Input/Input";
import Button from '../../../../components/UI/Button/Button';

class LicenseDetail extends Component {
    state={
        licenseDetailForm:{
            name:{
                label: "Name",
                elementType: "select",
                elementConfig:{
                    options:[
                        {value:"DEMO",displayValue:"DEMO"},
                        {value:"BASIC",displayValue:"BASIC"},
                        {value:"ADVANCED",displayValue:"ADVANCED"}
                    ]
                },
                value: "DEMO",
                validation:{},
                valid:true,
                shouldValidate:false,
            },
            maxNumberOfLocationsAllowed:{
                label: "maximum Number Of Locations Allowed",
                elementType: "input",
                elementConfig:{
                    type:"number",
                    placeholder:"Max location count",
                },
                value:"",
                validation: {
                    required: true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            maxNumberOfUsersPerLocationAllowed:{
                label: "maximum Number Of Users per location Allowed",
                elementType: "input",
                elementConfig:{
                    type:"number",
                    placeholder:"Max users count per location",
                },
                value:"",
                validation: {
                    required: true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            maxNumberOfAccountsPerLocationAllowed:{
                label: "maximum Number Of Accounts per location Allowed",
                elementType: "input",
                elementConfig:{
                    type:"number",
                    placeholder:"Max Accounts count per location",
                },
                value:"",
                validation: {
                    required: true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            Modules:{
                label: "Modules Included ",
                elementType: "multiSelect",
                elementConfig:{
                    isVisible:true,
                    options:[
                        {value:"FORECAST",displayValue:"FORECAST",isSelected:true},
                        {value:"ANOMALIES",displayValue:"ANOMALIES",isSelected:false},
                        {value:"ANALYTICS",displayValue:"ANALYTICS",isSelected:false}
                    ]
                },
                value: "",
                validation:{},
                valid:true,
                shouldValidate:false,
            },
        },
        formIsValid:false
    };

    checkValidity = (value,rules) => {
        let isValid = true;

        if (rules.isRequired) {
            isValid = (value.trim()).length > 0 && isValid
        }

        if (rules.minLength){
            isValid = (value.trim()).length >= rules.minLength && isValid
        }

        if (rules.maxLength){
            isValid = (value.trim()).length <= rules.maxLength && isValid
        }

        return isValid
    };

    inputChangeHandler = (event,inputIdentifier) => {
        const updateClientDetailForm = {
            ...this.state.licenseDetailForm
        };
        const updatedFormElement = {...updateClientDetailForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched = true;
        updateClientDetailForm[inputIdentifier] = updatedFormElement;

        let isFormIsValid = true;
        for (let inputIdentifier in updateClientDetailForm) {
            isFormIsValid = updateClientDetailForm[inputIdentifier].valid && isFormIsValid
        }

        this.setState({
            ...this.state,
            licenseDetailForm:updateClientDetailForm,
            formIsValid:isFormIsValid
        })
    };

    toggleMultiSelectHandler = (formElementId) => {
        console.log(formElementId,"toggleMultiSelectHandler")
    };

    updateMultiSelectOption = (formElementId,selectedObj) => {

        let updatedLicenseDetailForm = {
            ...this.state.licenseDetailForm
        };

        let updatedFormElement = {...updatedLicenseDetailForm[formElementId]};

        let updatedConfigObj = {...updatedFormElement.elementConfig};

        let updatedOptionsArray = [...updatedConfigObj.options];

        let updatedValue = "";

        for (let multiSelectOption of updatedOptionsArray) {
            if (multiSelectOption.value === selectedObj.value) {
                multiSelectOption["isSelected"] = !(multiSelectOption.isSelected);

            }
            if (multiSelectOption.isSelected) {
                if (updatedValue.length === 0) {
                    updatedValue = multiSelectOption.displayValue;
                } else {
                    updatedValue = `${updatedValue}, ${multiSelectOption.displayValue}`;
                }
            }
        }

        console.log(updatedValue)
        updatedFormElement["value"] = updatedValue;

        updatedConfigObj["options"] = updatedOptionsArray;
        updatedFormElement["config"] = updatedConfigObj;

        updatedLicenseDetailForm[formElementId] = updatedFormElement;

        this.setState({
            ...this.state,
            licenseDetailForm:updatedLicenseDetailForm
        })

    };

    submitClientDetail = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.licenseDetailForm) {
            formData[formElementIdentifier] = (this.state.licenseDetailForm)[formElementIdentifier].value
        }
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.licenseDetailForm) {
            formElementsArray.push({
                id:key,
                config:this.state.licenseDetailForm[key]
            })
        }

        return(
            <div className={classes.Container}>
                <form onSubmit={this.submitClientDetail}>
                    <div className={classes.FormContainer}>
                        <div className={classes.FormTitle}>
                            License Detail
                        </div>
                        {formElementsArray.map((formElement) => {
                            return( <Input
                                toggleMultiSelect={() =>{this.toggleMultiSelectHandler(formElement.id)}}
                                onSelectMultipleOption = {this.updateMultiSelectOption}
                                formElementId = {formElement.id}
                                isAdminInput={this.props.isAdminViewLoaded}
                                label={formElement.config.label}
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig = {formElement.config.elementConfig}
                                value={formElement.config.value}
                                invalid={!formElement.config.valid }
                                shouldValidate={formElement.config.shouldValidate}
                                touched={formElement.config.touched}
                                changed={(event) => {this.inputChangeHandler(event,formElement.id)}} />)
                        })}
                        <Button type={"submit"} isBtnDisabled={!this.state.formIsValid}
                                btnType={"BtnPrimary"}
                                clicked={this.submitClientDetail}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LicenseDetail
