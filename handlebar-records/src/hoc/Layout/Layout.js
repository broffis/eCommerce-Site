import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import CenterMode from '../../containers/Carousel/Carousel';
import About from '../../components/About/About';
import Products from '../../containers/Products/Products';
import ContactForm from '../../containers/ContactData/ContactData';

// const request = require('superagent');
// const nocache = require('superagent-no-cache');
// const prefix = require('superagent-prefix')('/static');

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 8889,
//     user: 'root',
//     password: 'root',
//     database: 'Handlebar Records'
// });

// let bands = connection.query('Select * from products', function(error, results, fields) {
//     if(error) throw error;
//     return results.body;
// });

// connection.end();


const apiURL = 'http://localhost:3000/products';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            bands: [
                {  
                    bandName: 'We Were Promised Jetpacks',
                    albumName: 'The More I Sleep the Less I Dream' ,
                    cover: 'finalimages/WWPJ_TMISTLID.jpg',
                    releaseYear: 2018,
                    recordLabel: 'Big Scary Monsters',
                    price: 25,
                    spotifyURI: 'https://open.spotify.com/embed/track/4Ht6bazzFyIBTdNfxwfZ4y'
                },
                {
                    bandName: 'We Were Promised Jetpacks',
                    albumName: 'These Four Walls',
                    cover: 'finalimages/WWPJ_FourWalls.jpg',
                    releaseYear: 2009,
                    recordLabel: 'Fat Cat',
                    price: 40,
                    spotifyURI: 'https://open.spotify.com/embed/track/6U9ugzM29qVCHj2z2AFXk3'
                },
                {
                    bandName: 'Bruce Springsteen',
                    albumName: 'Live 1975-85',
                    cover: 'finalimages/Springsteen_Live_75-85.jpg',
                    releaseYear: 1986,
                    recordLabel: 'Columbia',
                    price: 60,
                    spotifyURI: 'https://open.spotify.com/embed/track/4NlTkpLl3et1aXKP9H46y8'
                },
                {
                    bandName: 'Various Artists',
                    albumName: 'The Hamilton Mixtape',
                    cover: 'finalimages/Hamilton_Mixtape.jpg',
                    releaseYear: 2016,
                    recordLabel: 'Atlantic',
                    price: 35,
                    spotifyURI: 'https://open.spotify.com/embed/track/2KxJv4AduPGxzI5NH2HUoC'
                },
                {
                    bandName: 'My Chemical Romance',
                    albumName: 'The Black Parade',
                    cover: 'finalimages/MCR_BlackParade.jpg',
                    releaseYear: 2006,
                    recordLabel: 'Reprise',
                    price: 25,
                    spotifyURI: 'https://open.spotify.com/embed/track/5wQnmLuC1W7ATsArWACrgW'
                },
                {
                    bandName: 'Panic at the Disco',
                    albumName: 'Pretty Odd',
                    cover: 'finalimages/PatD_Pretty_Odd.jpg',
                    releaseYear: 2008,
                    recordLabel: 'Fueled by Ramen',
                    price: 15,
                    spotifyURI: 'https://open.spotify.com/embed/track/1S30kHvkkdMkcuCTGSgS41'
                },
                {
                    bandName: 'Linkin Park',
                    albumName: 'Meteora',
                    cover: 'finalimages/LP_Meteora.jpg',
                    releaseYear: 2003,
                    recordLabel: 'Warner Bros',
                    price: 35,
                    spotifyURI: 'https://open.spotify.com/embed/track/0kO3njY9N1Rxgv27Ha1lLh'
                },
                {
                    bandName: 'Mac Miller',
                    albumName: 'Blue Slide Park',
                    cover: 'finalimages/Mac_Miller_Blue_Slide_Park.jpg',
                    releaseYear: 2011,
                    recordLabel: 'Rostrum',
                    price: 20,
                    spotifyURI: 'https://open.spotify.com/embed/track/24OMJgeZvpSu92TbAe2WYh'
                },
                {
                    bandName: 'Mac Miller',
                    albumName: 'Watching Movies with the Sound Off',
                    cover: 'finalimages/Mac_Miller_WMWTSO.jpg',
                    releaseYear: 2013,
                    recordLabel: 'Rostrum',
                    price: 18,
                    spotifyURI: 'https://open.spotify.com/embed/track/7zZGW1vBWZLZjKWwt47y1i'
                },
                {
                    bandName: 'Bring Me the Horizon',
                    albumName: 'There Is a Hell...',
                    cover: 'finalimages/BMTH_There_Is_a_Hell.png',
                    releaseYear: 2010,
                    recordLabel: 'Epitaph',
                    price: 20,
                    spotifyURI: 'https://open.spotify.com/embed/track/1Jx2ZMYVcXM0CfqOysoC8R'
                },
                {
                    bandName: 'Action Bronson',
                    albumName: 'Mr. Wonderful',
                    cover: 'finalimages/AB_MrWonderful.jpg',
                    releaseYear: 2015,
                    recordLabel: 'Atlantic',
                    price: 22,
                    spotifyURI: 'https://open.spotify.com/embed/track/7gDwRzJhLs0fFHaGtMDJVM'
                },
                {
                    bandName: 'Twenty One Pilots',
                    albumName: 'Vessel',
                    cover: 'finalimages/TWP_Vessel.jpg',
                    releaseYear: 2013,
                    recordLabel: 'Fueled By Ramen',
                    price: 25,
                    spotifyURI: 'https://open.spotify.com/embed/track/5cbpoIu3YjoOwbBDGUEp3P'
                }
            ],
            subCarouselBkgrnd: 'finalimages/records-bkgrnd.jpg'
        }
    }

    componentDidMount() {
        fetch(apiURL)
            .then(response => response.json())
            .then((products) => {
                this.setState({products});
                // console.log(products);
                // console.log(this.state.products);
            });
    }

    render() {
        return (
            <Aux>
                <Toolbar   drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <div id="">
                    <CenterMode albumList={this.state.products}/>
                </div>
                <main id="About">
                    {/* {this.props.children} */}
                    <div className={classes.SubCarousel} >
                        <div className={classes.About} > 
                            <About />
                        </div>
                        <div className={classes.BandList} >
                            {/* <img src={'finalimages/records-bkgrnd.jpg'} />
                            <img src={this.state.subCarouselBkgrnd} /> */}

                            {/* <Bands bandList={this.state.bands}/> */}
                            {/* <iframe src="https://open.spotify.com/embed/track/4Ht6bazzFyIBTdNfxwfZ4y" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}

                            {/* <img src={this.state.bands[0].cover} /> */}
                        </div>
                    </div>
                    <div id="BandList">
                        <Products records={this.state.products}/>
                    </div>
                    <div id="Contact">
                        <ContactForm/>
                    </div>
                </main> 

            </Aux>
        );
    }
}

export default Layout;