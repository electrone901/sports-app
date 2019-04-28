import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import SendMessage from './components/SendMessage';
import Signup from './components/signup/Signup';
import AddPost from './components/post/AddPost';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/send-message" component={SendMessage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/add-post" component={AddPost} />
        </div>
      </Router>
    );
  }
}

export default App;