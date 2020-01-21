import React, {Component} from 'react';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

import {connect} from 'react-redux';
import * as action from '../../store/actions/index';

class Realtime extends Component{
    componentDidMount() {
        this.props.loadUserView();
    }

    render() {
        return(
            <ComingSoon/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadUserView: () => dispatch(action.changeAdminView(false))
    }
};

export default connect(null,mapDispatchToProps)(Realtime)
