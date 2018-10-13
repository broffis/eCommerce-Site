import React from 'react';

import classes from './CarouselItem.css';

const carouselItem = (props) => (
    <figure className={classes.CarouselItem}>
       <img src={props.cover} alt='${props.ablumName} by ${props.band}'/>
        <figcaption>{props.band}</figcaption>
    </figure>

);

export default carouselItem;