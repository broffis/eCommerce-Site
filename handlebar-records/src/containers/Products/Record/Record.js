import React from 'react';

import classes from './Record.css';

const record = (props) => (
    <li className={classes.Record}>
        <p>{props.albumName}</p>
        <p>Artist: {props.artist}</p>
        <p>Price: ${props.price}.00</p>
    </li>
);

export default record;