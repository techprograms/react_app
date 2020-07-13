import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import Main from "./components/MainComponent";

import { DISHES } from './shared/dishes';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

import { BrowserRouter } from 'react-router-dom';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Menu dishes={this.state.dishes} />
        <Footer />
      </div>
    );
  }
}
export default App