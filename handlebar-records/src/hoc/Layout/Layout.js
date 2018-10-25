import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import CenterMode from '../../containers/Carousel/Carousel';
import About from '../../components/About/About';
import Products from '../../containers/Products/Products';
import ContactForm from '../../containers/ContactData/ContactData';


const apiURL = 'http://localhost:3000/products';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            subCarouselBkgrnd: 'finalimages/records-bkgrnd.jpg'
        }
    }

    componentDidMount() {
        fetch(apiURL)
            .then(response => response.json())
            .then((products) => {
                this.setState({products});
            });
    }

 

    render() {
        return (
            <Aux>
                <Toolbar   drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <div id="">
                    <CenterMode albumList={this.state.products}/>
                </div>
                <main id="About" tabIndex="0">
                    <div className={classes.SubCarousel} >
                        <div className={classes.About} > 
                            <About />
                        </div>
                        <div className={classes.BandList} >
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