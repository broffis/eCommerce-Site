import React from 'react';

import classes from './CarouselItem.css';

const carouselItem = (props) => (
    <figure className={classes.CarouselItem}>
       <img src={props.cover} alt={props.ablumName} /*by ${props.band}'*//>
        <figcaption>{props.band}</figcaption>
        <div className={classes.textOverlay}>
            <p>{props.albumName} </p>
            <p> by </p> 
            <p>{props.band}</p>
        </div>
    </figure>

);

export default carouselItem;