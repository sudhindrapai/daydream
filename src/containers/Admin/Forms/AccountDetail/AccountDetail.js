import React,{Component} from 'react';
import classes from './AccountDetail.css';
import Input from "../../../../components/UI/Input/Input";
import Button from '../../../../components/UI/Button/Button';


class AccountDetail extends Component {
    state={
        accountDetail:{
            accountName:{
                label:"Account Name",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Account Name'
                },
                value: "",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            accountDescription:{
                label: "Account Description",
                elementType: 'textarea',
                elementConfig:{
                    placeholder:"About Account"
                },
                value:"",
                validation:{
                    required: true
                },
                shouldValidate: true,
                valid:false,
                touched: false
            },
            accountType:{
                label:"Account Type",
                elementType:"input",
                elementConfig:{
                    placeholder:"Account Type"
                },
                value:"",
                validation:{
                    required:true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            isParentAccount:{
                label: "Is Parent Account",
                elementType:"select",
                elementConfig:{
                    options:[
                        {value:"Yes",displayValue:"Yes"},
                        {value:"No",displayValue:"No"}
                    ]
                },
                value: "Yes",
                validation:{},
                valid:true,
                shouldValidate:false,
            },
            parentAccountId:{
                label:"Parent Account Id",
                elementType:"input",
                elementConfig:{
                    placeholder:"Parent Account Id"
                },
                value:"",
                validation: {
                    required: true
                },
                shouldValidate:true,
                valid:false,
                touched:false
            },
            isAccountSameForAllLocations:{
                label:"Is Account Same For All Locations",
                elementType:"select",
                elementConfig:{
                    options:[
                        {value:"Yes",displayValue:"Yes"},
                        {value:"No",displayValue:"No"}
                    ]
                },
                value: "Yes",
                validation:{},
                valid:true,
                shouldValidate:false,
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
            ...this.state.accountDetail
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
            accountDetail:updateClientDetailForm,
            formIsValid:isFormIsValid
        })
    };

    submitClientDetail = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.accountDetail) {
            formData[formElementIdentifier] = (this.state.accountDetail)[formElementIdentifier].value
        }
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.accountDetail) {
            formElementsArray.push({
                id:key,
                config:this.state.accountDetail[key]
            })
        }

        return(
            <div className={classes.Container}>
                <form onSubmit={this.submitClientDetail}>
                    <div className={classes.FormContainer}>
                        <div className={classes.FormTitle}>
                            Account Detail
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

export default AccountDetail;
