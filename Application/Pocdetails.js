import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, Text, Content, Icon, Card, CardItem, Body, H2, Form, Label, Input, Item, Toast } from 'native-base';
import SideBar from './Sidebar';
import { View, ScrollView, StyleSheet, CameraRoll, Image } from 'react-native';
import InitiateTicket from './InitiateTicket';
import Home from './Home/Home';
class Pocdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            Title: this.props.navigation.state.params.Title,
            initialfinding: '',
            emailto: '',
            emailcc: '',
            data: [],
            photos: [],
            TicketMasterStrings: '',
            GetallPreRequisite: '',
            PocdetailStrings: '',
            ticket: 0,
            filepath: '',
            saved: 0
        }
        // console.log("State Navigation TicketMasterStrings", this.props.navigation.state.params.TicketMasterStrings);
        // console.log("State Navigation GetallPreRequisite", this.props.navigation.state.params.GetallPreRequisite);
        // console.log("State Navigation PocdetailStrings", this.props.navigation.state.params.PocdetailStrings);
        // console.log("State Navigation Title", this.props.navigation.state.params.Title);
        setTimeout(() => {
            this.setState({
                TicketMasterStrings: this.props.navigation.state.params.TicketMasterStrings,
                GetallPreRequisite: this.props.navigation.state.params.GetallPreRequisite,
                PocdetailStrings: this.props.navigation.state.params.PocdetailStrings,
                Title: this.props.navigation.state.params.Title,

            })
        }, 500);

        setTimeout(() => {
            console.log("TicketMasterStrings", this.state.TicketMasterStrings);
            console.log("GetallPreRequisite", this.state.GetallPreRequisite);
            console.log("PocdetailStrings", this.state.PocdetailStrings);
        }, 1000);
    }

    Floatingbutton() {
        alert("Button");
    }

    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'All',
        }).then(r => {
            this.setState({ photos: r.edges });
            console.log('photo', r.edges);
            console.log('photo'.this.state.photos);
        }).catch((err) => {
            console.log("err", err);
        });
    };

    Save() {
        console.log("initialfinding", this.state.initialfinding)
        console.log("emailto", this.state.emailto)
        if (this.state.initialfinding === '') {
            alert("Please Enter Initial Finding")
        }
        else if (this.state.emailto === '') {
            alert("Please Enter emailto")
        }
        else {
            let ob = {
                title: this.state.title,
                initialfinding: this.state.initialfinding,
                emailto: this.state.emailto,
                emailcc: this.state.emailcc
            }
            let tic = {
                ClientDetailId: this.state.TicketMasterStrings.ClientDetailId,
                ProductId: this.state.TicketMasterStrings.ProductId,
                InitiatorId: this.state.TicketMasterStrings.InitiatorId,
                AssigneeId: this.state.TicketMasterStrings.AssignId,
                DepartmentId: this.state.TicketMasterStrings.DepartmentId,
                PriorityId: this.state.TicketMasterStrings.PriorityId,
                StatusId: 1,
                RequestModeId: "3",
                RequestTypeId: this.state.TicketMasterStrings.RequestTypeId,
                IsAssigned: false,
                Tittle: this.state.TicketMasterStrings.Title,
                Description: this.state.initialfinding,
                CategoryId: this.state.TicketMasterStrings.CategoryId,
                LevelId: this.state.TicketMasterStrings.levelId,
            }
            console.log("tic", tic);
            let strr = JSON.stringify(tic);
            console.log("Strr", strr);
            this.state.TicketMasterStrings.Title = this.state.title
            this.state.TicketMasterStrings.Description = this.state.initialfinding
            let str = JSON.stringify(this.state.TicketMasterStrings);
            console.log("TicketMasterId", this.state.ticket);
            console.log("TicketMaster", strr);
            console.log("Ticket_EmailTo", this.state.emailto);
            console.log("Ticket_EmailCC", this.state.emailcc);
            console.log("POC", this.state.PocdetailStrings);
            console.log("FilePath", this.state.filepath);
            console.log("Prerequisite", this.state.GetallPreRequisite);
            console.log("api Fetch", 'http://192.168.61.33:5001/wcf/TicketService.svc/ApiSaveTicket?TicketMasterId=' + this.state.ticket + '&TicketMaster=' + strr +
                '&Ticket_EmailTo=' + this.state.emailto + '&Ticket_EmailCC=' + this.state.emailcc + '&FilePath=' + this.state.filepath + '&POC=' + this.state.PocdetailStrings +
                '&Prerequisite=' + this.state.GetallPreRequisite);
            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiSaveTicket?TicketMasterId=' + this.state.ticket + '&TicketMaster=' + strr +
                '&Ticket_EmailTo=' + this.state.emailto + '&Ticket_EmailCC=' + this.state.emailcc + '&FilePath=' + this.state.filepath + '&POC=' + this.state.PocdetailStrings +
                '&Prerequisite=' + this.state.GetallPreRequisite)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("responseJson", responseJson);
                    let result = responseJson.d
                    console.log("result", result);
                    if (result != '' || !responseJson.ExceptionDetail) {
                        this.setState({
                            saved: 1
                        })
                        setTimeout(() => {
                            this.props.navigation.navigate("Home");
                            this.setState({
                                saved: 0
                            })
                        }, 3000);
                    }
                }).catch((error) => {
                    console.error("error", error);
                });
        }
    }
    Floatingbutton() {
        this.props.navigation.navigate("InitiateTicket");
    }
    render() {
        console.log("Title", this.state.Title);
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1, backgroundColor: '#212121', height: 60, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 0.2, height: 60 }}>
                            <Button transparent style={{ width: 60, height: 60 }} onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                <Icon style={{ color: 'white' }} name="md-menu" />
                            </Button>
                        </View>
                        <View style={{ flex: 0.8, height: 60, alignItems: 'center' }}>
                            <Text style={{ paddingTop: 15, paddingRight: 10, fontSize: 20, color: 'white' }}> CYBER NET</Text>
                        </View>
                    </View>

                    <Container style={{ width: 600, height: 50, backgroundColor: '#B71C1C' }}>
                        <Text style={{ color: 'white', fontSize: 24, paddingTop: 5, left: 155 }}>POC Details</Text>
                    </Container>

                    <Container style={{ height: 600 }}>
                        <Form>
                            <Item stackedLabel style={{ height: 80 }}>
                                <Label>Title</Label>
                                {(this.state.Title === '')
                                    ?
                                    <Input onChangeText={(e) => this.setState({ title: e })} />
                                    :
                                    <Input onChangeText={(e) => {
                                        setTimeout(() => {
                                            this.setState({ title: this.props.navigation.state.params.Title })
                                        }, 500);
                                    }}
                                        placeholder={this.props.navigation.state.params.Title}
                                    />
                                }
                            </Item>
                            <Item stackedLabel style={{ height: 80 }}>
                                <Label>Initial Finding</Label>
                                <Input onChangeText={(e) => this.setState({ initialfinding: e })} />
                            </Item>
                            <View style={{ height: 70, marginBottom: 20 }}>
                                <Item stackedLabel style={{ height: 120, marginBottom: 5 }}>
                                    <Label>Email To
                                <Text style={{ color: 'red' }}>
                                            (Note : Enter semicolon separate email address with no spaces)
                                </Text></Label>
                                    <Input placeholder="someone@example.com" onChangeText={(e) => this.setState({ emailto: e })} />
                                </Item>
                            </View>
                            <View style={{ height: 70, marginBottom: 20, marginTop: 40 }}>

                                <Item stackedLabel style={{ height: 120, marginBottom: 5 }}>
                                    <Label>Email CC
                              <Text style={{ color: 'red' }}>
                                            (Note : Enter semicolon separate email address with no spaces)
                              </Text></Label>
                                    <Input placeholder="someone@example.com" onChangeText={(e) => this.setState({ emailcc: e })} />
                                </Item>
                            </View>
                        </Form>
                        <View style={{ marginTop: 40, flex: 1, flexDirection: 'row' }}>
                            <View style={{ paddingTop: 5, paddingLeft: 15, width: 150, height: 50, }} >
                                <Label style={{ fontSize: 24 }}>
                                    Attachment
                            </Label>
                            </View>
                            <View style={{ width: 150, height: 40 }}>
                                <Button light onPress={this._handleButtonPress}>
                                    <Text>
                                        CHOOSE FILE
                                    </Text>
                                    <ScrollView>
                                        {this.state.photos.map((p, i) => {
                                            return (
                                                <View>
                                                    <Image
                                                        style={{
                                                            width: 300,
                                                            height: 100,
                                                        }}
                                                        source={{ uri: p.node.image.uri }}
                                                    />
                                                </View>
                                            );
                                        })}
                                    </ScrollView>
                                </Button>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 0.5, height: 50, }} >
                                <Button style={{ width: 200, justifyContent: 'center', backgroundColor: '#212121' }} onPress={this.Floatingbutton.bind(this)}>
                                    <Text> BACK</Text>
                                </Button>
                            </View>
                            <View style={{ flex: 0.5, height: 50, }} >
                                <Button style={{ width: 200, justifyContent: 'center', backgroundColor: '#212121' }} onPress={this.Save.bind(this)}>
                                    <Text> SAVE</Text>
                                </Button>
                            </View>
                        </View>
                    </Container>
                    {(this.state.saved === 1) ?
                        Toast.show({
                            zindex: 1,
                            text: "Ticket Successfuly Created",
                            duration: 3000,
                            position: "bottom",
                            type: "success"
                        })
                        :
                        null
                    }
                </Content>
            </Container>
        )
    }
}
export default Pocdetails;
