import React, {Component} from 'react';
import classes from './ClientDetai.module.css';

import Input from "../../../../components/UI/Input/Input";
import Button from '../../../../components/UI/Button/Button';


class ClientDetail extends Component {

    state={
        clientDetail: {
            'company_name': {
                label:"Company Name",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'company name'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            industry_Name:{
                label: "Industry Name",
                elementType: 'select',
                elementConfig: {
                    options:[
                        {value:"Contact_Center",displayValue:"Contact Center"},
                        {value:"Health and Fitness",displayValue:"Health and Fitness"}
                    ]
                },
                validation:{},
                valid:true,
                value: "Contact_Center",
                shouldValidate:false,
            },
            Logo_Image_Url: {
                label: "Logo Image URL",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'logo image URL'
                },
                value: "",
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            Description: {
                label: "Description",
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Clients Description'
                },
                value: "",
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            Website: {
                label: "Website URL",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Website URL'
                },
                value: "",
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            Client_Handle: {
                label: "Clients Handle",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Clients Handle'
                },
                value: "",
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
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
            ...this.state.clientDetail
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
            clientDetail:updateClientDetailForm,
            formIsValid:isFormIsValid
        })
    };

    submitClientDetail = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.clientDetail) {
            formData[formElementIdentifier] = (this.state.clientDetail)[formElementIdentifier].value
        }
    };

    render() {

        const formElementsArray = [];
        for (let key in this.state.clientDetail) {
            formElementsArray.push({
                id:key,
                config:this.state.clientDetail[key]
            })
        }

        return(
            <div className={classes.Container}>
            <form onSubmit={this.submitClientDetail}>
                <div className={classes.FormContainer}>
                    <div className={classes.FormTitle}>
                        Client Detail
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

export default ClientDetail
