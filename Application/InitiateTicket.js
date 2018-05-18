import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, Text, Content, Icon, Card, CardItem, Body, H2, Form, Label, Input, Item, ListItem, CheckBox } from 'native-base';
import SideBar from './Sidebar';
import Pocdetails from './Pocdetails';
import { connect } from 'react-redux';
import { StyleSheet, Alert, View, Picker } from 'react-native';
class InitiateTicket extends Component {
 constructor(props) {
super(props);
        this.state = {
            initiator: 0,
            initiatorid: null,
            CustomerType: 0,
            CustomerTypeid: null,
            Customer: '',
            Address: 0,
            Addressid: null,
            CircuitType: '',
            Product: 0,
            Productid: null,
            cam: '',
            Department: 0,
            Departmentid: null,
            ProblemCategory: 0,
            ProblemCategoryid: null,
            Title: '',
            Priority: 0,
            Priorityid: null,
            RequestType: 0,
            RequestTypeid: null,
            Contact: 3,
            level: 0,
            levelid: null,
            Assignto: 0,
            Assigntoid: null,
            GetInitiate: [],
            GetCustomerType: [],
            GetCustomer: [],
            GetAddress: [],
            GetProduct: [],
            GetRequestType: [],
            GetDepartment: [],
            GetProblemCategory: [],
            GetPriority: [],
            GetLevel: [],
            GetAssignto: [],
            GetPreRequisite: [],
            CheckBoxstates: undefined,
            CheckBoxIdSelect: []
        }
        this.toggle = this.toggle.bind(this);
        setTimeout(() => {
            this.setState({
                GetCustomerType: this.props.CutomerTypeData,
                GetProduct: this.props.ProductData,
                GetRequestType: this.props.RequestTypeData,
                GetDepartment: this.props.DepartmentData,
                GetPriority: this.props.PriorityData,
                GetInitiate: this.props.InitiatorData
            })
        }, 500);

        setTimeout(() => {
            this.forceUpdate();
}, 1000);
    }

    Next() {
        // console.log("this.state.Address",this.state.Address)
        // console.log("this.state.Title",this.state.Title)
        // console.log("this.state.Addressid",this.state.Addressid)
        // console.log("this.state.Productid",this.state.Productid)
        // console.log("this.state.CheckBoxIdSelect",this.state.CheckBoxIdSelect)
        // console.log("this.state.CheckBoxIdSelect",this.state.CheckBoxIdSelect.length)
        // console.log("this.state.Departmentid",this.state.Departmentid)
        // console.log("this.state.ProblemCategoryid",this.state.ProblemCategoryid)
        // console.log("this.state.Priorityid",this.state.Priorityid)

        if(this.state.initiator===null){
            alert("Please Select initiator ")
        }
        else if(this.state.CustomerType===null){
            alert("Please Select Customer Type")
        }
        else if(this.state.Addressid===null){
            alert("Please Select Address ")
        }
        else if(this.state.Productid===null){
            alert("Please Select Product ")
        }
        else if(this.state.CheckBoxIdSelect.length==0){
            alert("Please Select PreRequisite ")
        }
        else if(this.state.Departmentid===null){
            alert("Please Select Department ")
        }
        else if(this.state.ProblemCategoryid===null){
            alert("Please Select Problem Category ")
        }
        else if(this.state.Priorityid===null){
            alert("Please Select Problem Priority ")
        }
        else if(this.state.RequestTypeid===null){
            alert("Please Select Problem Request Type ")
        }
     else{
let CheckBoxIdSelectString = this.state.CheckBoxIdSelect.join();
this.setState({
            GetallPreRequisite: CheckBoxIdSelectString
        })
        let POCDetail = {
            POCName: this.state.POCName,
            POCEmail: this.state.POCEmail,
            POCContact: this.state.POCContact
        }
        let ee = [];
        ee.push(POCDetail);
        let PocdetailString = JSON.stringify(ee);
        let TicketMaster = {
            ClientDetailId: this.state.Addressid,
            ProductId: this.state.Productid,
            InitiatorId: this.state.initiatorid,
            AssignId: this.state.Assigntoid,
            DepartmentId: this.state.Departmentid,
            PriorityId: this.state.Priorityid,
            StatusId: 1,
            RequestModeId: "3",
            RequestTypeId: this.state.RequestTypeid,
            IsAssigned: false,
            Title: this.state.Title,
            CategoryId: this.state.ProblemCategoryid,
            levelId: this.state.levelid,
        }
        setTimeout(() => {
            let ob = {
                InitiatorId: this.state.initiator,
                CustomerType: this.state.CustomerType,
                Customer: this.state.Customer,
                ClientDetailId: this.state.Address,
                ProductId: this.state.Product,
                DepartmentId: this.state.Department,
                levelId: this.state.level,
                AssignId: this.state.Assignto,
                CategoryId: this.state.ProblemCategory,
                PriorityId: this.state.Priority,
                StatusID: 1,
                RequestModeId: 3,
                IsAssigned: false,
                RequestTypeId: this.state.RequestType,
                Contact: this.state.Contact,
                BridgeNotAccessible: this.state.BridgeNotAccessible,
                BrowsingIssue: this.state.BrowsingIssue,
                EthernetAlarm: this.state.EthernetAlarm,
                FiberAlarn: this.state.FiberAlarn,
                LinkDown: this.state.LinkDown,
                PingDrops: this.state.PingDrops,
                POEIssue: this.state.POEIssue,
                RouterIssue: this.state.RouterIssue,
                FiberBreak: this.state.FiberBreak,
                MCIssue: this.state.MCIssue,
                GetallPreRequisite: CheckBoxIdSelectString,
            }

        }, 500);

        this.props.navigation.navigate("Pocdetails",
            { TicketMasterStrings: TicketMaster, GetallPreRequisite: CheckBoxIdSelectString, PocdetailStrings: PocdetailString, Title: this.state.Title });
        } }
    fun(val) {
        console.log("Id selected", val);
    }
    toggle(event, val, buttonId) {
        this.setState({ checked: !this.state.checked });
        console.log("index", buttonId)
        console.log("Event", event)
        console.log("value", val);
        console.log("checked state", this.state.checked);
    }
    Add() {
        let ob = {
            Initiator: null,
            CustomerType: this.state.CustomerType,
            Customer: this.state.Customer,
            Address: this.state.Address,
            Product: this.state.Product,
            Department: this.state.Department,
            ProblemCategory: this.state.ProblemCategory,
            Priority: this.state.Priority,
            RequestType: this.state.RequestType,
            Contact: this.state.Contact
        }
        console.log("ob", ob);
    }
    render() {
        console.log("Problem category title", this.state.Title);
        console.log("GetPre", this.state.GetPreRequisite);
        let CheckBoxstates = [];
        if (this.state.CheckBoxstates == undefined) {
            if (this.state.GetPreRequisite.length > 0) {
                for (var i = 0; i < this.state.GetPreRequisite.length; i++) {
                    CheckBoxstates.push(false)
                }
                this.setState({ CheckBoxstates: CheckBoxstates })
            }
        }
        else {
            CheckBoxstates = [...this.state.CheckBoxstates];
        }

        var ArrayOfCheckboxes = [];
        if (this.state.GetPreRequisite.length > 0) {
            var ArrayOfCheckboxesid = [];
            ArrayOfCheckboxes = this.state.GetPreRequisite.map((val, index) => {
                ArrayOfCheckboxesid.push(val.Id)
                return (
                    <ListItem>
                        <CheckBox
                            onPress={() => {
                                CheckBoxstates[index] = !CheckBoxstates[index]
                                this.setState({ CheckBoxstates: CheckBoxstates });
                                var abc = [...this.state.CheckBoxIdSelect]
                               
                                if(CheckBoxstates[index]!=false){

                                abc.push(ArrayOfCheckboxesid[index]);
                                console.log("id",ArrayOfCheckboxesid[index]);
                                }
                                if(CheckBoxstates[index]===false){
                                    console.log("indexOf",abc.indexOf(ArrayOfCheckboxesid[index]))
                                    let seleceteidndex=abc.indexOf(ArrayOfCheckboxesid[index])
                                 abc.splice(seleceteidndex,1)
                                    console.log("Abc 2",abc);
                                }
                                    this.setState({ CheckBoxIdSelect: abc })
                            }
                            }
                            checked={CheckBoxstates[index]}
                        />
                        <Body>
                            <Text>{val.Value}</Text>
                         </Body>
                    </ListItem>)
            })
        }
        return (
            <View style={{ flex: 1 }}>
                <Container>
                    <Content>
                        <View style={{ flex: 1, backgroundColor: '#212121', height: 60, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 0.2, height: 60 }}>
                                <Button transparent style={{ width: 60, height: 60 }} onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                    <Icon style={{ color: 'white' }} name="md-menu" />
                                </Button>
                            </View>
                            <View style={{ flex: 0.8, height: 60, alignItems: 'center' }}>
                                <Text style={{ paddingTop: 15, paddingRight: 10, fontSize: 20, color: 'white' }}>CYBER NET</Text>
                            </View>
                        </View>
                        <Container style={{ width: 600, height: 50, backgroundColor: '#B71C1C' }}>
                            <Text style={{ color: 'white', fontSize: 24, paddingTop: 5, left: 155 }}>InitiateTicket</Text>
                        </Container>

                        <Container style={{ height: 1730 }}>
                            <Text style={{ left: 15, fontSize: 20 }}>Initiator</Text>
                            <Picker selectedValue={this.state.initiator}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            initiator: itemValue,
                                            initiatorid: itemValue.toString()
                                        })
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            initiator: null
                                        })
                                    }
                                }
                                }>
                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetInitiate.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} onValueChange={() => this.setState({ initiator: val.Id })} />
                                    )
                                })}
                            </Picker>

                            <Text style={{ left: 15, fontSize: 20 }}>Customer Type</Text>
                            <Picker selectedValue={this.state.CustomerType}
                                onValueChange={(itemValue) => {
                                    this.setState({ CustomerType: itemValue })
                                    console.log("Customer type item value", itemValue)
                                    if (itemValue !== 0) {
                                        this.setState({
                                            CustomerType: itemValue,
                                            CustomerTypeid: itemValue.toString()
                                        })
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
                                                        // setTimeout(() => {
                                                        this.setState({
                                                            Address: i,
                                                            Customer: itemValue,
                                                            GetAddress: q,
                                                            GetCustomer: b
                                                        })
                                                    })
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                            });
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            CustomerType: null
                                        })
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
                                    if (itemValue != 0) {
                                        this.setState({
                                            Customer: itemValue,
                                            Customerid: itemValue.toString()
                                        })
                                        this.fun.bind(this);
                                        console.log("Customerid", itemValue)
                                        console.log("Customerid", this.state.Customer)
                                        return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetCustomerAddress?ClientID=' + itemValue)
                                            .then((response) => response.json())
                                            .then((responseJson) => {
                                                console.log("c", responseJson);
                                                var b = JSON.parse(responseJson.d);
                                                console.log("Get Address", b);
                                                this.setState({
                                                    GetAddress: b,
                                                    Address: "Maaaz"
                                                })
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                            });
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            initiator: null
                                        })
                                    }
                                }}>
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
                                    if (itemValue != 0) {
                                        this.setState({
                                            Address: itemValue,
                                            Addressid: itemValue.toString()
                                        })
                                        console.log("Address id ", itemValue)
                                        if (itemValue !== 0) {
                                            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetPOCDetails?clientDetailID=' + itemValue)
                                                .then((response) => response.json())
                                                .then((responseJson) => {
                                                    console.log("c", responseJson);
                                                    var b = JSON.parse(responseJson.d);
                                                    console.log("Get POC DEtail", b);
                                                    for (var i = 0; i < b.length; i++) {
                                                        this.setState({
                                                            POCName: b[i].POCName,
                                                            POCEmail: b[i].POCEmail,
                                                            POCContact: b[i].POCContact
                                                        })
                                                    }
                                                })
                                                .catch((error) => {
                                                    console.error(error);
                                                });
                                        }
                                        else if (itemValue == 0) {
                                            this.setState({
                                                initiator: null
                                            })
                                        }
                                    }
                                }}>

                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetAddress.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )
                                })}
                            </Picker>

                            <Text style={{ left: 15, fontSize: 20 }}>Product</Text>
                            <Picker selectedValue={this.state.Product}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            Product: itemValue,
                                            Productid: itemValue.toString()
                                        })
                                        return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetPreRequisite?ProductId=' + itemValue)
                                            .then((response) => response.json())
                                            .then((responseJson) => {
                                                console.log("c", responseJson);
                                                var b = JSON.parse(responseJson.d);
                                                console.log("Get PreRequisite", b);
                                                this.setState({
                                                    GetPreRequisite: b
                                                })
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                            });
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            initiator: null
                                        })
                                    }
                                }}>

                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetProduct.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })}

                            </Picker>
                            <Text style={{ left: 5, fontSize: 26, margin: 5, color: 'black', fontWeight: 'bold' }}>Pre Requisite</Text>
                            {(this.state.GetPreRequisite != []) ?
                                <View>
                                    {ArrayOfCheckboxes}
                                </View>
                                :
                                null
                            }
                            <Text style={{ left: 15, fontSize: 20 }}>Department</Text>
                            <Picker selectedValue={this.state.Department}
                                onValueChange={(itemValue) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            Department: itemValue,
                                            Departmentid: itemValue.toString()
                                        })
                                        console.log("item value", itemValue)
                                        return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetServiceCategory?DepartmentId=' + itemValue)
                                            .then((response) => response.json())
                                            .then((responseJson) => {
                                                console.log("c", responseJson);
                                                var b = JSON.parse(responseJson.d);
                                                console.log("Service data fetching", b);
                                                console.log("Department ID", itemValue)
                                                return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetLevel?DepartmentId=' + itemValue)
                                                    .then((response) => response.json())
                                                    .then((responseJson) => {
                                                        console.log("c", responseJson);
                                                        var q = JSON.parse(responseJson.d);
                                                        console.log("Level data Fetching", q)
                                                        console.log("Level Id", itemValue)
                                                        this.setState({

                                                            GetProblemCategory: b,
                                                            RequestType: itemValue,
                                                            GetLevel: q,
                                                            level: itemValue,
                                                        })

                                                    })
                                                    .catch((error) => {
                                                        console.error(error);
                                                    });
                                            })
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            Department: null
                                        })
                                    }
                                }} >

                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetDepartment.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })}
                            </Picker>

                            <Text style={{ left: 15, fontSize: 20 }}>Level </Text>
                            <Picker selectedValue={this.state.level}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            level: itemValue,
                                            levelid: itemValue.toString()
                                        })
                                        console.log("level id", itemValue);
                                        console.log("Department id state", this.state.Department);
                                        if (itemValue !== 0) {
                                            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetAssignee?DepartmentId=' + this.state.Department + '&LevelId=' + itemValue)
                                                .then((response) => response.json())
                                                .then((responseJson) => {
                                                    console.log("c", responseJson);
                                                    var p = JSON.parse(responseJson.d);
                                                    console.log("Assignto data Fetching", p)
                                                    this.setState({
                                                        GetAssignto: p,
                                                        Assignto: itemValue
                                                    })
                                                })
                                        }
                                        else if (itemValue == 0) {
                                            this.setState({
                                                level: null
                                            })
                                        }
                                    }
                                }}>
                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetLevel.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )

                                })}
                            </Picker>

                            <Text style={{ left: 15, fontSize: 20 }}>Assign To </Text>
                            <Picker selectedValue={this.state.Assignto}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            Assignto: itemValue,
                                            Assigntoid: itemValue.toString()
                                        })
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            Assignto: null
                                        })
                                    }
                                }}>

                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetAssignto.map((val, index) => {

                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })}
                            </Picker>

                            <Text style={{ left: 15, fontSize: 20 }}>Problem Category</Text>
                            <Picker selectedValue={this.state.ProblemCategory}
                                onValueChange={(itemValue, itemIndex) => {
                                   console.log("GetProblemCategory",this.state.GetProblemCategory)
                                   console.log("itemValue",itemValue);
                                  
                                   for(var i=0;i<this.state.GetProblemCategory.length;i++){
                                    console.log("this.state.GetProblemCategory",this.state.GetProblemCategory[i].Id)
                                       if(itemValue===this.state.GetProblemCategory[i].Id){
                                           console.log("label",this.state.GetProblemCategory[i].Value)
                                           this.setState({
                                            Title:this.state.GetProblemCategory[i].Value
                                           })
                                       }
                                   }
                                    console.log("item Value",itemValue);
                                   
                                    if (itemValue != 0) {
                                        this.setState({
                                            ProblemCategory: itemValue,
                                            ProblemCategoryid: itemValue.toString()
                                        })
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            ProblemCategory: null
                                        })
                                    }
                                }}>

                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetProblemCategory.map((val, index) => {

                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })}
                            </Picker>
                            <Text style={{ left: 15, fontSize: 20 }}>Priority</Text>
                            <Picker selectedValue={this.state.Priority}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            Priority: itemValue,
                                            Priorityid: itemValue.toString()
                                        })
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            Priority: null
                                        })
                                    }
                                }}>
                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetPriority.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )

                                })}
                            </Picker>
                            <Text style={{ left: 15, fontSize: 20 }}>Request Type</Text>
                            <Picker selectedValue={this.state.RequestType}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            RequestType: itemValue,
                                            RequestTypeid: itemValue.toString()
                                        })
                                    }
                                    else if (itemValue == 0) {
                                        this.setState({
                                            RequestType: null
                                        })
                                    }
                                }}>
                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetRequestType.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })}
                            </Picker>
                            <Text style={{ left: 15, fontSize: 20 }}>Method Of Contact Phone</Text>
                            <Picker selectedValue={this.state.Contact}
                                onValueChange={(itemValue, itemIndex) => this.setState({ Contact: itemValue })}>
                                <Picker.Item label="Phone" value="3" />
                            </Picker>
                            <View style={{ position: 'relative', bottom: 10 }}>
                                <Button block danger
                                    style={{ justifyContent: 'center', margin: 10, backgroundColor: '#212121' }}
                                    onPress={this.Next.bind(this)} >
                                    <Text>NEXT</Text>
                                </Button>
                            </View>
                        </Container>

                    </Content>
                </Container>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        DepartmentData: state.root.Depart,
        CutomerTypeData: state.root.CustomerTyp,
        PriorityData: state.root.Prioty,
        InitiatorData: state.root.Initia,
        ProductData: state.root.Produc,
        RequestTypeData: state.root.Reques,
    }
}
export default connect(mapStateToProps, null)(InitiateTicket);
