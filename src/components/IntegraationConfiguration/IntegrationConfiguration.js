import React, {Component} from 'react';
import classes from './IntegrationConfiguration.css';

import {connect} from 'react-redux';
import * as action from '../../store/actions/index';

//import of other components
import Select from '../../components/UI/SelectDropdown/SelectDropdown';
import Button from '../../components/UI/Button/Button';

import notSelectedCheckboxUrl from '../../assets/images/checkbox-not-selected.svg';
import selectedCheckboxUrl from '../../assets/images/checkbox-selected.svg';

class IntegrationConfiguration extends Component{

    state={
        isHandleDuplication:false
    };

    toggleHandleDuplicateState = () => {
        this.setState({
            ...this.state,
            isHandleDuplication: !(this.state.isHandleDuplication)
        })
    };

    uploadIntegrationData = () => {

    };

    render() {

        let handleDuplicateUrl = this.state.isHandleDuplication ? selectedCheckboxUrl : notSelectedCheckboxUrl;

        return(
            <div className={classes.Container}>
                <div className={classes.CheckboxOptions}>
                    <div className={classes.ConfigurationOption} onClick={this.toggleHandleDuplicateState}>
                        <img src={handleDuplicateUrl} alt={"handle duplicate"} />
                        <div className={classes.Label}>
                            Do you want to handle the duplicate on exiting records?
                        </div>
                    </div>
                </div>
                <div className={classes.CsvHeaders}>
                    <div className={classes.DuplicateHeaderLabel}>
                        Mention the fields which you want to handle duplicate
                    </div>
                    <Select dropdownValues={this.props.csvFileHeaders}/>
                </div>
                <div className={classes.NavigationDiv}>
                    <Button type={"button"} btnType={"BtnBgGrey"} clicked={this.props.loadPreviousStep}>
                        Back
                    </Button>
                    <Button type={"button"} btnType = {"BtnPrimary"} clicke={this.uploadIntegrationData}>
                        Upload
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        csvFileHeaders:state.integrationMapping.uploadedFileHeaders
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadIntegrationData: () => dispatch(action.importIntegrationFile())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(IntegrationConfiguration)
