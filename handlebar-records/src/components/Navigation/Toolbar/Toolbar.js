import React from 'react';

import NavList from '../NavList/NavList';
// import Logo from '../../Logo/Logo';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavList/>
        </nav>
    </header>
)

export default toolbar;