import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import CenterMode from '../../containers/Carousel/Carousel';
import About from '../../components/About/About';
import Products from '../../containers/Products/Products';
import Bands from '../../components/Bands/BandList/BandList';
import ContactForm from '../../containers/ContactData/ContactData';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        bands: [
            {  
                bandName: 'We Were Promised Jetpacks',
                albumName: 'The More I Sleep the Less I Dream' ,
                cover: '',
                releaseYear: 2018,
                recordLabel: 'Big Scary Monsters',
                price: 25
            },
            {
                bandName: 'We Were Promised Jetpacks',
                albumName: 'These Four Walls',
                cover: '',
                releaseYear: 2009,
                recordLabel: 'Fat Cat',
                price: 40
                
            },
            {
                bandName: 'Bruce Springsteen and the E Street Band',
                albumName: 'Live 1975-85',
                cover: '',
                releaseYear: 1986,
                recordLabel: 'Columbia',
                price: 60
            },
            {
                bandName: 'Various Artists',
                albumName: 'The Hamilton Mixtape',
                cover: '',
                releaseYear: 2016,
                recordLabel: 'Atlantic',
                price: 35
            },
            {
                bandName: 'My Chemical Romance',
                albumName: 'Welcome to the Black Parade',
                cover: '',
                releaseYear: 2006,
                recordLabel: 'Reprise',
                price: 25
            },
            {
                bandName: 'Panic at the Disco',
                albumName: 'Pretty Odd',
                cover: '',
                releaseYear: 2008,
                recordLabel: 'Fueled by Ramen',
                price: 15
            },
            {
                bandName: 'Linkin Park',
                albumName: 'Meteora',
                cover: '',
                releaseYear: 2003,
                recordLabel: 'Warner Bros',
                price: 35
            },
            {
                bandName: 'Mac Miller',
                albumName: 'Blue Slide Park',
                cover: '',
                releaseYear: 2011,
                recordLabel: 'Rostrum',
                price: 20
            },
            {
                bandName: 'Mac Miller',
                albumName: 'Watching Moview with the Sound Off',
                cover: '',
                releaseYear: 2013,
                recordLabel: 'Rostrum',
                price: 18
            },
            {
                bandName: 'Bring Me the Horizon',
                albumName: 'There Is a Hell, Believe Me I\'ve Seen It. There Is a Heaven, Let\'s Keep It a Secret',
                cover: '',
                releaseYear: 2010,
                recordLabel: 'Epitaph',
                price: 20
            },
            {
                bandName: 'Action Bronson',
                albumName: 'Mr. Wonderful',
                cover: '',
                releaseYear: 2015,
                recordLabel: 'Atlantic',
                price: 22
            },
            {
                bandName: 'Twenty One Pilots',
                albumName: 'Vessel',
                cover: '',
                releaseYear: 2013,
                recordLabel: 'Fueled By Ramen',
                price: 25
            }
        ],
        showSideDrawer: false
    }

    sideDraweClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar   drawerToggleClicked={this.sideDrawerToggleHandler}/>
                {/* <CenterMode /> */}
                <main>
                    <div>
                        <h2>Records Carosel</h2>
                    </div>
                    <div className={classes.SubCarousel}>
                        <div className={classes.About}> 
                            <About />
                        </div>
                        <div className={classes.BandList}>
                            <Bands bandList={this.state.bands}/>
                        </div>
                    </div>
                    <Products records={this.state.bands}/>
                    <div>
                        <ContactForm />
                    </div>
                </main>
            </Aux>
        );
    }
}

export default Layout;