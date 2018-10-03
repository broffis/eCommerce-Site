import React from 'react';

import classes from './Logo.css';


const logo = (props) => {
    let lwidth = window.screen.width;
    let logoImg = 'finalimages/HandleBar_Records_Logo.png';
    if(lwidth <= 720) {
        logoImg = 'finalimages/HandleBar_Records_alt.png'
    }
    // var logo = 'finalimages/HandleBar_Records_Logo.png';
    // var screenWidth = document.getElementById('logo').style.width;
    // console.log(screenWidth);
    return (
    <div className={classes.Logo} id="logo">
        {/* <img src={logo} alt="Handlebar Records"/> */}
        <img src={logoImg}
            alt=""
            />
        {/* <h1 className={classes.Header_ln1}>Handlebar</h1>
        <h1 className={classes.Header_ln2}>Records</h1> */}
    </div>
    )
};

export default logo;