import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
        <div className="cotainer-fluid">
          <p> header here .... </p>
          {this.props.children}
        </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;

