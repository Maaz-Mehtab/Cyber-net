import React, { Component } from "react";
import Home from "./Home";
import Wallboard from "../Wallboard";
import Setup from "../Setup";
import Meeting from '../Meeting';
import Ticket from '../Tickets';
import Report from '../Reports';
import InitiateTicket from '../InitiateTicket';
import Pocdetails from '../Pocdetails';
import Edit from '../Edit';
import SideBar from "../Sidebar";
import { DrawerNavigator } from "react-navigation";
import Login from '../Login';
import Headers from '../Headers';
import { Platform, StyleSheet,View,ActivityIndicator,Image} from 'react-native';
import { Stack } from "react-native-router-flux";
const HomeScreenRouter = DrawerNavigator(
{
 Home: { screen: Home },
Wallboard: { screen: Wallboard },
    Setup: { screen: Setup },
    Meeting: { screen: Meeting },
    Ticket: { screen: Ticket },
    Report: { screen: Report },
    InitiateTicket: { screen: InitiateTicket },
    Pocdetails: { screen: Pocdetails },
    Edit: { screen: Edit },
},
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;