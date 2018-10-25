import React from 'react';

import classes from './Record.css';

const record = (props) => {
    let altText = `${props.albumName} by ${props.artist}`;
    return(
    <li className={classes.Record}>
        <figure>
            <img src={props.albumCover} alt={altText} />
            <figcaption>{props.albumName} <br/> by {props.artist} <br/> Price: ${props.price}</figcaption>
        </figure>
        <iframe src={props.spotifyURI} className={classes.Player} width="auto" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        {/* <p>{props.albumName}</p>
        <p>Artist: {props.artist}</p>
        <p>Price: ${props.price}.00</p> */}
    </li>
)};

export default record;