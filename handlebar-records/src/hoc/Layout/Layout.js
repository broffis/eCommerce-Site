import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/NavList/NavList';
import CenterMode from '../../containers/Carousel/Carousel';
import About from '../../components/About/About';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    render() {
        return (
            <Aux>
                <Toolbar />
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
                                <div>
                                <h3>Bands</h3>
                                <ul>
                                    <li>Band 1</li>
                                    <li>Band 2</li>
                                    <li>Band 3</li>
                                    <li>Band 4</li>
                                    <li>Band 5</li>
                                    <li>Band 6</li>
                                    <li>Band 7</li>
                                    <li>Band 8</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </Aux>
        );
    }
}

export default Layout;