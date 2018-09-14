import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from  './App.css';
import Layout from './hoc/Layout/Layout';
import Products from './containers/Products/Products';
import ContactData from './containers/ContactData/ContactData';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={ContactData}/>
            <Route path="/" component={App}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
