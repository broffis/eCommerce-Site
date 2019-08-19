import React from 'react';

import classes from './NavList.css';
import NavItem from './NavItem/NavItem';


const navigationItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link="" exact>Home</NavItem>
        <NavItem link="#About" >About</NavItem>
        <NavItem link="#BandList" >Shop</NavItem>
        <NavItem link="#Contact" >Contact</NavItem>
    </ul>
);

export default navigationItems;