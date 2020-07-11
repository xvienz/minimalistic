import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Home } from './Component/';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/home' component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
