import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Globalstyle} from "./style"
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <Globalstyle/>
                <Header/>
            </div>
        </Provider>
    );
  }
}

export default App;
