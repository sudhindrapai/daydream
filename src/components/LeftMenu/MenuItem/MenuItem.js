import React from 'react';
import {NavLink} from "react-router-dom";
import {Trello,Eye,Activity,Calendar,AlertCircle,Aperture, PlusSquare,Box,Users} from "react-feather";

import classes from './MenuItem.css'

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
    } else if (props.icon === "plusSquare") {
                icon = <PlusSquare size={18} />
    } else if (props.icon === "box"){
                    icon = <Box size={18} />
    } else if (props.icon === "users") {
        icon= <Users size={18} />
    }

    let menuItemClasses = null;
                    if(props.isAdminMenuItem) {
                        menuItemClasses = classes.AdminMenuItem;
                    } else {
                        menuItemClasses = classes.MenuItem;
                    }
    return (
        <tr>
            <td>
                {icon}
            </td>
            <td className={menuItemClasses}>
                <NavLink activeClassName={["selectedOption"].join(" ")} to={props.link}>{props.children}</NavLink>
            </td>
        </tr>
    )
};

export default MenuItem;
