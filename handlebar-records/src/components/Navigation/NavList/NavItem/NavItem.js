import React from 'react';

import classes from './NavItem.css';

const navItem = (props) => (
    <a href={props.link} className={classes.NavItem}><li>{props.children}</li></a>
);

export default navItem;