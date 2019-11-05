import React from 'react';
import {NavLink} from "react-router-dom";
import {Trello,Eye,Activity,Calendar,AlertCircle,Aperture} from "react-feather";

import classes from './MenuItem.module.css'

const MenuItem = (props) => {
    let icon = null;
    if (props.icon === "trello") {
        icon = <Trello size={18}/>
    } else if (props.icon === "eye") {
        icon = <Eye size={18}/>
    } else if (props.icon === "activity") {
        icon = <Activity size={18}/>
    } else if (props.icon === "calendar"){
            icon =<Calendar size={18}/>
    } else if (props.icon === "alertCircle") {
        icon =<AlertCircle size={18}/>
    } else if (props.icon === "aperture") {
            icon = <Aperture size={18} />
    }
    return (
        <tr>
            <td>
                {icon}
            </td>
            <td className={classes.MenuItem}>
                <NavLink activeClassName={["selectedOption"].join(" ")} to={props.link}>{props.children}</NavLink>
            </td>
        </tr>
    )
};

export default MenuItem;
