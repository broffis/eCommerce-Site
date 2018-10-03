import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import CenterMode from '../../containers/Carousel/Carousel';
import About from '../../components/About/About';
import Products from '../../containers/Products/Products';
// import Bands from '../../components/Bands/BandList/BandList';
import ContactForm from '../../containers/ContactData/ContactData';


var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url('finalimages/record-bkgrnd.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
    // backgroundColor: "hotpink"
};

class Layout extends Component {
    state = {
        showSideDrawer: false,
        bands: [
            {  
                bandName: 'We Were Promised Jetpacks',
                albumName: 'The More I Sleep the Less I Dream' ,
                cover: 'finalimages/WWPJ_TMISTLID.jpg',
                releaseYear: 2018,
                recordLabel: 'Big Scary Monsters',
                price: 25
            },
            {
                bandName: 'We Were Promised Jetpacks',
                albumName: 'These Four Walls',
                cover: 'finalimages/WWPJ_FourWalls.jpg',
                releaseYear: 2009,
                recordLabel: 'Fat Cat',
                price: 40
                
            },
            {
                bandName: 'Bruce Springsteen and the E Street Band',
                albumName: 'Live 1975-85',
                cover: 'finalimages/Springsteen_Live_75-85.jpg',
                releaseYear: 1986,
                recordLabel: 'Columbia',
                price: 60
            },
            {
                bandName: 'Various Artists',
                albumName: 'The Hamilton Mixtape',
                cover: 'finalimages/Hamilton_Mixtape.jpg',
                releaseYear: 2016,
                recordLabel: 'Atlantic',
                price: 35
            },
            {
                bandName: 'My Chemical Romance',
                albumName: 'The Black Parade',
                cover: 'finalimages/MCR_BlackParade.jpg',
                releaseYear: 2006,
                recordLabel: 'Reprise',
                price: 25
            },
            {
                bandName: 'Panic at the Disco',
                albumName: 'Pretty Odd',
                cover: 'finalimages/PatD_Pretty_Odd.jpg',
                releaseYear: 2008,
                recordLabel: 'Fueled by Ramen',
                price: 15
            },
            {
                bandName: 'Linkin Park',
                albumName: 'Meteora',
                cover: 'finalimages/LP_Meteora.jpg',
                releaseYear: 2003,
                recordLabel: 'Warner Bros',
                price: 35
            },
            {
                bandName: 'Mac Miller',
                albumName: 'Blue Slide Park',
                cover: 'finalimages/Mac_Miller_Blue_Slide_Park.jpg',
                releaseYear: 2011,
                recordLabel: 'Rostrum',
                price: 20
            },
            {
                bandName: 'Mac Miller',
                albumName: 'Watching Movies with the Sound Off',
                cover: 'finalimages/Mac_Miller_WMWTSO.jpg',
                releaseYear: 2013,
                recordLabel: 'Rostrum',
                price: 18
            },
            {
                bandName: 'Bring Me the Horizon',
                albumName: 'There Is a Hell...',
                cover: 'finalimages/BMTH_There_Is_a_Hell.png', 
                releaseYear: 2010,
                recordLabel: 'Epitaph',
                price: 20
            },
            {
                bandName: 'Action Bronson',
                albumName: 'Mr. Wonderful',
                cover: 'finalimages/AB_MrWonderful.jpg',
                releaseYear: 2015,
                recordLabel: 'Atlantic',
                price: 22
            },
            {
                bandName: 'Twenty One Pilots',
                albumName: 'Vessel',
                cover: 'finalimages/TWP_Vessel.jpg',
                releaseYear: 2013,
                recordLabel: 'Fueled By Ramen',
                price: 25
            }
        ],
        subCarouselBkgrnd: 'finalimages/records-bkgrnd.jpg'
    }

    sideDraweClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    // removeDuplicateBands = (arr) => {
    //     let filteredBands = [];
    //     for(let i = 0; i < arr.length; i++) {
    //         if(filteredBands.indexOf([i].bandName)===-1) {
    //             filteredBands.push(arr[i].bandName);
    //         }
    //     }
    //     return filteredBands
    // }

    // console.log(filteredBands);

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
    // }

    render() {
        return (
            <Aux>
                <Toolbar   drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <CenterMode albumList={this.state.bands}/>
                <main>
                    {/* {this.props.children} */}
                    <div className={classes.SubCarousel} style={sectionStyle}>
                        <div className={classes.About}> 
                            <About />
                        </div>
                        <div className={classes.BandList}>
                            <img src={'finalimages/records-bkgrnd.jpg'} />
                            <img src={this.state.subCarouselBkgrnd} />

                            {/* <Bands bandList={this.state.bands}/> */}


                            {/* <img src={this.state.bands[0].cover} /> */}
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