import React from 'react';

import classes from './BandList.css';
import Aux from '../../../hoc/Aux/Aux';
import Band from './Band/Band';

const bandList = (props) => {
    // function removeDuplicateBands(arr){
    //     let filteredBands = [];
    //     for(let i = 0; i < arr.length; i++) {
    //         if(filteredBands.indexOf([i].bandName)===-1) {
    //             filteredBands.push(arr[i].bandName);
    //         }
    //     }
    //     return filteredBands
    // }

    // let uniqueBands = removeDuplicateBands(bands);

    let bands = props.bandList;
    
    // let uniqueBands = [...new Set(bands)];
    // console.log(uniqueBands);

    // console.log(props.bandList);

    return(
        <Aux className={classes.BandList}>
            <h3>Bands</h3>
                <ul>
                    {bands.map(band => (
                        <Band 
                            key={band.id}
                            bandName={band.bandName}
                            // albumName={band.albumName}
                        />
                    ))}
                </ul>
        </Aux>
    )
}

export default bandList;