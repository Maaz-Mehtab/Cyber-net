import React, { Component } from 'react';
import { Root } from "native-base";
import {
  AppRegistry,
} from 'react-native';
// import ScarletScreen from '../../components/ScarletScreen';
// import GrayScreen from '../../components/GrayScreen';

import Login from './Application/Login';
import App from './App';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, InputGroup, Input, List, Button, Text, View } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';


const Routers = () => {
  return (
    <Router>
      <Scene key="root">

       <Scene key="Login"
          component={Login}
        //   title="App"
          hideNavBar={true}
        //   initial
        />
        <Scene key="App"
          component={App}
        //   title="App"
          hideNavBar={true}
        //   onExit={() => console.log('your modal pop up logic')}
        //   initial
        />
       
        
      </Scene>
    </Router>
  );
}



// export default Routers;

export default () =>
  <Root>
    <Routers />
  </Root>;