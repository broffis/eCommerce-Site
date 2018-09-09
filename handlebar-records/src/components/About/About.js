import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './About.css';


const about = (props) => (
    <Aux className={classes.About}>
        <h3>About Us</h3>
        <div className={classes.BodyText}>
            <p>Handlebar Records is the brainchild of our founder, Brandon Roffis.</p>
            <p>Through concussions and ADHD, Brandon found his memory to be less than stellar. Even when taking notes and making lists, he found it was easy to forget what he did on any given day - and what he still had left to do.</p>
            <p>One thing he never seemed to struggle with: Music.</p>
            <p>Given just a couple notes or a few lyrics Brandon found he could recall entire songs &amp; albums, even if had been years since he heard them.</p>
            <p>Music is the great unifying factor. If you like Trance, Rap, Skat, Pop, Rock, Reggae, (and even polka), you'll love Handlebar Records. We don't discriminate based on music tastes.</p>
            <p>Where there's a beat, there's a way.</p>
        </div>
    </Aux>
);

export default about;