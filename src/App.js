import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Signup from './components/signup/Signup';
import AddPost from './components/post/AddPost';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/add-post" component={AddPost} />
        </div>
      </Router>
    );
  }
}

export default App;