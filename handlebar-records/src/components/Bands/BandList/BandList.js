import React from 'react';

import classes from './BandList.css';
import Aux from '../../../hoc/Aux/Aux';
import Band from './Band/Band';

const bandList = (props) => {

    let bands = props.bandList;

    return(
        <Aux className={classes.BandList}>
            <h3>Bands</h3>
                <ul>
                    {bands.map(band => (
                        <Band 
                            key={band.id}
                            bandName={band.bandName}
                        />
                    ))}
                </ul>
        </Aux>
    )
}

export default bandList;