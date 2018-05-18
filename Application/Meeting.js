import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, Text, Content, Icon, Card, CardItem, Body, H2, Form, Label, Input, Item } from 'native-base';
import SideBar from './Sidebar';
import { AppRegistry, Image, StatusBar, StyleSheet, View, AsyncStorage, Dimensions } from "react-native";
import MenuButton from 'react-native-menu-button';
import { Actions } from 'react-native-router-flux';
const screenwidh = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const sum = screenheight + screenwidh;
class Meeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectData: "",
            Meetingdata: '',
            TicketNo: '',
            MeetingAgenda: ''
        }

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
                                menuGroup={menuGroup}
                                onSelect={this._handleOnSelect.bind(this)}
                                optionSelectedStyle={{ backgroundColor: "red" }}
                            />
                        </View>
                    </View>
                    <Container style={{ flex: 1, height: 50, backgroundColor: '#B71C1C', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, paddingTop: 11 }}>My Meetings</Text>
                    </Container>
                    <Form>
                        <Item stackedLabel>
                            <Label>Meeting Date</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel >
                            <Label>Ticket No</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Meeting Agenda</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button block style={{ marginTop: 30, margin: 10, backgroundColor: '#212121' }} >
                        <Text style={{ color: 'white' }}>SEARCH</Text></Button>
                </Content>
            </Container>
        )
    }
}
export default Meeting;
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