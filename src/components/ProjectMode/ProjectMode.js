import React,{Component} from 'react';
import classes from './ProjectMode.css';

import {Settings} from "react-feather";

class projectMode extends Component{
    render() {
        return(
            <span className={classes.Loading}>
                <Settings/>
            </span>
        )
    }
};

export default projectMode;
