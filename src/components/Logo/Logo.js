import React from 'react';
import classes from './Logo.module.css';
import {NavLink} from "react-router-dom";

const Logo = () => {
  return(
   <div className={classes.Logo}>
       <NavLink to={"/"} >
           Day<span className={classes.ColBlue}>Dream</span>
       </NavLink>
   </div>
  );
};

export default Logo;
