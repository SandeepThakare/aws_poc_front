import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Content from '../layout/content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
            <div>
                <Sidebar/>
                <Content />
            </div>
        </Router>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;