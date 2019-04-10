import React, { Component } from 'react';
import Form from './form';
import Data from './data';
import {BrowserRouter , Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" component={Form} />
        <Route path="/data" component={Data} />
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
