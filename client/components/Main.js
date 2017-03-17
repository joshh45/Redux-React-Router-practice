import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Practice</Link>
        </h1>
        // react.clone returns a r element as starting point 
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});


export default Main;
