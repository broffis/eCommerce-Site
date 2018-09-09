import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from  './App.css';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header>
          <div className={classes.Appheader}>
            <h1 className={classes.Header_ln1}>Handlebar</h1>
            <h1 className={classes.Header_ln2}>Records</h1>
          </div>
        </header>
        <Layout />
      </div>
    );
  }
}

export default App;
