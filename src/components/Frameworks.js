import React, {Component} from 'react';
import firebaseClient from '../services/FireBase';
import {CircleSpinner} from 'react-spinners-kit';

function Framework(framework, id) {
  return (
    <div className="row" key={id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{framework.name}</h5>
          <hr className="my-4" />
          <p className="card-text">{framework.about}</p>
        </div>            
      </div>
    </div>
  )
}

class Frameworks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frameworks: [],
      loading: true
    };
  }

  componentDidMount() {
    firebaseClient.setBuildingsListener(querySnapshot => {
      const frameworks = [];
      querySnapshot.forEach(framework => {
        frameworks.push(framework.data());
      });
      this.setState({
        frameworks,
        loading: false
      });
    });
  }

  render() {
    const {loading, frameworks} = this.state;
    return (
      <div>
        {loading && <CircleSpinner color="" />}
        {!loading && frameworks.map((framework, id) => (Framework(framework, id)))}
      </div>
    )
  }
}

export default Frameworks;
