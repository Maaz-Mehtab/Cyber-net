import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Root } from "native-base";
import { Container, Left, Button, Header, Text, Content, Icon, Spinner, Card, CardItem, Body, H2, Form, Label, Input, Item, Toast } from 'native-base';
import { AppRegistry, Image, StatusBar, StyleSheet, View, Dimensions } from "react-native";
import { NavigationActions } from 'react-navigation';
import Home from './Home/Home'
import { Actions } from 'react-native-router-flux';
const screenwidh = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const sum = screenheight + screenwidh;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'uzaifa@gmail.com',
            password: '123',
            error: '',
            loading: 1,
            showToast: false
        }
        console.ignoredYellowBox = ['Warning:'];
        setTimeout(() => {
            this.setState({
                loading: 2
            })
        }, 3000);
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    login() {
        console.log("run login")
        let ob = {
            email: this.state.email,
            password: this.state.password,
            ip: "::1",
        }
        console.log("ob", ob);
        return fetch('http://192.168.61.33:5001//wcf/TicketService.svc/ApiLogin?LoginId=' + ob.email + '&password=' + ob.password +
            '&userip=' + ob.ip)
            .then((response) => response.json())
            .then((responseJson) => {
                let result = responseJson.d;
                console.log("result", result);
                if (result != 0) {
                    const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'App' })],
                    });
                    this.props.navigation.dispatch(resetAction);
                }
                else {
                    this.setState({
                        error: 'Email And Password incorrect'
                    })
                }
            })
            .catch((error) => {
                this.setState({
                    error: error
                })
                console.error(error);
            });

    }
    render() {
        return (
            <Container>
                {(this.state.loading === 1) ?
                    <Content>
                        <View style={{ flex: 1, height: screenheight, backgroundColor: '#BDBDBD', justifyContent: 'center', flexDirection: 'column' }}>
                            <View style={{ width: screenwidh, alignItems: 'center' }}>
                                <Image
                                    style={{ width: 260, height: 85, margin: 10 }}
                                    source={require('../images/cybernet1.png')} />
                                <Spinner style={{ top: 10 }} color="red" />
                            </View>
                        </View>
                    </Content>
                    :
                    <Content>
                        <View style={{ flex: 1, backgroundColor: '#212121', height: screenheight / 10, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 0.2, height: screenheight / 10 }}>
                            </View>
                            <View style={{ flex: 1, height: screenheight / 10, alignItems: 'center' }}>
                                <Text style={{ paddingTop: screenheight / 35, paddingRight: 0, fontSize: sum / 40, color: 'white' }}>
                                    CYBER NET
            </Text>
                            </View>
                            <View style={{ flex: 0.2, height: screenheight / 10 }}>
                            </View>
                        </View>
                        <View style={{ flex: 1, height: screenheight / 12, backgroundColor: '#B71C1C', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: sum / 45, paddingTop: screenheight / 100 }}>Login</Text>
                        </View>
                        <View style={{
                            top: screenheight / 15,
                            margin: 5,
                            flex: 1,
                            alignItems: 'center'
                        }}>
                            <Image
                                style={{ width: screenwidh / 1.3, height: screenheight / 6.5, margin: 10 }}
                                source={require('../images/cybernet1.png')}
                            />
                        </View>
                        <View style={screenheight > 550 ? {
                            height: screenheight / 2.6, marginTop: screenheight / 15, flex: 1, margin: 10,
                            backgroundColor: '#B71C1C'
                        } :
                            {
                                height: screenheight / 2.3, marginTop: screenheight / 15, flex: 1, margin: 10,
                                backgroundColor: '#B71C1C'
                            }
                        }>
                            <Form>
                                <Item style={{ marginTop: screenheight / 30, marginRight: 10 }} stackLabel>
                                    <Label style={{ color: 'white' }}>Email :</Label>
                                    <Input style={{ color: 'white' }} onChangeText={(e) => this.setState({ email: e, error: '' })} />
                                </Item>
                                <Item style={{ marginTop: screenheight / 30, marginRight: 10 }} stackLabel>
                                    <Label style={{ color: 'white' }}>password :</Label>
                                    <Input style={{ color: 'white' }} onChangeText={(e) => this.setState({ password: e, error: '' })} />
                                </Item>
                            </Form>
                            <Button onPress={this.login.bind(this)} block style={{ borderRadius: 10, marginTop: screenheight / 22, margin: 5, backgroundColor: '#212121' }}>
                                <Text style={{ fontSize: sum / 45, paddingTop: 5 }}>Login</Text>
                            </Button>
                        </View>
                        {(this.state.error !== '') ?
                            Toast.show({
                                zindex: 1,
                                text: "Wrong Email & Password!",
                                buttonText: "Okay",
                                duration: 3000
                            })
                            :
                            null
                        }</Content>
                }
            </Container>
        )
    }
}
export default Login;
