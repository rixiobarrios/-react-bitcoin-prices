import React, { Component } from 'react';
import Home from '../Home/Home';
import './App.css';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null
    };
    this.setPrice = this.setPrice.bind(this);
  }

  setPrice(price) {
    this.setState({ price: price });
  }

  render() {
    return (
      <div>
        <nav>
          {/* Link - a component for setting the URL and providing navigation between different components in our app without triggering a page refresh. It takes a to property, which sets the URL to whatever path is defined within it. Link can also be used inside of any component that is connected to a Route. */}
          <Link to="/">
            <img
              src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
              alt=""
            />
            <h1>Bitcoin prices</h1>
          </Link>
        </nav>
        <main>
          {/* Route - a component that renders a specified component (using either render or component) based on the current url (path) we're at. path should probably match a <Link to=""> defined somewhere. */}
          <Route path="/" component={Home} />
        </main>
      </div>
    );
  }
}

export default App;
