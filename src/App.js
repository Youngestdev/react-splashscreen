import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import CallBack from './components/CallBack';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container-fluid">
          <Route path="/" exact component={Welcome} />
          <Route path="/callback" exact component={CallBack} />
        </div>
      </Fragment>
    );
  }
}

export default App;