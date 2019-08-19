import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';

import classes from './Products.css';
import Record from './Record/Record';


const KEYS_TO_FILTERS = ['Album', 'Price', 'Artist'];

class Products extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchTerm: '',
            bandSearch: 'All'
        }
        this.searchUpdated = this.searchUpdated.bind(this)
        this.bandSelectHandler = this.bandSelectHandler.bind(this);
        this.newLogging = this.newLogging.bind(this);
    }

    newLogging = () => {
        console.log(this.state.bandSearch);
    }; 

    bandSelectHandler = (event) => {
        var bands = event.target;
        var bandsFilter = bands.value;

        let newState = {...this.state};
        newState.bandSearch = bandsFilter;
        console.log(newState.bandSearch);
        this.setState({
            bandSearch: newState.bandSearch
        });
        // setTimeout(function(){console.log(this.state.bandSearch)}, 1000);
        setTimeout(this.newLogging, 1000);

        // console.log(this.state.bandSearch);
        // console.log(bandsFilter);
        // this.setState({bandSearch: event.target.value});
        console.log(this.state.bandSearch);
    }
    
    render() {
        let filteredRecords = this.props.record;
        // console.log(this.props);
        // let bandStateFilter = this.state.bandSearch;
        const recordList = this.props.records;
        if (this.state.bandSearch === 'All') {
            filteredRecords = recordList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        } else {
            filteredRecords = recordList.filter(item => item.artist === this.state.bandSearch)
        }
        
        // const filteredRecords = this.state.bandSearch === 'All' ? this.props.records : this.props.records.filter(item => item.artist === this.state.bandSearch);

        return (
            <div className={classes.Products}>
                <h3>Records</h3>
                <h4>Search:</h4>

                    <SearchInput className={classes.SearchInput} onChange={this.searchUpdated} placeholder='Price/Artist/Album'/>
                <ul>
                    {filteredRecords.map(record=> (
                        <Record 
                            key={record.ProductID}
                            albumName={record.Album}
                            albumCover={record.Cover_Art}
                            price={record.Price}
                            artist={record.Artist}
                            spotifyURI={record.Spotify_URI}
                        />
                    ))}
                </ul>
            </div>
        );
        
    }
    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
}

export default Products;