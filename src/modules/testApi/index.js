
// @flow

import * as React from 'react';

class TestApi extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: {}
    }
  }

  async componentDidMount(){
    const data = await fetch('http://ip-api.com/json/24.48.0.1');
    this.setState({data: await data.json()})
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <ul>
            <li>
              <p>city: </p> { data.city && data.city } -
            </li>
          </ul>
        </div>
      </React.Fragment>

    );
  }
};

export default TestApi;
