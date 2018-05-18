import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, Text, Content, Icon, Card, CardItem, Body, H2, Right, Picker, Title, Form } from 'native-base';
import SideBar from './Sidebar';
import Icons from 'react-native-vector-icons';
import Row from 'react-native-row-component';
import MenuButton from 'react-native-menu-button';
import Edit from "./Edit";
import { Actions } from 'react-native-router-flux';
const screenwidh = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const sum = screenheight + screenwidh;
import {
  Platform,
  StyleSheet,
  View,
  Image,
  AsyncStorage, Dimensions
} from 'react-native';
class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectData: "",
      data: [],
      data2: '',
      btn: '',
      selected: '1',
    }
    //  console.log("State Navigation data",this.props.navigation.state.params);
    if (this.props.navigation.state.params != undefined) {
      // console.log("State Navigation maaz",this.props.navigation.state.params.data);
      //         console.log("Testing",this.props.navigation.state.params.data)
      setTimeout(() => {
        if (this.props.navigation.state.params.data != undefined) {
          this.setState({
            data: this.props.navigation.state.params.data
          })
        }
      }, 500);
    }
  }
  button() {
    alert("Hello");
  }

  onValueChange(value, val) {
    this.setState({
      selected: value
    });
  }

  edit(val) {
    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetTicketPrerequisite?MasterId=' + val.TicketMasterId)
      .then((response) => response.json())
      .then((responseJson) => {
        var b = JSON.parse(responseJson.d);
        console.log("ApigetTicketPrerequisite", b);
        return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetTicketCC?MasterId=' + val.TicketMasterId)
          .then((response) => response.json())
          .then((responseJson) => {
            var emailcc = JSON.parse(responseJson.d);
            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetTicketTo?MasterId=' + val.TicketMasterId)
              .then((response) => response.json())
              .then((responseJson) => {
                var emailto = JSON.parse(responseJson.d);
                return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetPOCDetails?clientDetailID=' + val.AccountId)
                  .then((response) => response.json())
                  .then((responseJson) => {
                    var PocDetail = JSON.parse(responseJson.d);
                    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetTicketMaster?MasterId=' + val.TicketMasterId)

                      .then((response) => response.json())
                      .then((responseJson) => {
                        let tr = JSON.parse(responseJson.d);
                        this.props.navigation.navigate("Edit", { val: val, pre: b, getid: tr, emailcc: emailcc, emailto: emailto, PocDetail: PocDetail });
                      })
                  })
              })
          })
          .catch((error) => {
            console.error(error);
          });


      })
      .catch((error) => {
        console.error(error);
      });
  }
  delet(val) {
    console.log("delet", val);
    console.log("Masterid", val.TicketMasterId);
  }
  _handleOnSelect(value) {
    this.setState({ selectData: value })
    console.log("Val", value);
    if (value === "Logout") {
      console.log("Logout id");
      console.log("Logout");
      AsyncStorage.removeItem("Users").then((value) => console.log("value remove"));
      AsyncStorage.clear().then((value) => console.log("value remove"));
      Actions.Login();
    }
    if (value === "About") {
      console.log("About page");
    }
  }
  render() {
    menuGroup = [
      { key: "1", value: "Logout", text: "Logout" },
      { key: "2", value: "About", text: "About" },

    ]
    return (

      <Container>
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
                // Style={{color:'white'}}
                menuGroup={menuGroup}
                onSelect={this._handleOnSelect.bind(this)}
                optionSelectedStyle={{ backgroundColor: "red" }}
              />
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '#B71C1C', alignItems: 'center', height: 50 }}>
            <Text style={{ color: 'white', fontSize: 20, paddingTop: 11 }}>
              Records
        </Text>
          </View>
          {(this.state.data === []) ?
            null :
            <View style={{ backgroundColor: '#BDBDBD' }}>
              {this.state.data.map((val, index) => {
                return (
                  <Container key={index} style={{ flex: 0, backgroundColor: '#BDBDBD', margin: 10, minHeight: 400, maxHeight: 500 }}>
                    <Card style={{ margin: 20 }}>
                      <CardItem>
                        <Body>
                          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <View style={{ width: '80%', backgroundColor: 'white' }}>
                              <Text style={{ color: 'black', fontSize: 20 }}>
                                Ticket
                </Text>
                            </View>
                            <View style={{ width: '15%', left: 0, backgroundColor: 'white' }}>
                              <Form>
                                <View style={{ width: 50, height: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
                                  <Picker
                                    mode="dropdown"
                                    style={{ width: 50, left: 0, backgroundColor: 'white' }}
                                    selectedValue={this.state.selected}
                                    onValueChange={(itemValue) => {
                                      this.setState({ selected: itemValue });
                                      console.log("selected", this.state.selected)
                                      if (this.state.selected == 1) {
                                        console.log("Edit");
                                        this.edit(val);
                                      }
                                      else if (this.state.selected == 2) {
                                        console.log("delet");
                                        this.delet(val);
                                      }
                                    }}
                                  >
                                    <Picker.Item label="Edit Rerord" value="2" />
                                    <Picker.Item label="Delete Record" value="1" />
                                  </Picker>
                                  <Image source={require('../images/more.png')} style={{ width: '60%', height: '40%', position: 'absolute', right: 0, resizeMode: 'contain' }} />
                                </View>
                              </Form>
                            </View>
                          </View>
                          <Text style={{ color: 'red', fontSize: 18, marginTop: 0 }}>
                            {val.TicketCode}
                          </Text>

                          <Text style={{ color: '#424242', fontSize: 16, marginTop: 8 }}>
                            Priotity : {val.TicketPriority}
                          </Text>

                          <Text style={{ color: '#424242', fontSize: 16, marginTop: 8 }}>
                            Request Type : {val.RequestType}
                          </Text>

                          <Text style={{ color: '#424242', fontSize: 16, marginTop: 8 }}>
                            Created on : {val.TicketCreationDate1}
                          </Text>
                          <Text style={{ color: 'black', fontSize: 20, marginTop: 6 }}>
                            Initiaor
                           </Text>

                          <Text style={{ color: '#424242', fontSize: 16, marginTop: 6 }}>
                            {val.TicketInitiatorName}
                          </Text>

                          <Text style={{ color: 'black', fontSize: 20, marginTop: 6 }}>
                            Product
                          </Text>

                          <Text style={{ color: '#424242', fontSize: 16, marginTop: 6 }}>
                            {val.Product}
                          </Text>

                          <Text style={{ color: 'black', fontSize: 20, marginTop: 6 }}>
                            Customer
                         </Text>

                          <Text style={{ color: '#424242', fontSize: 16, marginTop: 6 }}>
                            {val.Customer}
                          </Text>

                          <Text style={{ color: 'black', fontSize: 20, marginTop: 6 }}>
                            Address
                          </Text>

                          <Text style={{ color: '#424242', fontSize: 16, marginTop: 6 }}>
                            {val.Address}
                          </Text>
                          <Text style={{ color: 'black', fontSize: 20, marginTop: 6 }}>
                            Status
                          </Text>

                          <Text style={{ color: '#424242', fontSize: 16, marginTop: 6 }}>
                            {val.TicketStatus}
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Container>
                )
              })}
            </View>
          }

        </Content>
      </Container>
    )
  }
}
export default Setup;
const styles = StyleSheet.create({
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
    top: 12
  },
})