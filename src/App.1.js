import React, { Component } from 'react';
import './App.css';

import Dashboard from './Dashboard/Dashboard';
import Column from './Dashboard/Column';


class App extends Component {
  state = {
    showColumn: false,
  }

  toggleHandler = () => {
    const doesShow = this.state.showColumn;
    this.setState({ showColumn: !doesShow })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleHandler}>Toggle</button>
        {
          (this.state.showColumn) ? <Dashboard /> : <Column />
        }
      </div>

    );
  }
}

export default App;
