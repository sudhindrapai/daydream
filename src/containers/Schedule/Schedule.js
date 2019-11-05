import React, {Component} from 'react';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import classes from './Schedule.module.css';

class Realtime extends Component{
    render() {
        return(
            <div className={classes.Schedule}>
                <ComingSoon />
            </div>
        )
    }
}

export default Realtime
