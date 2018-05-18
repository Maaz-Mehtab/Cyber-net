import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, Text, Content, Icon, Card, CardItem, Body, H2, Form, Label, Input, Item, ListItem, CheckBox, Right, Toast } from 'native-base';
import SideBar from './Sidebar';
import Pocdetails from './Pocdetails';
import { connect } from 'react-redux';
import { StyleSheet, Alert, View, Picker } from 'react-native';
class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            saved: 0,
            initiator: 0,
            initiatorid: 0,
            TicketInitiatorName: '',
            CustomerType: 0,
            CustomerTypeid: 0,
            CustomerTypename: '',
            Customer: 0,
            Customername: '',
            Address: 0,
            Addressid: 0,
            CircuitType: '',
            Product: 0,
            Productid: 0,
            PreRequisitename: '',
            PreRequisiteid: '',
            Productname: '',
            cam: '',
            Department: 0,
            Departmentid: 0,
            DepartmentName: '',
            ProblemCategory: 0,
            ProblemCategoryid: null,
            Title: '',
            initialfinding: '',
            emailto: '',
            emailcc: '',
            Priority: 0,
            Priorityid: 0,
            RequestType: 0,
            RequestTypeid: 0,
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
            GetallPreRequisite: '',
            POCName: '',
            POCEmail: '',
            POCContact: '',
            PrerequisiteId: '',
            TicketMasterId: '',
            Filepath: '',
            CheckBoxstates: undefined,
            CheckBoxIdSelect: []
        }
        this.toggle = this.toggle.bind(this);
        let ar = [];
        let prereq = this.props.navigation.state.params.pre;
        for (var i = 0; i < prereq.length; i++) {
            ar.push(prereq[i].PrerequisiteId);
        }
        console.log("ar", ar);
        setTimeout(() => {
            this.setState({
                TicketMasterId: this.props.navigation.state.params.val.TicketMasterId,
                PrerequisiteId: ar,
                CheckBoxIdSelect: ar,
                initiator: this.props.navigation.state.params.val.InitiatorId,
                initiatorid: this.props.navigation.state.params.val.InitiatorId,
                TicketInitiatorName: this.props.navigation.state.params.val.TicketInitiatorName,
                CustomerType: this.props.navigation.state.params.getid[0].CustomerTypeId,
                CustomerTypeid: this.props.navigation.state.params.getid[0].CustomerTypeId,
                CustomerTypename: this.props.navigation.state.params.val.CustomerType,
                Customer: this.props.navigation.state.params.getid[0].ClientID,
                Customername: this.props.navigation.state.params.val.Customer,
                Address: this.props.navigation.state.params.getid[0].ClientDetailId,
                ProblemCategory: this.props.navigation.state.params.getid[0].CategoryId,
                Title: this.props.navigation.state.params.val.TicketTitle,
                emailto: this.props.navigation.state.params.emailto,
                emailcc: this.props.navigation.state.params.emailcc,
                initialfinding: this.props.navigation.state.params.getid[0].Description,
                Product: this.props.navigation.state.params.val.ProductId,
                Productid: this.props.navigation.state.params.val.ProductId,
                Productname: this.props.navigation.state.params.val.Product,
                PreRequisiteid: ar,
                Department: this.props.navigation.state.params.val.TicketDepartmentId,
                Departmentid: this.props.navigation.state.params.val.TicketDepartmentId,
                DepartmentName: this.props.navigation.state.params.val.Department,
                RequestType: this.props.navigation.state.params.getid[0].RequestTypeId,
                POCName: this.props.navigation.state.params.PocDetail[0].POCName,
                POCEmail: this.props.navigation.state.params.PocDetail[0].POCEmail,
                POCContact: this.props.navigation.state.params.PocDetail[0].POCContact,
                Priority: this.props.navigation.state.params.val.TicketPriorityId,
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
        setTimeout(() => {
            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetCustomer?CustomerTypeId=' + this.state.CustomerType)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("c", responseJson);
                    console.log("this.state.Customer Type", this.state.CustomerType);
                    var q = JSON.parse(responseJson.d);
                    console.log("Customer ", q)
                    this.setState({
                        GetCustomer: q
                    })
                    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetCustomerAddress?ClientID=' + this.state.Customer)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            var q = JSON.parse(responseJson.d);
                            this.setState({
                                GetAddress: q,
                            })
                            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetServiceCategory?DepartmentId=' + this.state.Department)
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    var b = JSON.parse(responseJson.d);
                                    this.setState({ GetProblemCategory: b })
                                    console.log("Client ID ", this.state.Customer)
                                    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetPreRequisite?ProductId=' + this.state.Product)
                                        .then((response) => response.json())
                                        .then((responseJson) => {
                                            var b = JSON.parse(responseJson.d);
                                            console.log("Get PreRequisite", b);
                                            this.setState({
                                                GetPreRequisite: b
                                            })
                                        })
                                })
                        })
                }).catch((error) => {
                    console.error(error);
                });
        }, 500);
    }
    Floatingbutton() {
        if (this.state.CheckBoxIdSelect.length === 0) {
            alert("please Select Requisite")
        }
        else {
            console.log("update initiator", this.state.initiator);
            console.log("update CustomerType", this.state.CustomerType);
            console.log("update Customer", this.state.Customer);
            console.log("update Address", this.state.Address);
            console.log("update Product", this.state.Product);
            console.log("update Department", this.state.Department);
            console.log("update ProblemCategory", this.state.ProblemCategory);
            console.log("update Priority", this.state.Priority);
            console.log("update RequestType", this.state.RequestType);
            console.log("update Contact", this.state.Contact);
            console.log("update Title", this.state.Title);
            console.log("update Description", this.state.initialfinding);
            console.log("update emailto", this.state.emailto);
            console.log("update emailcc", this.state.emailcc);
            console.log("update CheckBoxIdSelect", this.state.CheckBoxIdSelect);
            console.log("CheckBoxIdSelect", this.state.CheckBoxIdSelect);
            let CheckBoxIdSelectString = this.state.CheckBoxIdSelect.join();
            console.log("CheckBoxIdSelectString", CheckBoxIdSelectString);
            let arr = []
            let mn = arr.toString();
            this.setState({
                GetallPreRequisite: CheckBoxIdSelectString
            })
            console.log("GetallPreRequisite", this.state.GetallPreRequisite);
            let POCDetail = {
                POCName: this.state.POCName,
                POCEmail: this.state.POCEmail,
                POCContact: this.state.POCContact
            }
            let ee = [];
            ee.push(POCDetail);
            let PocdetailString = JSON.stringify(ee);
            let TicketMaster = {
                ClientDetailId: this.state.Address.toString(),
                ProductId: this.state.Product.toString(),
                InitiatorId: this.state.initiator.toString(),
                AssigneeId: null,
                DepartmentId: this.state.Department.toString(),
                PriorityId: this.state.Priority.toString(),
                StatusId: 1,
                RequestModeId: "3",
                RequestTypeId: this.state.RequestType.toString(),
                IsAssigned: false,
                Tittle: this.state.Title,
                Description: this.state.initialfinding,
                CategoryId: this.state.ProblemCategory.toString(),
                LevelId: null,
            }
            let strr = JSON.stringify(TicketMaster);
            console.log("Ticket Master ID", this.state.TicketMasterId);
            console.log("Ticket Master", strr);
            console.log("PocdetailString", PocdetailString);
            console.log("GetallPreRequisite To string", CheckBoxIdSelectString);
            console.log("EmailTo", this.state.emailto)
            console.log("EmailCC", this.state.emailcc);
            console.log("File Path", this.state.Filepath);

            console.log("API HIt", 'http://192.168.61.33:5001/wcf/TicketService.svc/ApiSaveTicket?TicketMasterId=' + this.state.TicketMasterId + '&TicketMaster=' + strr +
                '&Ticket_EmailTo=' + this.state.emailto + '&Ticket_EmailCC=' + this.state.emailcc + '&FilePath=' + this.state.Filepath + '&POC=' + PocdetailString +
                '&Prerequisite=' + CheckBoxIdSelectString);
            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiSaveTicket?TicketMasterId=' + this.state.TicketMasterId + '&TicketMaster=' + strr +
                '&Ticket_EmailTo=' + this.state.emailto + '&Ticket_EmailCC=' + this.state.emailcc + '&FilePath=' + this.state.Filepath + '&POC=' + PocdetailString +
                '&Prerequisite=' + CheckBoxIdSelectString)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({
                        saved: 1
                    })
                    setTimeout(() => {
                        this.props.navigation.navigate("Home");
                        this.setState({
                            saved: 0
                        })
                    }, 3000);
                    console.log("Congratulation")
                }).catch((error) => {
                    console.error(error);
                });
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
                    GetallPreRequisite: CheckBoxIdSelectString,
                }
            }, 500);
        }
    }
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
        let CheckBoxstates = [];
        if (this.state.CheckBoxstates == undefined) {
            if (this.state.GetPreRequisite.length > 0) {
                for (var i = 0; i < this.state.GetPreRequisite.length; i++) {
                    var res = this.state.PreRequisiteid.indexOf(this.state.GetPreRequisite[i].Id)
                    var IsChecked = res != -1 ? true : false;
                    CheckBoxstates.push(IsChecked)
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
                    <ListItem key={index}>
                        <CheckBox
                            onPress={() => {
                                CheckBoxstates[index] = !CheckBoxstates[index]
                                this.setState({ CheckBoxstates: CheckBoxstates });
                                var abc = [...this.state.CheckBoxIdSelect]
                                console.log("Abc !!", abc);
                                if (CheckBoxstates[index] != false) {

                                    abc.push(ArrayOfCheckboxesid[index]);
                                    console.log("id", ArrayOfCheckboxesid[index]);
                                }
                                if (CheckBoxstates[index] === false) {
                                    console.log("indexOf", abc.indexOf(ArrayOfCheckboxesid[index]))
                                    let seleceteidndex = abc.indexOf(ArrayOfCheckboxesid[index])
                                    abc.splice(seleceteidndex, 1)
                                    console.log("Abc 2", abc);
                                }
                                this.setState({ CheckBoxIdSelect: abc })
                            }
                            }
                            checked={CheckBoxstates[index]}
                        />
                        <Body >
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
                            <View style={{ flex: 1, height: 60, alignItems: 'center' }}>

                                <Text style={{ paddingTop: 15, paddingRight: 10, fontSize: 20, color: 'white' }}>
                                    CYBER NET
            </Text>
                            </View>
                            <View style={{ flex: 0.2, height: 60 }}>
                                <Button transparent style={{ width: 60, height: 60 }}>
                                    <Icon style={{ color: 'white' }} name="md-more" />
                                </Button>
                            </View>
                        </View>
                        <Container style={{ width: 600, height: 50, backgroundColor: '#B71C1C' }}>
                            <Text style={{ color: 'white', fontSize: 24, paddingTop: 5, left: 155 }}>Edit Record</Text>
                        </Container>
                        <Container style={{ height: 2000 }}>
                            <Text style={{ left: 15, fontSize: 20 }}>Initiator</Text>
                            <Picker selectedValue={this.state.initiator}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            initiator: itemValue,
                                            initiatorid: itemValue.toString()
                                        })
                                    }
                                }
                                }>
                                {this.state.GetInitiate.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })
                                }
                            </Picker>
                            <Text style={{ left: 15, fontSize: 20 }}>Customer Type</Text>
                            <Picker selectedValue={this.state.CustomerType}
                                onValueChange={(itemValue) => {
                                    this.setState({ CustomerType: itemValue })
                                    if (itemValue !== 0) {
                                        this.setState({
                                            CustomerType: itemValue,
                                            CustomerTypeid: itemValue.toString()
                                        })
                                        return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetCustomer?CustomerTypeId=' + itemValue)
                                            .then((response) => response.json())
                                            .then((responseJson) => {
                                                var b = JSON.parse(responseJson.d);
                                                var i = b[0].Id;
                                                var v = b.Value;
                                                return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetCustomerAddress?ClientID=' + i)
                                                    .then((response) => response.json())
                                                    .then((responseJson) => {
                                                        var q = JSON.parse(responseJson.d);
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
                                }}>
                                {this.state.GetCustomerType.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id}
                                        />

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
                                                var b = JSON.parse(responseJson.d);
                                                this.setState({
                                                    GetAddress: b,
                                                    Address: "Maaaz"
                                                })
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                            });
                                    }
                                }}>
                                {this.state.GetCustomer.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
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
                                                    var b = JSON.parse(responseJson.d);
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
                                    }
                                }}>
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
                                                var b = JSON.parse(responseJson.d);
                                                his.setState({
                                                    GetPreRequisite: b
                                                })
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                            });
                                    }
                                }}>
                                {this.state.GetProduct.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })
                                }
                            </Picker>
                            <Text style={{ left: 40, fontSize: 26, margin: 5, color: 'black', fontWeight: 'bold' }}>Pre Requisite</Text>
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
                                    }
                                }} >
                                {this.state.GetDepartment.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })}
                            </Picker><Text style={{ left: 15, fontSize: 20 }}>Problem Category</Text>
                            <Picker selectedValue={this.state.ProblemCategory}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (itemValue != 0) {
                                        this.setState({
                                            ProblemCategory: itemValue,
                                        })
                                    }
                                }}>

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
                                }}>
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
                                }}>
                                {this.state.GetRequestType.map((val, index) => {
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />
                                    )
                                })
                                }
                            </Picker>
                            <Text style={{ left: 15, fontSize: 20 }}>Method Of Contact Phone</Text>
                            <Picker selectedValue={this.state.Contact}
                                onValueChange={(itemValue, itemIndex) => this.setState({ Contact: itemValue })}>
                                <Picker.Item label="Phone" value="3" />
                            </Picker>
                            <Form>
                                <Item stackedLabel style={{ height: 80 }}>
                                    <Label>Title</Label>
                                    <Input style={{ fontSize: 17, color: 'black' }} value={this.state.Title} onChangeText={(e) => this.setState({ Title: e })} />
                                </Item>
                                <Item stackedLabel style={{ height: 80 }}>
                                    <Label>Initial Finding</Label>
                                    <Input style={{ fontSize: 17, color: 'black' }} value={this.state.initialfinding} onChangeText={(e) => this.setState({ initialfinding: e })} />
                                </Item>
                                <View style={{ height: 70, marginBottom: 20 }}>
                                    <Item stackedLabel style={{ height: 120, marginBottom: 5 }}>
                                        <Label>Email To
    <Text style={{ color: 'red' }}>
                                                (Note : Enter semicolon separate email address with no spaces)
                         </Text></Label>
                                        <Input style={{ fontSize: 17, color: 'black' }} value={this.state.emailto} onChangeText={(e) => this.setState({ emailto: e })} />
                                    </Item>
                                </View>
                                <View style={{ height: 70, marginBottom: 20, marginTop: 40 }}>
                                    <Item stackedLabel style={{ height: 120, marginBottom: 5 }}>
                                        <Label>Email CC
                       <Text style={{ color: 'red' }}>
                                                (Note : Enter semicolon separate email address with no spaces)
                       </Text></Label>
                                        <Input style={{ fontSize: 17, color: 'black' }} value={this.state.emailcc} onChangeText={(e) => this.setState({ emailcc: e })} />
                                    </Item>
                                </View>
                            </Form>
                            <View style={{ position: 'relative', bottom: 10, marginTop: 30 }}>
                                <Button block danger
                                    style={{ justifyContent: 'center', }}
                                    onPress={this.Floatingbutton.bind(this)} >
                                    <Text>Update</Text>
                                </Button>
                            </View>
                        </Container>
                    </Content>
                    {(this.state.saved === 1) ?
                        Toast.show({
                            zindex: 1,
                            text: "Ticket Successfuly Updated",
                            duration: 3000,
                            position: "bottom",
                            type: "success"
                        })
                        :
                        null
                    }
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
export default connect(mapStateToProps, null)(Edit);
