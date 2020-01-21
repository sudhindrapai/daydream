import React, {Component} from 'react';
import classes from './LocationDetail.module.css';
import Input from "../../../../components/UI/Input/Input";
import Button from '../../../../components/UI/Button/Button';

class LocationDetail extends Component{
    state={
        locationDetail:{
            clientLocationId:{
                label:"Clients location Id",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Clients location id'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            timeZone:{
                label:"TimeZone",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'TimeZone'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            address1:{
                label:"Address 1",
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            address2:{
                label:"Address 2",
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            city:{
                label:"City",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            state:{
                label:"State",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'State'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            country:{
                label:"Country",
                elementType: 'select',
                elementConfig: {
                    options:[
                        {value:"India",displayValue:"India"},
                        {value:"China",displayValue:"China"},
                        {value:"Nepal",displayValue:"Nepal"},
                        {value:"Bangladesh",displayValue:"Bangladesh"},
                        {value:"Sri Lanka",displayValue:"Sri Lanka"},
                        {value:"Maldives",displayValue:"Maldives"},
                        {value:"Australia",displayValue:"Australia"},
                        {value:"USA",displayValue:"USA"}
                    ]
                },
                value: "India",
                validation:{},
                shouldValidate:false,
                valid:true,
                touched:false
            },
            zipCode:{
                label:"Zip Code",
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Zip Code'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            latitude:{
                label:"Latitude",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Latitude'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            longitude:{
                label:"Longitude",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Longitude'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            phoneNumber:{
                label:"PhoneNumber",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'PhoneNumber'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            phoneExtension:{
                label:"Phone Extension",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '+91'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            isActive:{
                label:"is Active",
                elementType: 'select',
                elementConfig: {
                    options:[
                        {value:"Yes",displayValue:"Yes"},
                        {value:"No",displayValue:"No"}
                    ]
                },
                value: "",
                validation:{},
                shouldValidate:false,
                valid:true,
                touched:false
            }
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
            ...this.state.locationDetail
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
            locationDetail:updateClientDetailForm,
            formIsValid:isFormIsValid
        })
    };

    submitClientDetail = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.locationDetail) {
            formData[formElementIdentifier] = (this.state.locationDetail)[formElementIdentifier].value
        }
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.locationDetail) {
            formElementsArray.push({
                id:key,
                config:this.state.locationDetail[key]
            })
        }

        return(
            <div className={classes.Container}>
                <form onSubmit={this.submitClientDetail}>
                    <div className={classes.FormContainer}>
                        <div className={classes.FormTitle}>
                            Location Detail
                        </div>
                        {formElementsArray.map((formElement) => {
                            return( <Input
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

export default LocationDetail;
