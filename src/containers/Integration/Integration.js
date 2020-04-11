import React, {Component} from 'react';
import classes from './Integration.css';

import {connect} from 'react-redux';
import * as action from '../../store/actions/index';

// import of other component
import FileImport from '../../components/IntegrationFileImport/FileImport';
import Mapping from '../../components/IntegrationMapping/IntegrationMapping';
import Configuration from '../../components/IntegraationConfiguration/IntegrationConfiguration';

class Integration extends Component{
    state={
        isStep1isDisabled: false,
        isStep2isDisabled:true,
        isStep3isDisabled:true
    };

    loadImportView = () => {
        this.setState({
            ...this.state,
            isStep1isDisabled: false,
            isStep2isDisabled:true,
            isStep3isDisabled:true
        })
    };


    loadMappingView = () => {
        this.setState({
            ...this.state,
            isStep1isDisabled: true,
            isStep2isDisabled:false,
            isStep3isDisabled:true
        })
    };

    loadConfigurationView = () => {
        this.setState({
            ...this.state,
            isStep1isDisabled: true,
            isStep2isDisabled:true,
            isStep3isDisabled:false
        })
    };

    componentDidMount() {
        this.props.loadUserView();
    }


    render() {
        let tabbedMenuView = null;

        if (!this.state.isStep1isDisabled) {
            tabbedMenuView = <FileImport loadNextSted={this.loadMappingView} />
        } else if (!this.state.isStep2isDisabled) {
            tabbedMenuView = <Mapping loadNextStep={this.loadConfigurationView}
                                      loadPreviousStep={this.loadImportView} />
        } else if (!this.state.isStep3isDisabled) {
            tabbedMenuView = <Configuration loadPreviousStep={this.loadMappingView} />
        }

        let importClasses = (!this.state.isStep1isDisabled) ? classes.SelectedTabMenu : classes.TabMenuItem;
        let mappingClasses = (!this.state.isStep2isDisabled)? classes.SelectedTabMenu : classes.TabMenuItem;
        let configClasses = (!this.state.isStep3isDisabled) ? classes.SelectedTabMenu : classes.TabMenuItem;

        return(
            <div className={classes.Container}>
                <div className={classes.TabMenu}>
                <div className={importClasses}>
                    Import/Update
                </div>
                <div className={mappingClasses}>
                    Mapping
                </div>
                <div className={configClasses}>
                    Configuration
                </div>
                </div>
                <div className={classes.MenuDetail}>
                    {tabbedMenuView}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadUserView:() => dispatch(action.changeAdminView(false))
    }
};

export default connect(null,mapDispatchToProps)(Integration)
