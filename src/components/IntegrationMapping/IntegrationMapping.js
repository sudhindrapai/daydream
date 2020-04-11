import React,{Component} from 'react';
import classes from './IntegrationMapping.css';

import {connect} from 'react-redux';
import * as action from '../../store/actions/index';

// import of other components
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/SelectDropdown/SelectDropdown';
import Spinner from '../../components/Spinner/Spinner';

class IntegrationMapping extends Component{

    mapHeader = (obj) => {
        this.props.updateFixedHeaders(obj,this.props.requiredHeadersArray);
    };

    postMappedHeaders = () => {
        this.props.updateMappedHeaders(this.props.requiredHeadersArray);
        this.props.loadNextStep();
    };

    render() {
        let mappingView = null;
        if ((this.props.requiredHeadersArray).length > 0) {
            mappingView = (this.props.requiredHeadersArray).map((obj,index) => {
                let mapObj = {};
                mapObj["id"] = index;
                mapObj["selectedHeader"] = "";
                return(
                    <tr key={index}>
                        <td>
                            <div>{obj.label}</div>
                        </td>
                        <td>
                            <Select onSelectObj={mapObj}
                                    onSelectValue={(updatedObj) => {this.mapHeader(updatedObj)}}
                                    dropdownValues={this.props.uploadedFileHeaders} />
                        </td>
                        <td>
                            {obj.description}
                        </td>
                    </tr>
                )
            });
        }

        let loader = null;
            if (this.props.isLoaderVisible) {
                loader = <Spinner/>
            }

        return(
            <div className={classes.Container}>
                {loader}
                <table>
                    <thead>
                    <tr>
                        <td>
                            WFM FIELDS
                        </td>
                        <td>
                            CSV HEADERS
                        </td>
                        <td>
                            DESCRIPTION
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {mappingView}
                    </tbody>
                </table>
                <div className={classes.NavigationButtonsDiv}>
                    <Button type={"button"} btnType={"BtnBgGrey"}
                            clicked={this.props.loadPreviousStep}>
                        Back
                    </Button>
                    <Button type={"button"} btnType={"BtnPrimary"}
                            clicked={this.postMappedHeaders}>
                        Continue
                    </Button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getRequiredHeaders(this.props.importedSheetUrl);
    }
}

const mapStateToProps = (state) => {
    return{
        isLoaderVisible:state.integrationMapping.isLoaderVisible,
        importedSheetUrl:state.integrationImportReducer.importedSheetUrl,
        requiredHeadersArray:state.integrationMapping.requiredHeaders,
        uploadedFileHeaders:state.integrationMapping.uploadedFileHeaders
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        getRequiredHeaders: (sheetUrl) => dispatch(action.getRequiredMappingHeaders(sheetUrl)),
        updateFixedHeaders: (obj,headersArray) => dispatch(action.updateIntegrationMappingFixedHeadersArray(obj,headersArray)),
        updateMappedHeaders: (headersArray) => dispatch(action.postMappedResponse(headersArray))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(IntegrationMapping);
