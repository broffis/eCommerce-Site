import React from 'react';

import classes from './Logo.css';


const logo = (props) => {
    let lwidth = window.screen.width;
    let logoImg = 'finalimages/HandleBar_Records_Logo.png';
    if(lwidth <= 720) {
        logoImg = 'finalimages/HandleBar_Records_alt.png'
    }
    
    return (
    <div className={classes.Logo} id="logo">
        <img src={logoImg}
            alt=""
            />
    </div>
    )
};

export default logo;