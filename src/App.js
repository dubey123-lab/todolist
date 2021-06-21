import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <div className="main-div">

          <List />

        </div>
      </>
     );
  }
}
 
export default App ;