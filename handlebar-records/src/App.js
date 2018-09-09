import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Handlebar</h1>
          <h1>Records </h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Records Carosel</h2>
          <div> 
            <div>About Us</div>
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
        </main>
      </div>
    );
  }
}

export default App;
