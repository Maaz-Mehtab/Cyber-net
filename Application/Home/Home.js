import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, H2, Text, Content, Icon, Row, Spinner } from 'native-base';
import SideBar from '../Sidebar';
import PieDemo from '../test';
import { Platform, StyleSheet, View, ActivityIndicator, Image, Dimensions } from 'react-native';
import Headers from '../Headers';
import MenuButton from 'react-native-menu-button';
import Login from '../Login';
import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';
const screenwidh = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const sum = screenheight + screenwidh;
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: 2,
      selectData: ""
    }
    this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
  }
  abc() {
  }
  getMoviesFromApiAsync() {

    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetWallBoardData?UserId=' + 241)
      .then((response) => response.json())
      .then((responseJson) => {
        let result = responseJson.d;
        console.log("result", result);
        var result_ = result.split('Split_');
        console.log("Result_", result_);
        var ar1 = JSON.parse(result_[0]);
        console.log("ar1", ar1);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  logout() {
    console.log("Logout");
  }
  _handleOnSelect(value) {
    this.setState({ selectData: value })
    console.log("Val", value);
    if (value === "Logout") {
      Actions.Login();
    }
    if (value === "About") {
      console.log("About page");
    }
  } render() {
    menuGroup = [
      { key: "1", value: "Logout", text: "Logout" },
      { key: "2", value: "About", text: "About" },
    ]
    return (
      <Container>
        {(this.state.loading === 1) ?
          <Content>
            <View style={{ backgroundColor: '#BDBDBD', height: 1000 }}>
              <Spinner style={{ top: 400 }} color="red" />
              <Content style={{ top: 160, left: 60 }}>
                <Image
                  style={{ width: 260, height: 85, margin: 10 }}
                  source={require('../../images/cybernet1.png')}
                />
              </Content>
            </View>
          </Content>
          :
          <Content>
            <View style={{ flex: 1, backgroundColor: '#212121', height: screenheight / 10, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 0.2, height: screenheight / 10 }}>
                <Button transparent style={{ width: 60, height: screenheight / 10 }} onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon style={{ color: 'white', fontSize: sum / 30 }} name="md-menu" />
                </Button>
              </View>
              <View style={{ flex: 0.7, height: screenheight / 10, alignItems: 'center' }}>
                <Text style={{ paddingTop: screenheight / 35, paddingRight: 0, fontSize: sum / 45, color: 'white' }}>
                  CYBER NET
            </Text>
              </View>
              <View style={{ flex: 0.2, height: screenheight / 10 }}>
                <MenuButton
                  buttonStyle={[styles.rightButton]}
                  menuGroup={menuGroup}
                  onSelect={this._handleOnSelect.bind(this)}
                  optionSelectedStyle={{ backgroundColor: "red" }}
                />
              </View>
            </View>
            <PieDemo />
          </Content>
        }
      </Container>
    )
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },

  top: {
    backgroundColor: 'black',
    paddingTop: 20,
    top: 0,

    right: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828287',
    position: 'relative',
    flex: 0.2,
    height: 60
  },
  text: {
    marginTop: 20,
    color: 'white',

  },
  rightButton: {
    width: 100,
    height: 60,
    position: 'absolute',
    bottom: 0,
    right: 2,
    padding: 0,
    top: screenheight / 45,
  },
})