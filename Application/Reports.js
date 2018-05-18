import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, Text, Content, Icon, Card, CardItem, Body, H2, Form, Label, Input, Item } from 'native-base';
import SideBar from './Sidebar';
import { StyleSheet, Alert, View, Picker, Dimensions } from 'react-native';
const screenwidh = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const sum = screenheight + screenwidh;
class Report extends Component {

    constructor(props) {
        super(props);
    }
    render() {
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
                            /></View>
                    </View>
                    <Container style={{ width: 600, height: 50, backgroundColor: '#B71C1C' }}>
                        <Text style={{ color: 'white', fontSize: 24, paddingTop: 5, left: 155 }}>Reports</Text>
                    </Container>
                </Content>
            </Container>
        )
    }
}
export default Report;
