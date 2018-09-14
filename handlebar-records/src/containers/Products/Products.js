import React, { Component } from 'react';

import classes from './Products.css';
import Record from './Record/Record';


class Products extends Component {
    render() {
        // console.log(this.props);
        const recordList = this.props.records;
        return (
            <div className={classes.Products}>
                <h3>Records</h3>
                <ul>
                    {recordList.map(record=> (
                        <Record 
                            key={record.albumName}
                            albumName={record.albumName}
                            albumCover={record.cover}
                            price={record.price}
                            artist={record.bandName}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;