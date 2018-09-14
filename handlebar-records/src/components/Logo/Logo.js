import React from 'react';

import classes from './Logo.css';
import mobileLogo from '../../assets/images/HandleBar_Records_Alt.png';


const logo = (props) => (
    <div className={classes.Logo}>
        <img src={mobileLogo} alt="Handlebar Records"/>
        {/* <h1 className={classes.Header_ln1}>Handlebar</h1>
        <h1 className={classes.Header_ln2}>Records</h1> */}
    </div>
);

export default logo;