import React from 'react';

import classes from './NavList.css';
import NavItem from './NavItem/NavItem';


const navigationItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link="/" exact>Home</NavItem>
        <NavItem link="/shop" >Shop</NavItem>
        <NavItem link="/contact" >Contact</NavItem>
    </ul>
);

export default navigationItems;