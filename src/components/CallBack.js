import React, {Component} from 'react';
import { withRouter } from 'react-router';
import auth0Client from '../Auth'
import Axios from 'axios';
import firebaseClient from '../services/FireBase';

const tokenFactory = 'http://localhost:3001/firebase'

class Callback extends Component {
  async componentDidMount() {
    try {
      await auth0Client.loadSession();
      const token = await Axios.get(tokenFactory, {
        headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}`}
      });
      firebaseClient.setToken(token.data.firebaseToken)
    } catch (error) {
      console.log(error);
    }
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <p>Loading Profile...</p>
      </div>
    );
  }
}

export default withRouter(Callback);