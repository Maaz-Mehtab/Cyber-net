import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import {
    Container, Left, Spinner, Button, Header, Text, Content,
    Icon, Card, CardItem, Body, H2, Form, Label, Input, Item, ListItem, CheckBox, Toast
} from 'native-base';
import SideBar from './Sidebar';
import InitiateTicket from './InitiateTicket';
import Setup from './Reports';
import { AppRegistry, Image, StatusBar, StyleSheet, Picker, PickerItem, View, TouchableOpacity, Dimensions, AsyncStorage, ScrollView } from "react-native";
const window = Dimensions.get('window');
import { connect } from 'react-redux';
import Calendar from 'react-native-calendar';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import MenuButton from 'react-native-menu-button';
import { Actions } from 'react-native-router-flux';
const screenwidh = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const sum = screenheight + screenwidh;
class Ticket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            search: 0,
            errorfound: 0,
            date: moment().format('MMM DD , YYYY'),
            date1: moment().format('MMM DD , YYYY'),
            Ticket: '',
            Title: '',
            initiator: 0,
            Department: 0,
            Assignee: 0,
            Priority: 0,
            Customer: 0,
            CustomerType: 0,
            Address: 0,
            ticketAssign: false,
            Cancel: false,
            Closed: false,
            Junk: false,
            New: false,
            OnHold: false,
            ReOpen: false,
            Resolved: false,
            GetInitiator: [],
            GetDepartment: [],
            GetCustomerType: [],
            GetAssigne: [],
            GetPriority: [],
            GetCustomer: [],
            GetAddress: []

        }
        setTimeout(() => {
            this.setState({
                GetDepartment: this.props.DepartmentData,
                GetCustomerType: this.props.CutomerTypeData,
                GetPriority: this.props.PriorityData,
                GetInitiator: this.props.InitiatorData

            })
        }, 1000);
        setTimeout(() => {
            // console.log("Department data", this.state.GetDepartment)
            // console.log("CustomerType data", this.state.GetCustomerType)
            // console.log("Priority data", this.state.GetPriority)
            // console.log("GetInitiator data", this.state.GetInitiator)
            this.forceUpdate();
        }, 1500);
    }
    search() {
        let ob = {
            Department: this.state.Department,
            Assignee: this.state.Assignee,
            Priority: this.state.Priority,
            Customer: this.state.Customer,
            CustomerType: this.state.CustomerType,
            Address: this.state.Address,
            ticketAssign: this.state.ticketAssign,
            Cancel: this.state.Cancel,
            Closed: this.state.Closed,
            Junk: this.state.Junk,
            New: this.state.New,
            OnHold: this.state.OnHold,
            ReOpen: this.state.ReOpen,
            Resolved: this.state.Resolved
        }
        let arr = [];
        if (this.state.New === true) {
            let newvalue = 1;
            arr.push(newvalue);
        }
        if (this.state.Cancel === true) {
            let cancelvalue = 2;
            arr.push(cancelvalue);
        }
        if (this.state.Closed === true) {
            let closedvalue = 3;
            arr.push(closedvalue);
        }
        if (this.state.InProgress === true) {
            let workingvalue = 4;
            arr.push(workingvalue);
        }
        if (this.state.Resolved === true) {
            let resolvedvalue = 5;
            arr.push(resolvedvalue);
        }
        if (this.state.OnHold === true) {
            let onholdevalue = 6;
            arr.push(onholdevalue);
        }
        if (this.state.ReOpen === true) {
            let reopenvalue = 7;
            arr.push(reopenvalue);
        }
        if (this.state.Junk === true) {
            let junkvalue = 8;
            arr.push(junkvalue);
        }


        console.log("Val", arr);
        let st = arr.toString();
        console.log("st", st);
        let initiatorid = null
        if (this.state.initiator != 0) {
            initiatorid = this.state.initiator
        }

        let Departmentid = null
        if (this.state.Department != 0) {
            Departmentid = this.state.Department
        }

        let Priorityid = null
        if (this.state.Priority != 0) {
            Priorityid = this.state.Priority
        }

        let CustomerTypeid = null
        if (this.state.CustomerType != 0) {
            CustomerTypeid = this.state.CustomerType
        }

        let Assigneeid = null
        if (this.state.Assignee != 0) {
            Assigneeid = this.state.Assignee
        }

        let Customerid = null
        if (this.state.Customer != 0) {
            Customerid = this.state.Customer
        }

        let Addressid = null
        if (this.state.Address != 0) {
            Addressid = this.state.Address
        }
        let sea = {
            InitiatorId_: initiatorid,
            DepartmentId_: Departmentid,
            AssigneeId_: Assigneeid,
            PriorityId_: Priorityid,
            CustomerTypeId_: CustomerTypeid,
            CustomerId_: Customerid,
            AddressId_: Addressid,
            UnAssignedTicket_: this.state.ticketAssign,
            Ticket_: this.state.Ticket,
            Title_: this.state.Title,
            StatusId_: st,
            IsResponseOverTickets: false,
            IsInternalChatOverTickets: false,
            TicketDateFrom: this.state.date,
            TicketDateTo: this.state.date1
        }
        let alldata = [];
        console.log("search", sea);
        console.log("API Fetching", 'http://192.168.61.33:5001/wcf/TicketService.svc/ApiSearchTickets?InitiatorId_=' + sea.InitiatorId_ + '&DepartmentId_='
            + sea.DepartmentId_ + '&AssigneeId_=' + sea.AssigneeId_ + '&PriorityId_=' + sea.PriorityId_ + '&CustomerTypeId_=' + sea.CustomerTypeId_ +
            '&CustomerId_=' + sea.CustomerId_ + '&AddressId_=' + sea.AddressId_ + '&UnAssignedTicket_=' + sea.UnAssignedTicket_ + '&Ticket_=' + sea.Ticket_ +
            '&Title_=' + sea.Title_ + '&StatusId_=' + sea.StatusId_ + '&IsResponseOverTickets=' + sea.IsResponseOverTickets + '&IsInternalChatOverTickets=' + sea.IsInternalChatOverTickets +
            '&TicketDateFrom=' + sea.TicketDateFrom + '&TicketDateTo=' + sea.TicketDateTo)

        return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiSearchTickets?InitiatorId_=' + sea.InitiatorId_ + '&DepartmentId_='
            + sea.DepartmentId_ + '&AssigneeId_=' + sea.AssigneeId_ + '&PriorityId_=' + sea.PriorityId_ + '&CustomerTypeId_=' + sea.CustomerTypeId_ +
            '&CustomerId_=' + sea.CustomerId_ + '&AddressId_=' + sea.AddressId_ + '&UnAssignedTicket_=' + sea.UnAssignedTicket_ + '&Ticket_=' + sea.Ticket_ +
            '&Title_=' + sea.Title_ + '&StatusId_=' + sea.StatusId_ + '&IsResponseOverTickets=' + sea.IsResponseOverTickets + '&IsInternalChatOverTickets=' + sea.IsInternalChatOverTickets +
            '&TicketDateFrom=' + sea.TicketDateFrom + '&TicketDateTo=' + sea.TicketDateTo)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                var b = JSON.parse(responseJson.d);
                console.log("result search", b.length)
                if (b.length < 1) {
                    this.setState({
                        errorfound: 1
                    })
                }
                if (this.state.errorfound === 1) {
                    this.setState({
                        errorfound: 0
                    })
                }
                for (var i = 0; i < b.length; i++) {
                    alldata.push(b[i]);
                    if (b.length != 0) {
                        this.setState({
                            search: 1
                        })
                        setTimeout(() => {

                            this.props.navigation.navigate("Setup", { data: alldata })
                            console.log("run", this.props.navigation.navigate("Setup", { data: alldata }))
                        }, 5000);
                    }
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    fun(val) {
        console.log("Id selected", val);
    }
    Floatingbutton() {
        console.log("Button action floating")
        this.props.navigation.navigate("InitiateTicket");
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
        if (value === "Add") {
            console.log("Add");

            this.props.navigation.navigate("InitiateTicket")
        }
    }
    render() {
        menuGroup = [
            { key: "3", value: "Add", text: "Add New" },
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
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#B71C1C', height: 50 }}>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={{ color: 'white', fontSize: 24, paddingTop: 8 }}>
                                Tickets
         </Text>
                        </View>
                    </View>
                    <Container style={{ height: 600 }}>

                        <Text style={{ left: 15, fontSize: 20 }}>Initiator</Text>
                        <Picker selectedValue={this.state.initiator}
                            onValueChange={(itemValue, itemIndex) => {
                                if (itemValue != 0) {

                                    this.setState({ initiator: itemValue })
                                    console.log("init value", this.state.initiator)
                                }
                                else if (itemValue === 0) {
                                    this.setState({ initiator: null })
                                }
                                console.log("init value", this.state.initiator)
                            }}>
                            <Picker.Item label="Select Option " value={0} />
                            {this.state.GetInitiator.map((val, index) => {

                                return (
                                    <Picker.Item key={index} label={val.Value} value={val.Id} onValueChange={() =>
                                        this.setState({ initiator: val.Id })} />
                                )
                            })}
                        </Picker>
                        <Text style={{ left: 15, fontSize: 20 }}>Department (Assigned)</Text>
                        <Picker selectedValue={this.state.Department}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ Department: itemValue });
                                return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetAssignee?DepartmentId=' + itemValue)
                                    .then((response) => response.json())
                                    .then((responseJson) => {
                                        console.log("c", responseJson);
                                        var b = JSON.parse(responseJson.d);
                                        console.log("fetching", b);
                                        setTimeout(() => {
                                            this.setState({ GetAssigne: b, Assignee: itemValue })
                                        }, 500);
                                    })
                                    .catch((error) => {
                                        console.error(error);
                                    });
                                console.log("check", this.state.Department)
                            }}>
                            <Picker.Item label="Select Option " value={0} />
                            {this.state.GetDepartment.map((val, index) => {

                                return (
                                    <Picker.Item key={index} label={val.Value} value={val.Id} onValueChange={() => this.setState({ Department: val.Id })} />
                                )
                            })}
                        </Picker>
                        <Text style={{ left: 15, fontSize: 20 }}>Assignee</Text>

                        <Picker
                            selectedValue={this.state.Assignee}
                            onValueChange={(itemValue) => {
                                this.setState({ Assignee: itemValue });
                            }
                            }>
                            <Picker.Item label="Select Option " value={0} />
                            {this.state.GetAssigne.map((val, index) => {
                                return (
                                    <Picker.Item key={index} label={val.Value} value={val.Id} onValueChange={() => this.setState({ Assignee: val.Id })} />
                                )
                            })}
                        </Picker>
                        <Text style={{ left: 15, fontSize: 20 }}>Priority</Text>
                        <Picker selectedValue={this.state.Priority}
                            onValueChange={(itemValue, itemIndex) => this.setState({ Priority: itemValue })}>
                            <Picker.Item label="Select Option " value={0} />
                            {this.state.GetPriority.map((val, index) => {
                                return (
                                    <Picker.Item key={index} label={val.Value} value={val.Id} onValueChange={() => this.setState({ Priority: val.Id })} />
                                )
                            })}
                        </Picker>
                        <Text style={{ left: 15, fontSize: 20 }}>Customer Type</Text>
                        <Picker selectedValue={this.state.CustomerType}
                            onValueChange={(itemValue) => {
                                this.setState({ CustomerType: itemValue })
                                this.fun.bind(this);
                                console.log("Customer type item value", itemValue)
                                if (itemValue !== 0) {
                                    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetCustomer?CustomerTypeId=' + itemValue)
                                        .then((response) => response.json())
                                        .then((responseJson) => {
                                            console.log("c", responseJson);
                                            var b = JSON.parse(responseJson.d);
                                            var i = b[0].Id;
                                            var v = b.Value;
                                            console.log("fetching", b);
                                            console.log("Cliend id ", i);
                                            console.log("Cliend value ", v)
                                            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetCustomerAddress?ClientID=' + i)
                                                .then((response) => response.json())
                                                .then((responseJson) => {
                                                    console.log("c", responseJson);
                                                    var q = JSON.parse(responseJson.d);
                                                    console.log("Address", q)
                                                    setTimeout(() => {
                                                        this.setState({
                                                            Address: i,
                                                            Customer: itemValue,
                                                            GetAddress: q,
                                                            GetCustomer: b
                                                        })

                                                    }, 500);
                                                })
                                        })
                                        .catch((error) => {
                                            console.error(error);
                                        });
                                }
                            }}>
                            <Picker.Item label="Select Option " value={0} />
                            {this.state.GetCustomerType.map((val, index) => {
                                return (
                                    <Picker.Item key={index} label={val.Value} value={val.Id} onValueChange={() => this.setState({ Department: val.Id })} />
                                )
                            })}
                        </Picker>
                        <Text style={{ left: 15, fontSize: 20 }}>Customer</Text>
                        <Picker selectedValue={this.state.Customer}
                            onValueChange={(itemValue) => {
                                this.setState({ Customer: itemValue })
                                this.fun.bind(this);
                                console.log("Customerid", itemValue)
                                console.log("Customerid", this.state.Customer)
                                return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetCustomerAddress?ClientID=' + itemValue)
                                    .then((response) => response.json())
                                    .then((responseJson) => {
                                        console.log("c", responseJson);
                                        var b = JSON.parse(responseJson.d);
                                        console.log("Get Address", b);
                                        setTimeout(() => {
                                            this.setState({
                                                GetAddress: b,
                                                Address: "Maaaz"
                                            })
                                        }, 500);
                                    }).catch((error) => {
                                        console.error(error);
                                    });
                            }}>
                            <Picker.Item label="Select Option " value={0} />
                            {this.state.GetCustomer.map((val, index) => {
                                return (
                                    <Picker.Item key={index} label={val.Value} value={val.Id} onValueChange={this.fun.bind(this, val.Id)} />

                                )
                            })}
                        </Picker>
                        <Text style={{ left: 15, fontSize: 20 }}>Address</Text>
                        <Picker
                            selectedValue={this.state.Address}
                            onValueChange={(itemValue) => {
                                this.setState({ Address: itemValue });
                            }}>
                            <Picker.Item label="Select Option " value={0} />
                            {this.state.GetAddress.map((val, index) => {
                                return (
                                    <Picker.Item key={index} label={val.Value} value={val.Id} />

                                )
                            })}
                        </Picker>
                        <ListItem>
                            <CheckBox checked={this.state.ticketAssign}
                                onPress={() => this.setState({ ticketAssign: !this.state.ticketAssign })} checked={this.state.ticketAssign} />
                            <Body>
                                <Text>Un Assigned Ticket(s)</Text>
                            </Body>
                        </ListItem>
                    </Container>

                    <Container style={{ height: 830 }}>
                        <Form>

                            <Item stackedLabel >
                                <Label>Ticket No</Label>
                                <Input onChangeText={(e) => this.setState({ Ticket: e })} />
                            </Item>
                            <Item stackedLabel >
                                <Label>Title</Label>
                                <Input onChangeText={(e) => this.setState({ Title: e })} />
                            </Item>

                            <Item style={{ height: 80 }} stackedLabel >
                                <Label>Ticket Date From</Label>
                                <DatePicker
                                    style={{ width: '85%', marginTop: 10, borderColor: 'white' }}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="MMM DD ,YYYY"
                                    minDate="2000-01-01"
                                    maxDate="2030-12-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            right: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                        }
                                    }}
                                    onDateChange={(date) => {
                                        this.setState({ date: date })
                                        console.log("Data", date);
                                        console.log("stateData", this.state.date);
                                    }}
                                />
                            </Item>

                            <Item style={{ height: 80 }} stackedLabel >
                                <Label>Ticket Date To</Label>
                                <DatePicker
                                    style={{ width: '85%', marginTop: 10, borderColor: 'white' }}
                                    date={this.state.date1}
                                    mode="date"
                                    placeholder="select date"
                                    format="MMM DD ,YYYY"
                                    minDate="2000-01-01"
                                    maxDate="2030-12-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            right: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                        }
                                    }}
                                    onDateChange={(date1) => {
                                        this.setState({ date1: date1 })
                                        console.log("Data 1", date1);
                                        console.log("stateData 1", this.state.date1);
                                    }}
                                />
                            </Item>
                        </Form>
                        <H2 style={{ margin: 5, marginTop: 25 }}>Status</H2>
                        <ListItem>
                            <CheckBox checked={this.state.Cancel}
                                onPress={() => this.setState({ Cancel: !this.state.Cancel })} checked={this.state.Cancel} />

                            <Body>
                                <Text>Cancel</Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <CheckBox checked={this.state.Closed}
                                onPress={() => this.setState({ Closed: !this.state.Closed })} checked={this.state.Closed} />
                            <Body>
                                <Text>Closed</Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <CheckBox checked={this.state.InProgress}
                                onPress={() => this.setState({ InProgress: !this.state.InProgress })} checked={this.state.InProgress}
                            />
                            <Body>
                                <Text>In Progress</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.Junk}
                                onPress={() => this.setState({ Junk: !this.state.Junk })} checked={this.state.Junk} />
                            <Body>
                                <Text>Junk</Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <CheckBox checked={this.state.New}
                                onPress={() => this.setState({ New: !this.state.New })} checked={this.state.New} />
                            <Body>
                                <Text>New</Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <CheckBox checked={this.state.OnHold}
                                onPress={() => this.setState({ OnHold: !this.state.OnHold })} checked={this.state.OnHold} />
                            <Body>
                                <Text>On Hold</Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <CheckBox checked={this.state.ReOpen}
                                onPress={() => this.setState({ ReOpen: !this.state.ReOpen })} checked={this.state.ReOpen} />
                            <Body>
                                <Text>Re-Open</Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <CheckBox checked={this.state.Resolved}
                                onPress={() => this.setState({ Resolved: !this.state.Resolved })} checked={this.state.Resolved} />
                            <Body>
                                <Text>Resolved</Text>
                            </Body>
                        </ListItem>

                        <Button block danger onPress={this.search.bind(this)} style={{ marginTop: 10, margin: 10, borderRadius: 10 }} ><Text>SEARCH</Text></Button>
                    </Container>

                    {(this.state.search === 1) ?
                        Toast.show({
                            zindex: 1,
                            text: "Search Ticket",
                            position: "bottom",
                            type: "success",
                            duration: 3000,
                        })
                        :
                        null
                    }
                    {(this.state.errorfound === 1) ?
                        Toast.show({
                            zindex: 1,
                            text: "No Ticket Found",
                            type: "danger",
                            duration: 3000,
                        })
                        :
                        null
                    }
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    rowViewContainer:
        {
            fontSize: 18,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
        },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {

        resizeMode: 'contain',
        width: 60,
        height: 60,
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
        top: 12
    }
});

const mapStateToProps = (state) => {
    return {
        DepartmentData: state.root.Depart,
        CutomerTypeData: state.root.CustomerTyp,
        PriorityData: state.root.Prioty,
        InitiatorData: state.root.Initia

    }
}
export default connect(mapStateToProps, null)(Ticket);



