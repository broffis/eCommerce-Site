import React from 'react';

import classes from './CarouselItem.css';

const carouselItem = (props) => {
    let altText = `${props.albumName} by ${props.band}`;
    return(
    <figure className={classes.CarouselItem}>
       <img src={props.cover} alt={altText} /*by ${props.band}'*//>
        <figcaption>{props.band}</figcaption>
        <div className={classes.textOverlay}>
            <p>{props.albumName} </p>
            <p> by </p> 
            <p>{props.band}</p>
        </div>
    </figure>

)};

export default carouselItem;