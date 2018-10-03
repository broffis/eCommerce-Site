import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from  './App.css';
import Layout from './hoc/Layout/Layout';
import Products from './containers/Products/Products';
import ContactData from './containers/ContactData/ContactData';
import Carousel from './containers/Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/shop" component={Products}/>
            <Route path="/contact" component={ContactData}/>
            <Route path="/" component={Carousel}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
