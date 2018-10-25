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
            <a className={classes.SkipLink} href="#About"><p>Skip to Main Content</p></a>
            <NavList/>
        </nav>
    </header>
)

export default toolbar;