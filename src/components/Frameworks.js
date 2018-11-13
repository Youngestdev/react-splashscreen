import React, {Component} from 'react';
import firebaseClient from '../services/firebase';

function Framework(framework) {
  return (
    <div className="row">
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
    firebaseClient.setFrameworksListener(querySnapshot => {
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
        {loading && <p>No data returned</p>}
        {!loading && frameworks.map((framework) => (Framework(framework)))}
      </div>
    )
  }
}

export default Frameworks;
