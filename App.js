import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Home from './Application/Home';
// import Login from './Application/Login';
// import PieDemo from './Application/test';
import store from './store';
import Ticket from './Application/Tickets';
import { Provider } from 'react-redux';
import Headers from './Application/Headers';
// import Filing from './Application/File';
// import  firebase  from 'firebase';
// Initialize Firebase
class App extends Component {
    render() {
      return (
        <Provider store={store}>
          {/* <Filing /> */}
          <Home />  
          {/* <Ticket/> */}
          {/* <Headers/> */}
        </Provider>
      );
    }
  }
export default App; 