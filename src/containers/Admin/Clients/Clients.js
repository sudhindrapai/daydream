import React, {Component} from 'react';
import classes from './Client.module.css';

import Button from '../../../components/UI/Button/Button';

import {connect} from 'react-redux';
import * as action from '../../../store/actions';

import {withRouter} from 'react-router-dom';

// import of components
import LayoutTitle from '../../../components/ContainerTitle/ContainerTitle';

class Dashboard extends Component {
    componentDidMount() {
        this.props.loadAdminView();
        this.props.getClientsList();
    }

    redirectToOnBoardForm = () => {
        this.props.history.push({
            pathname:"/admin/onboard"
        })
    };

    render() {
        if ((this.props.clientsList).length > 0) {
            return (<div className={classes.Container}>
                <div className={classes.HeaderDiv}>
                    <div className={classes.LayoutHeader}>
                    <LayoutTitle isAdminViewLoaded={this.props.isAdminViewLoaded}>Clients</LayoutTitle>
                    </div>
                    <div className={classes.ButtonDiv}>
                        <div className={classes.ButtonDiv}>
                            <Button type={"button"}
                                    isBtnDisabled={false}
                                    btnType={"BtnPrimary"}
                                    clicked={this.redirectToOnBoardForm}>
                                Create Client
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={classes.ClientBody}>

                </div>
            </div>)
        } else {
            return (<div className={classes.Container}>
                <div className={classes.HeaderDiv}>
                    <div className={classes.LayoutHeader}>
                    <LayoutTitle isAdminViewLoaded={this.props.isAdminViewLoaded}>Clients</LayoutTitle>
                    </div>
                    <div className={classes.ButtonDiv}>
                        <div className={classes.ButtonDiv}>
                            <Button type={"button"}
                                    isBtnDisabled={false}
                                    btnType={"BtnPrimary"}
                                    clicked={this.redirectToOnBoardForm}>
                                Create Client
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={classes.EmptyClients}>
                    NO CLIENTS FOUND
                </div>
            </div>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAdminViewLoaded: state.layout.isAdminViewLoaded,
        clientsList: state.clientReducer.clients
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getClientsList: () => dispatch(action.getClientDetails()),
        loadAdminView: () => dispatch(action.changeAdminView(true))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));
