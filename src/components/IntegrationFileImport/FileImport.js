import React, {Component} from 'react';
import classes from './FileImport.module.css';

import {connect} from 'react-redux';
import * as action from '../../store/actions/index';

import Button from '../../components/UI/Button/Button';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import Spinner from '../../components/Spinner/Spinner';

import {UploadCloud} from 'react-feather';
import {Link} from "react-feather";

//import of icons
import {RefreshCcw} from "react-feather";

class FileImport extends Component {

    state = {
        placeHolder:"https://docs.google.com/spreadsheets/u/4/d/1TcJ_BKMn5H0nrRhJzzFGfIsfsVPXbGXb/edit#gid=1477463347",
        isUploadFromDesktopSelected: false,
        isAvailOptionVisible:true,
        isRefreshBtnVisible:false
    };

    toggleUploadOption = (selectedOption) => {
        if (selectedOption === "desktop") {
            this.setState({
                ...this.state,
                isUploadFromDesktopSelected: true
            })
        } else {
            this.setState({
                ...this.state,
                isUploadFromDesktopSelected: false
            })
        }

    };

    moveToNextStep = () => {
        this.props.loadNextSted()
    };

    validateSheetImportSheetName = (event) => {
        if ((event.target.value).length > 0) {
            this.setState({
                ...this.state,
                isAvailOptionVisible: false
            });
            this.props.getSheetName(event.target.value);
        } else {
            this.props.clearFileImportMessage();
            this.setState({
                ...this.state,
                isAvailOptionVisible: true
            });
        }
    };

    refreshImportSheet = () => {
        let sheetName = document.getElementById("fileNameInput").value;
        this.setState({
            ...this.state,
            isAvailOptionVisible: false
        });
        this.props.getSheetName(sheetName);
    };


    redirectToFileImportLearnMore = () => {
        console.log("File import learn more");
    };

    render() {

        let availOptionClasses = null;
        if (this.state.isAvailOptionVisible) {
            availOptionClasses = [classes.AvailableUploadUrls, classes.Show].join(" ");
        } else {
            availOptionClasses = [classes.AvailableUploadUrls, classes.Hide].join(" ");
        }

        let refreshBtnClasses = [classes.RefreshDiv,classes.Hide].join(" ");
        if (this.props.refreshBtnVisibleStatus) {
            refreshBtnClasses = [classes.RefreshDiv,classes.Show].join(" ");
        }

        let sheetNameVisibility = classes.Hide;
        if (this.props.isInvalidFileUrl) {
            sheetNameVisibility = classes.Hide;
        } else {
            sheetNameVisibility = classes.Show;
        }

        let loader = null;
        if (this.props.isLoaderIsVisible) {
            loader = <Spinner/>;
        }

        let uploadOption = null;
        if (!this.state.isUploadFromDesktopSelected) {
            uploadOption = (
                <div className={classes.UploadFromContainerUrl}>
                    {loader}
                    <div className={classes.UploadFromUrlLabel}>
                        Google Sheet URL
                    </div>
                    <div className={classes.InputDiv}>
                        <input
                            placeholder={this.state.placeHolder}
                               type={"text"}
                               id={"fileNameInput"}
                               onChange={(event) => {this.validateSheetImportSheetName(event)}}
                               className={classes.UploadFromUrlInput}/>
                        <div className={refreshBtnClasses}>
                            <Button type={"button"} isBtnDisabled={false}
                                    btnType={"Transparent"}
                                    clicked={this.refreshImportSheet}>
                                <RefreshCcw size={16}  />
                            </Button>
                        </div>
                    </div>
                    <div className={availOptionClasses}>
                        http://example.com/sample.csv (or) https://goo.gl/SX2tNf (or) http://bit.ly/2hXvIAQ
                    </div>
                    <div className={classes.NoteSection}>
                        <div className={classes.Notes}>
                            {this.props.importHeaderMessage}
                        </div>
                    </div>
                    <div className={sheetNameVisibility}>
                    <div className={classes.SheetNameDiv}>
                        <div className={classes.SheetNameLabel}>
                            Selected Sheet Name:
                        </div>
                        <div className={classes.SheetName}>
                            {this.props.sheetName}
                        </div>
                    </div>
                    </div>
                    <div className={classes.MoveToNextDiv}>
                        <div>
                            <Button type={"button"} isBtnDisabled={false}
                                    btnType={"BtnLink"}
                                    clicked={this.redirectToFileImportLearnMore}>
                            Learn More
                            </Button>
                        </div>
                        <Button isBtnDisabled={this.props.isInvalidFileUrl}
                                type={"button"} btnType={"BtnPrimary"} clicked={this.moveToNextStep}>
                            Continue
                        </Button>
                    </div>
                </div>
            );
        } else {
            uploadOption =
                <div className={classes.UploadFromDesktopContainer}>
                    <ComingSoon/>
                </div>
        }

        let uploadFromDesktopClasses = classes.UploadOption;
        let uploadFromUrlClasses = classes.UploadOption;
        if (this.state.isUploadFromDesktopSelected) {
            uploadFromDesktopClasses = [classes.UploadOption, classes.SelectedUploadFormat].join(" ");
            uploadFromUrlClasses = classes.UploadOption;
        } else {
            uploadFromDesktopClasses = classes.UploadOption;
            uploadFromUrlClasses = [classes.UploadOption, classes.SelectedUploadFormat].join(" ");
        }

        return (
            <div className={classes.Container}>
                <div className={classes.UploadOptionsContainer}>
                    <div onClick={() => {
                        this.toggleUploadOption("desktop")
                    }} className={uploadFromDesktopClasses}>
                        <UploadCloud size={18}/>
                        <span>
                            Upload from Desktop
                        </span>
                    </div>
                    <div onClick={() => {
                        this.toggleUploadOption("url")
                    }} className={uploadFromUrlClasses}>
                        <Link size={18}/>
                        <span>
                        Upload from URL
                    </span>
                    </div>
                </div>
                <div className={classes.UploadValuesContainer}>
                    {uploadOption}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return{
      isLoaderIsVisible:state.integrationImportReducer.isLoaderIsVisible,
      importHeaderMessage: state.integrationImportReducer.getSheetNameMessage,
      sheetName:state.integrationImportReducer.sheetName,
      isInvalidFileUrl: state.integrationImportReducer.isInvalidFileUrl,
      refreshBtnVisibleStatus: state.integrationImportReducer.isRefreshBtnVisible
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSheetName: (sheetName) => dispatch(action.getSheetName(sheetName)),
        clearFileImportMessage: () => dispatch(action.clearFileImportMessage())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FileImport)
