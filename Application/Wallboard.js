import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import {
    Container, Left, Button, Header, H1, Text, Content, Icon,
    Card, CardItem, Thumbnail, Body, Right, H2
} from 'native-base';
import SideBar from './Sidebar';
import { AppRegistry, Image, StatusBar, StyleSheet, View, Dimensions } from "react-native";
import Icons from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Headers from './Headers';
import MenuButton from 'react-native-menu-button';
import { Actions } from 'react-native-router-flux';
const screenwidh = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const sum = screenheight + screenwidh;
class Wallboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectData: "",
            all: '',
            new: '',
            Setting: '',
            onhold: '',
            resolved: '',
            reopen: '',
            closed: '',
            cancel: '',
            junk: '',
            idnew: '',
            idSetting: '',
            idonhold: '',
            idresolved: '',
            idreopen: '',
            idclosed: '',
            idcancel: '',
            idjunk: ''
        }
        setTimeout(() => {
            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetWallBoardData?UserId=' + 241)
                .then((response) => response.json())
                .then((responseJson) => {
                    let result = responseJson.d;
                    var result_ = result.split('Split_');
                    console.log("Result_", result_);
                    var ar1 = JSON.parse(result_[0]);
                    console.log("ar1", ar1);
                    var ar2 = JSON.parse(result_[1]);
                    console.log("ar2", ar2);
                    var ar3 = JSON.parse(result_[2]);
                    console.log("ar2", ar3);
                    this.setState({
                        new: ar1[0].New,
                        Setting: ar1[0].InProgress,
                        onhold: ar1[0].OnHold,
                        resolved: ar1[0].Resolved,
                        reopen: ar1[0].ReOpen,
                        closed: ar1[0].Closed,
                        cancel: ar1[0].Cancel,
                        junk: ar1[0].Junk

                    })
                    console.log("state", this.state.new)
                })
                .catch((error) => {
                    console.error(error);
                });

        }, 500);
    }
    but(val) {
        console.log("val", val);
        let alldata = [];
        return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiSearchTickets?InitiatorId_=' + null + '&DepartmentId_=' + null +
            '&AssigneeId_=' + null + '&PriorityId_=' + null + '&CustomerTypeId_=' + null + '&CustomerId_=' + null +
            '&AddressId_=' + null + '&UnAssignedTicket_=' + false + '&Ticket_=' + "" + '&Title_=' + "" + '&StatusId_=' + val +
            '&IsResponseOverTickets=' + false + '&IsInternalChatOverTickets=' + false + '&TicketDateFrom=' + "" +
            '&TicketDateTo=' + "")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                let d = JSON.parse(responseJson.d);
                for (var i = 0; i < d.length; i++) {
                    console.log("result", d[i]);
                    alldata.push(d[i])
                    this.props.navigation.navigate("Setup", { data: alldata });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    _handleOnSelect(value) {
        this.setState({ selectData: value })
        console.log("Val", value);
        if (value === "Logout") {
            console.log("Logout id");
            console.log("Logout");
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
                            Wallboard
        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#BDBDBD', height: 210 }}>
                        <View style={{ flex: 0.5, height: 200, margin: 2 }}>
                            <Card  >
                                <CardItem>
                                    <Body >
                                        <Icon onPress={this.but.bind(this, 1)} name="md-paper" style={{ color: 'black', left: 30, fontSize: 100, margin: 10 }} />
                                    </Body>
                                </CardItem>
                                <CardItem style={{ backgroundColor: '#B71C1C' }}>
                                    <Body style={{ flex: 0.6, }}>

                                        <Text style={{ fontSize: sum / 48, color: 'white', paddingTop: 0 }}>
                                            New
                                            </Text>
                                    </Body>
                                    <Body style={{ flex: 0.4 }}>
                                        <Text style={{ fontSize: sum / 44, fontWeight: 'bold', color: 'white' }}>
                                            {this.state.new}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>

                        <View style={{ flex: 0.5, height: 200, margin: 2 }}>
                            <Card >
                                <CardItem>

                                    <Body>
                                        <Icon onPress={this.but.bind(this, 4)} name="md-settings" style={{ color: 'black', left: 30, fontSize: 100, margin: 10 }} />
                                    </Body>
                                </CardItem>

                                <CardItem style={{ backgroundColor: '#B71C1C' }}>
                                    <Body style={{ flex: 0.8, }}>
                                        <Text style={{ fontSize: sum / 48, color: 'white', paddingTop: 0 }}>
                                            In-Progress
                                            </Text>
                                    </Body>
                                    <Body style={{ flex: 0.2, }}>
                                        <Text style={{ fontSize: sum / 40, fontWeight: 'bold', color: 'white' }}>
                                            {this.state.Setting}
                                        </Text>

                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#BDBDBD', height: 210 }}>
                        <View style={{ flex: 0.5, height: 200, margin: 2 }}>
                            <Card >
                                <CardItem>
                                    <Body>
                                        <Button style={{ height: 120 }} transparent onPress={this.but.bind(this, 6)}>
                                            <Image style={{ width: 120, height: 100, margin: 10 }}
                                                source={require('../images/hold.png')} />
                                        </Button>
                                    </Body>
                                </CardItem>
                                <CardItem style={{ backgroundColor: '#B71C1C' }}>
                                    <Body style={{ flex: 0.8, }}>

                                        <Text style={{ fontSize: sum / 48, color: 'white', paddingTop: 0 }}>
                                            On-Hold
                                               </Text>
                                    </Body>
                                    <Body style={{ flex: 0.2, }}>
                                        <Text style={{ fontSize: sum / 40, fontWeight: 'bold', color: 'white' }}>
                                            {this.state.onhold}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={{ flex: 0.5, height: 200, margin: 2 }}>
                            <Card >
                                <CardItem>
                                    <Body>
                                        <Button style={{ height: 120 }} transparent onPress={this.but.bind(this, 5)}>
                                            <Image style={{ width: 120, height: 100, margin: 10 }}
                                                source={require('../images/resolved.png')}
                                            />
                                        </Button>
                                    </Body>
                                </CardItem>

                                <CardItem style={{ backgroundColor: '#B71C1C' }}>
                                    <Body style={{ flex: 0.8, }}>
                                        <Text style={{ fontSize: sum / 48, color: 'white', paddingTop: 0 }}>
                                            Resolved
                                               </Text>
                                    </Body>
                                    <Body style={{ flex: 0.2, }}>
                                        <Text style={{ fontSize: sum / 40, fontWeight: 'bold', color: 'white' }}>
                                            {this.state.resolved}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#BDBDBD', height: 210 }}>
                        <View style={{ flex: 0.5, height: 200, margin: 2 }}>
                            <Card >
                                <CardItem>
                                    <Body>
                                        <Icon onPress={this.but.bind(this, 7)} name="md-redo" style={{ color: 'black', left: 30, fontSize: 100, margin: 10 }} />
                                    </Body>
                                </CardItem>
                                <CardItem style={{ backgroundColor: '#B71C1C' }}>
                                    <Body style={{ flex: 0.8, }}>
                                        <Text style={{ fontSize: sum / 48, color: 'white', paddingTop: 0 }}>
                                            Re-Open
                                               </Text>
                                    </Body>
                                    <Body style={{ flex: 0.2, }}>
                                        <Text style={{ fontSize: sum / 40, fontWeight: 'bold', color: 'white' }}>
                                            {this.state.reopen}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={{ flex: 0.5, height: 200, margin: 2 }}>
                            <Card >
                                <CardItem>
                                    <Body>
                                        <Icon onPress={this.but.bind(this, 3)} name="md-close" style={{ color: 'black', left: 30, fontSize: 100, margin: 10 }} />
                                    </Body>
                                </CardItem>

                                <CardItem style={{ backgroundColor: '#B71C1C' }}>
                                    <Body style={{ flex: 0.8, }}>

                                        <Text style={{ fontSize: sum / 48, color: 'white', paddingTop: 0 }}>
                                            Closed
                                            </Text>
                                    </Body>
                                    <Body style={{ flex: 0.2, }}>
                                        <Text style={{ fontSize: sum / 40, fontWeight: 'bold', color: 'white' }}>
                                            {this.state.closed}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#BDBDBD', height: 210 }}>
                        <View style={{ flex: 0.5, height: 200, margin: 2 }}>
                            <Card >
                                <CardItem>
                                    <Body>
                                        <Icon onPress={this.but.bind(this, 2)} name="md-close-circle" style={{ color: 'black', left: 30, fontSize: 100, margin: 10 }} />
                                    </Body>
                                </CardItem>
                                <CardItem style={{ backgroundColor: '#B71C1C' }}>
                                    <Body style={{ flex: 0.8, }}>

                                        <Text style={{ fontSize: sum / 48, color: 'white', paddingTop: 0 }}>
                                            Cancel
                                            </Text>
                                    </Body>
                                    <Body style={{ flex: 0.2, }}>
                                        <Text style={{ fontSize: sum / 40, fontWeight: 'bold', color: 'white' }}>
                                            {this.state.cancel}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={{ flex: 0.5, height: 200, margin: 2 }}>
                            <Card >
                                <CardItem>

                                    <Body>
                                        <Icon onPress={this.but.bind(this, 8)} name="md-cut" style={{ color: 'black', left: 30, fontSize: 100, margin: 10 }} />
                                    </Body>
                                </CardItem>
                                <CardItem style={{ backgroundColor: '#B71C1C' }}>
                                    <Body style={{ flex: 0.8, }}>
                                        <Text style={{ fontSize: sum / 48, color: 'white', paddingTop: 0 }}>
                                            Junk
                                            </Text>
                                    </Body>
                                    <Body style={{ flex: 0.2, }}>
                                        <Text style={{ fontSize: sum / 40, fontWeight: 'bold', color: 'white' }}>
                                            {this.state.junk}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}
export default Wallboard;
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