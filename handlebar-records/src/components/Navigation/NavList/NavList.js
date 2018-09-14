import React from 'react';

import classes from './NavList.css';
// import NavItem from './NavItem/NavItem';


const navigationItems = () => (
    <ul className={classes.NavItems}>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
    </ul>
);

export default navigationItems;