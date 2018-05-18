import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, Text, Content, Icon, Card, CardItem, Body, H2, Form, Label, Input, Item,ListItem, CheckBox ,Right} from 'native-base';
import SideBar from './Sidebar';
import Pocdetails from './Pocdetails';
import { connect } from 'react-redux';
import { StyleSheet, Alert, View, Picker } from 'react-native';
class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initiator: 0,
            initiatorid:0,
            TicketInitiatorName:'',
            CustomerType: 0,
            CustomerTypeid: 0,
            CustomerTypename: '',
            Customer: 0,
            Customername:'',
          
            Address: 0,
            Addressid: 0,
            CircuitType: '',
            Product: 0,
            Productid: 0,
            PreRequisitename:'',
            PreRequisiteid:'',
            Productname:'',
            cam: '',
            Department: 0,
            Departmentid: 0,
            DepartmentName:'',
            ProblemCategory: 0,
            ProblemCategoryid: null,
            Title:'',
            initialfinding:'',
            emailto:'',
            emailcc:'',
            Priority: 0,
            Priorityid: 0,
            RequestType: 0,
            RequestTypeid: 0,
            Contact: 3,
            level:0,
            levelid:null,
            Assignto:0,
            Assigntoid:null,
            GetInitiate:[],
            GetCustomerType: [],
            GetCustomer: [],
            GetAddress: [],
            GetProduct: [],
            GetRequestType: [],
            GetDepartment: [],
            GetProblemCategory: [],
            GetPriority: [],
            GetLevel:[],
            GetAssignto:[],
            GetPreRequisite:[],
        
            // checked:false,
           BridgeNotAccessible: false,
           BrowsingIssue: false,
           EthernetAlarm: false,
           FiberAlarn: false,
           LinkDown: false,
           PingDrops: false,
           POEIssue: false,
           RouterIssue: false,
           FiberBreak:false,
           MCIssue:false,
            GetBridgeNotAccessibleId:'',
            GetBrowsingIssue: '',
            GetEthernetAlarm: '',
            GetFiberAlarn: '',
            GetLinkDown: '',
            GetPingDrops: '',
            GetPOEIssue: '',
            GetRouterIssue: '',
            GetFiberBreak:'',
            GetMCIssue:'',
            GetallPreRequisite:'',
            POCName:'',
            POCEmail:'',
            POCContact:'',
            PrerequisiteId:'',
            TicketMasterId:'',
            Filepath:'',

           

        }
        // console.log("val 1",this.props.navigation.state.params.val);
        // console.log("pre",this.props.navigation.state.params.pre);
      
        // console.log("emailcc",this.props.navigation.state.params.emailcc);
        // console.log("emailto",this.props.navigation.state.params.emailto);
        // console.log("getallid",this.props.navigation.state.params.getid);
        // console.log("getallid",this.props.navigation.state.params.getid[0].CustomerTypeId);
        // console.log("getallid",this.props.navigation.state.params.getid[0].ClientID);
        // console.log("getallid",this.props.navigation.state.params.getid[0].ClientDetailId);
        // console.log("RequestTypeId",this.props.navigation.state.params.getid[0].RequestTypeId);
        // console.log("CategoryId",this.props.navigation.state.params.getid[0].CategoryId);
        // console.log("PocDetail",this.props.navigation.state.params.PocDetail);
        this.toggle=this.toggle.bind(this);
           
        
        let ar=[];
        let ar1=[];
        let prereq=this.props.navigation.state.params.pre;

            // console.log("prereq",prereq);
            for(var i=0;i<prereq.length;i++){

                ar.push(prereq[i].PrerequisiteId);
                ar1.push(prereq[i].Prerequisite);

            }
            console.log("ar",ar);
            console.log("ar1",ar1);
          
        // this.getallitem=this.getallitem.bind(this);        
        // ClientID
        setTimeout(() => {
            this.setState({
            
                TicketMasterId:this.props.navigation.state.params.val.TicketMasterId,
                PrerequisiteId:ar,
                initiator:this.props.navigation.state.params.val.InitiatorId,
                initiatorid:this.props.navigation.state.params.val.InitiatorId,
                TicketInitiatorName:this.props.navigation.state.params.val.TicketInitiatorName,
                CustomerType:this.props.navigation.state.params.getid[0].CustomerTypeId,
                CustomerTypeid:this.props.navigation.state.params.getid[0].CustomerTypeId,
                CustomerTypename:this.props.navigation.state.params.val.CustomerType,
                Customer:this.props.navigation.state.params.getid[0].ClientID,
                Customername:this.props.navigation.state.params.val.Customer,
                Address:this.props.navigation.state.params.getid[0].ClientDetailId,
                ProblemCategory:this.props.navigation.state.params.getid[0].CategoryId,
                Title:this.props.navigation.state.params.val.TicketTitle,
                emailto:this.props.navigation.state.params.emailto,
                emailcc:this.props.navigation.state.params.emailcc,
                initialfinding:this.props.navigation.state.params.getid[0].Description,
                Product: this.props.navigation.state.params.val.ProductId,
                Productid: this.props.navigation.state.params.val.ProductId,
                Productname:this.props.navigation.state.params.val.Product,
                PreRequisitename:ar1,
                PreRequisiteid:ar,
                Department:this.props.navigation.state.params.val.TicketDepartmentId,
                Departmentid:this.props.navigation.state.params.val.TicketDepartmentId,
                DepartmentName:this.props.navigation.state.params.val.Department,
                RequestType:this.props.navigation.state.params.getid[0].RequestTypeId,  
                POCName:this.props.navigation.state.params.PocDetail[0].POCName,  
                POCEmail:this.props.navigation.state.params.PocDetail[0].POCEmail,  
                POCContact:this.props.navigation.state.params.PocDetail[0].POCContact,  
                
                Priority:this.props.navigation.state.params.val.TicketPriorityId,
                GetCustomerType: this.props.CutomerTypeData,
                GetProduct: this.props.ProductData,
                GetRequestType: this.props.RequestTypeData,
                GetDepartment: this.props.DepartmentData,
                GetPriority: this.props.PriorityData,
                GetInitiate: this.props.InitiatorData

            })
            
            for(var i=0;i<ar1.length;i++){
                console.log("PreRequisitename",this.state.PreRequisitename);
            if(this.state.PreRequisitename[i]=='Bridge Not accessible'){
                this.setState({
                    BridgeNotAccessible:true
                })
            }

            if(this.state.PreRequisitename[i]=='Browsing Issue'){
                this.setState({
                    BrowsingIssue:true
                })
            }

            if(this.state.PreRequisitename[i]=='Ethernet Alarm'){
                this.setState({
                    EthernetAlarm:true
                })
            }

            if(this.state.PreRequisitename[i]=='Fiber Alarn'){
                this.setState({
                    FiberAlarn:true
                })
            }

            if(this.state.PreRequisitename[i]=='Link Down'){
                this.setState({
                    LinkDown:true
                })
            }

            if(this.state.PreRequisitename[i]=='Ping Drops'){
                this.setState({
                    PingDrops:true
                })
            }

            if(this.state.PreRequisitename[i]=='POE Issue'){
                this.setState({
                    POEIssue:true
                })
            }

            if(this.state.PreRequisitename[i]=='Router Issue'){
                this.setState({
                    RouterIssue:true
                })
            }
            if(this.state.PreRequisitename[i]=='Fiber Break'){
                this.setState({
                    FiberBreak:true
                })
            }
            if(this.state.PreRequisitename[i]=='MC Issue'){
                this.setState({
                    MCIssue:true
                })
            }
        }
        }, 500);
    
        setTimeout(() => {
            this.forceUpdate();

            // console.log("CustomerType data", this.state.GetCustomerType)
            // console.log("ProductData data", this.state.GetProduct)
            // console.log("GetRequestType data", this.state.GetRequestType)
            // console.log("GetDepartment data", this.state.GetDepartment)
            // console.log("PriorityData data", this.state.GetPriority)
            // console.log("InitiatorData data", this.state.GetInitiate)

        }, 1000);


        

setTimeout(() => {


    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetCustomer?CustomerTypeId=' + this.state.CustomerType)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log("c", responseJson);
        console.log("this.state.Customer Type",this.state.CustomerType);
        var q = JSON.parse(responseJson.d);
        console.log("Customer ", q)
      
            this.setState({GetCustomer: q 
          })

          return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetCustomerAddress?ClientID='+this.state.Customer)
                .then((response) => response.json())
                .then((responseJson) => {
                    // console.log("c", responseJson);
                    var q = JSON.parse(responseJson.d);
                    // console.log("Address", q)
                    // console.log("Client ID 2 ",this.state.Customer)
                    // console.log("this.state.Customer",this.state.Customer);
                        this.setState({
                          
                            GetAddress: q,
                           
                        }) 
    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetServiceCategory?DepartmentId='+this.state.Department)
    .then((response) => response.json())
    .then((responseJson) => {
        // console.log("Service Category ", responseJson);
        var b = JSON.parse(responseJson.d);
        // console.log("Service Category ", b);
        
        this.setState({ GetProblemCategory: b})
        console.log("Client ID ",this.state.Customer)

        return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetPreRequisite?ProductId=' +this.state.Product)
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    // console.log("c", responseJson);
                                    var b = JSON.parse(responseJson.d);
                                    console.log("Get PreRequisite", b);
                               
                                        this.setState({
                                            GetPreRequisite:b
                                            // GetAddress: b,
                                           
                                        })

                                   


                                })

        
})



})







})
.catch((error) => {
console.error(error);
});

}, 500);


    }

   

        
    Floatingbutton() {


        console.log("update BridgeNotAccessible",this.state.BridgeNotAccessible);
        console.log("updateBrowsingIssue",this.state.BrowsingIssue);
        console.log("update EthernetAlarm",this.state.EthernetAlarm);
        console.log("update FiberAlarn",this.state.FiberAlarn);
        console.log("updateLinkDown",this.state.LinkDown);
        console.log("update PingDrops",this.state.PingDrops);
        console.log("update POEIssue",this.state.POEIssue);
        console.log("update FiberBreak",this.state.FiberBreak);
        console.log("update MCIssue",this.state.MCIssue);

      


        console.log("update initiator",this.state.initiator);
        console.log("update CustomerType",this.state.CustomerType);
        console.log("update Customer",this.state.Customer);
        console.log("update Address",this.state.Address);
        console.log("update Product",this.state.Product);
        console.log("update Department",this.state.Department);
        console.log("update ProblemCategory",this.state.ProblemCategory);
        console.log("update Priority",this.state.Priority);
        console.log("update RequestType",this.state.RequestType);
        console.log("update Contact",this.state.Contact);
        console.log("update Title",this.state.Title);
        console.log("update Description",this.state.initialfinding);
        console.log("update emailto",this.state.emailto);
        console.log("update emailcc",this.state.emailcc);

           
                let arr=[]


                console.log("GetPreRequisite",this.state.GetPreRequisite);
                console.log("PreRequisiteid for search result",this.state.PreRequisiteid);
                console.log("PreRequisiteid for search result length",this.state.PreRequisiteid.length);
               
                for(var i=0;i<this.state.GetPreRequisite.length;i++){

                    for(var j=0;j<this.state.PreRequisiteid.length;j++){
                        
                    if(this.state.PrerequisiteId[j]==this.state.GetPreRequisite[i].Id){
                       
                        arr.push(this.state.PreRequisiteid);
                        // console.log("array if match",arr);
                     } }
                }
                console.log("arr",arr);
                console.log("PreRequisiteid",this.state.PreRequisiteid);

                let pl;
            if(this.state.GetBridgeNotAccessibleId!=='' || this.state.GetBrowsingIssue!=='' || 
            this.state.GetEthernetAlarm!=='' ||  this.state.GetFiberAlarn!=='' || 
            this.state.GetLinkDown!=='' ||  this.state.GetPingDrops!=='' || 
            this.state.GetPOEIssue!=='' ||  this.state.GetRouterIssue!=='' || 
            this.state.GetFiberBreak!=='' ||  this.state.GetMCIssue!=='' ){
                
            }

            // console.log("this.state.GetBrowsingIssue",this.state.GetBrowsingIssue)
             let a1= this.state.GetBridgeNotAccessibleId.toString();
             let a2= this.state.GetBrowsingIssue.toString();
             let a3= this.state.GetEthernetAlarm.toString();
             let a4= this.state.GetFiberAlarn.toString();
             let a5= this.state.GetLinkDown.toString();
             let a6= this.state.GetPingDrops.toString();
             let a7= this.state.GetPOEIssue.toString();
             let a8= this.state.GetRouterIssue.toString();
             let a9= this.state.GetFiberBreak.toString();
             let a10= this.state.GetMCIssue.toString();

             if(a1!==""){
                 arr.push(a1);
            
                }
                if(a2!==""){
                    arr.push(a2);

                }
                if(a3!==""){
                    arr.push(a3);
                }
                if(a4!==""){
                    arr.push(a4);
                }
                if(a5!==""){
                    arr.push(a5);
                }
                if(a6!==""){
                    arr.push(a6);
                }
                if(a7!==""){
                    arr.push(a7);
                }
                if(a8!==""){
                    arr.push(a8);
                }
                if(a9!==""){
                arr.push(a9);
                }
                if(a10!==""){
                arr.push(a10);
                }
                
             
            //    console.log(arr);
               let mn= arr.toString();
                // console.log("GetallPreRequisite To string",mn);
                this.setState({
                    GetallPreRequisite:mn
                })

                console.log("GetallPreRequisite",this.state.GetallPreRequisite);

               

               
                let POCDetail={
                    POCName:this.state.POCName,
                    POCEmail:this.state.POCEmail,
                    POCContact:this.state.POCContact
                }
            



                let ee=[];
                ee.push(POCDetail);
             
                let PocdetailString=JSON.stringify(ee);

               
              

              
          
            
                let TicketMaster={
                    ClientDetailId: this.state.Address.toString(),
                    ProductId: this.state.Product.toString(),
                    InitiatorId: this.state.initiator.toString(),
                    AssigneeId:null,
                    DepartmentId: this.state.Department.toString(),
                    PriorityId: this.state.Priority.toString(),
                    StatusId:1,
                    RequestModeId:"3",
                    RequestTypeId: this.state.RequestType.toString(),
                    IsAssigned:false,
                    Tittle:this.state.Title,
                    Description:this.state.initialfinding,
                    CategoryId: this.state.ProblemCategory.toString(),
                    LevelId:null,
                  
                }
                let strr=JSON.stringify(TicketMaster);
                
                console.log("Ticket Master ID",this.state.TicketMasterId);
                console.log("Ticket Master",strr);
                console.log("PocdetailString",PocdetailString);
                console.log("GetallPreRequisite To string",mn);
                console.log("EmailTo",this.state.emailto)
                console.log("EmailCC",this.state.emailcc);
                console.log("File Path",this.state.Filepath);

 console.log("API HIt",'http://192.168.61.33:5001/wcf/TicketService.svc/ApiSaveTicket?TicketMasterId='+this.state.TicketMasterId+'&TicketMaster='+strr+
                '&Ticket_EmailTo='+this.state.emailto+'&Ticket_EmailCC='+this.state.emailcc+'&FilePath='+this.state.Filepath+'&POC='+PocdetailString+
                    '&Prerequisite='+mn);
return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiSaveTicket?TicketMasterId='+this.state.TicketMasterId+'&TicketMaster='+strr+
        '&Ticket_EmailTo='+this.state.emailto+'&Ticket_EmailCC='+this.state.emailcc+'&FilePath='+this.state.Filepath+'&POC='+PocdetailString+
            '&Prerequisite='+mn)
        .then((response) => response.json())
     .then((responseJson) => {
       console.log(responseJson);
       console.log("Congratulation")
      
     
     })
     .catch((error) => {
       console.error(error);
     });
               
              
                
               
        setTimeout(() => {
            let ob = {
                InitiatorId: this.state.initiator,
                CustomerType: this.state.CustomerType,
                Customer: this.state.Customer,
                // Address: this.state.Address,
                ClientDetailId: this.state.Address,
                // Product: this.state.Product,
                ProductId: this.state.Product,
                DepartmentId: this.state.Department,
                levelId:this.state.level,
                AssignId:this.state.Assignto,
                CategoryId: this.state.ProblemCategory,
                PriorityId: this.state.Priority,
                StatusID:1,
                RequestModeId:3,
                IsAssigned:false,
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
                FiberBreak:this.state.FiberBreak,
                MCIssue:this.state.MCIssue,
                GetallPreRequisite:mn,
             
               
    
    
    
    
            }
           
        }, 500);
       
        // this.props.navigation.navigate("Pocdetails",
        // {TicketMasterStrings:TicketMaster,GetallPreRequisite:mn,PocdetailStrings:PocdetailString,Title:this.state.Title});
       
    }
    fun(val) {
        console.log("Id selected", val);
    }

    toggle(event,val, buttonId) {

        this.setState({checked: !this.state.checked});
        console.log("index",buttonId)
        console.log("Event",event)
        console.log("value",val);
        console.log("checked state",this.state.checked);
        //console.log(this)


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

            
        
        // console.log("Problem category title",this.state.Title);
        // console.log("preid ",this.state.PreRequisiteid);
        // console.log("client id ",this.state.Customer);
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

                    








                        <Container style={{ height:1890}}>

                            <Text style={{ left: 15, fontSize: 20 }}>Initiator</Text>
                            <Picker selectedValue={this.state.initiator}
                                onValueChange={(itemValue, itemIndex) => {
                                  
                                    if(itemValue!=0){
                                        this.setState({ initiator: itemValue,
                                            initiatorid:itemValue.toString() })
                                        }
                                   
                                }
                                }>
                                  {/* <Picker.Item label={""} value={this.state.initiator} /> */}
                                {this.state.GetInitiate.map((val, index) => {

                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id}  />

                                    )

                                }
                                )
                                }
                                </Picker>



                            








                            <Text style={{ left: 15, fontSize: 20 }}>Customer Type</Text>
                       




                                <Picker selectedValue={this.state.CustomerType}
                                    onValueChange={(itemValue) => {

                                        
                                    

                                        this.setState({ CustomerType: itemValue })
                                    
                                        // console.log("Customer type item value", itemValue)
                                        if (itemValue !== 0) {
                                            this.setState({ CustomerType: itemValue,
                                                CustomerTypeid:itemValue.toString() })

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

                                                            // }, 500);

                                                        })  
                                                })
                                                .catch((error) => {
                                                    console.error(error);
                                                });
                                        }
                                        
                                    }}>




                                    {/* <Picker.Item label="" value={this.state.CustomerType} /> */}
                                    {this.state.GetCustomerType.map((val, index) => {

                                        return (
                                            <Picker.Item key={index} label={val.Value} value={val.Id} 
                                            // onValueChange={() => this.setState({ Department: val.Id })} 
                                            />

                                        )

                                    }
                                    )
                                    }

                                </Picker> 




                           





                            <Text style={{ left: 15, fontSize: 20 }}>Customer</Text>

                            <Picker selectedValue={this.state.Customer}
                                onValueChange={(itemValue) => {
                                    // console.log("edit customer",this.state.Customer)
                                     if(itemValue!=0){
                                            this.setState({ Customer: itemValue,
                                                Customerid:itemValue.toString() })
                                    this.fun.bind(this);
                                    console.log("Customerid", itemValue)
                                    console.log("Customerid", this.state.Customer)
                                    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetCustomerAddress?ClientID=' + itemValue)
                                        .then((response) => response.json())
                                        .then((responseJson) => {
                                            // console.log("c", responseJson);
                                            var b = JSON.parse(responseJson.d);
                                            // console.log("Get Address", b);
                                         
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

                                {/* <Picker.Item label={this.state.Customername} value={this.state.Customer}/> */}
                                {this.state.GetCustomer.map((val, index) => {
                                    //   console.log(val);
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )

                                }
                                )
                                }

                            </Picker>






                            <Text style={{ left: 15, fontSize: 20 }}>Address</Text>



                            <Picker
                                selectedValue={this.state.Address}
                                onValueChange={(itemValue) => {

                                     // if(itemValue!=0){
                                    //     this.setState({ initiator: itemValue,
                                    //         initiatorid:itemValue.toString() })
                                    //     }
                                    // else if(itemValue==0) {
                                    //     this.setState({
                                    //         initiator:null
    
                                    //     })}
                                    if(itemValue!=0){
                                        this.setState({ Address: itemValue,
                                            Addressid:itemValue.toString() })
                                        
                                   
                                    console.log("Address id ", itemValue)
                                    // console.log("State address id", this.state.Address)
                                    if(itemValue!==0){
                                    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetPOCDetails?clientDetailID=' + itemValue)
                                        .then((response) => response.json())
                                        .then((responseJson) => {
                                            console.log("c", responseJson);
                                            var b = JSON.parse(responseJson.d);
                                            console.log("Get POC DEtail", b);
                                            for(var i=0;i<b.length;i++){
                                            this.setState({
                                                POCName:b[i].POCName,
                                                POCEmail:b[i].POCEmail,
                                                POCContact:b[i].POCContact
                                            })

                                        }
                                            


                                        })
                                        .catch((error) => {
                                            console.error(error);
                                        });
                                    }
                                   
                                    }
                                    
                                }}>



                               


                                    {/* <Picker.Item label="Select Option " value={0} /> */}
                                {this.state.GetAddress.map((val, index) => {
                                    //   console.log(val);
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )

                                }
                                )
                                }

                            </Picker>



                            {/* <Text style={{ left: 15, fontSize: 20 }}>Circuit Type</Text>
<Picker selectedValue={this.state.CircuitType}
    onValueChange={(itemValue, itemIndex) => this.setState({ CircuitType: itemValue })}>
    <Picker.Item label="Java" value="java" />
<Picker.Item label="JavaScript" value="js" />

</Picker> */}

            {/* <View style={{flex:1,height:50,backgroundColor:'#B71C1C'}} >
                <Text style={{color:'white',fontSize:20,fontWeight:'bold',padding:5}}>
                    Customer Address POC Details
                    </Text>

                 </View>


           
             <Item disabled stackedLabel>
             <Label>POC Name </Label>
            <Input value={this.state.POCName}/>
           
          </Item>


          <Item disabled stackedLabel>
          <Label>POC Email </Label>
            <Input disabled value={this.state.POCEmail}/>
           
           
          
          </Item>



          <Item disabled stackedLabel>
          <Label>POC Contact </Label>
            <Input disabled value={this.state.POCContact}/>
            
          </Item> */}
         


                            <Text style={{ left: 15, fontSize: 20 }}>Product</Text>
                            <Picker selectedValue={this.state.Product}
                                onValueChange={(itemValue, itemIndex) => {
                                    
                                    
                                    // console.log("product edit state",this.state.Product)
                                    // console.log("productid edit state",this.state.Productid)
                                    // console.log("productid edit itemvalue",itemValue)
                                   

                                         if(itemValue!=0){
                                        this.setState({ Product: itemValue,
                                            Productid:itemValue.toString() })
                                       

                                return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetPreRequisite?ProductId=' + itemValue)
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    console.log("c", responseJson);
                                    var b = JSON.parse(responseJson.d);
                                    console.log("Get PreRequisite", b);
                                    console.log("productid edit state",this.state.Productid)
                                    console.log("productid edit itemvalue",itemValue)
                                        this.setState({
                                            GetPreRequisite:b
                                            // GetAddress: b,
                                           
                                        })

                                   


                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                            }
                            

                        }}>



                                
{/*                                 
                                }}> */}
                               
                               
                               
                               
                               
                               
                               
                               
                                {/* <Picker.Item label={""} value={this.state.Product} /> */}
                                {this.state.GetProduct.map((val, index) => {
                                    //   console.log(val);
                                    return (




                                        <Picker.Item key={index} label={val.Value} value={val.Id} />


                                    )

                                }
                                )
                                }

                            </Picker>
                            <Text style={{ left: 40, fontSize: 26,margin:5 ,color:'black',fontWeight:'bold' }}>Pre Requisite</Text>


                                {(this.state.Product!==0 && this.state.Product!==3)
                        

                                ?
                                
                                <View>
                                <ListItem>
                            <CheckBox checked={this.state.BridgeNotAccessible}
                                onPress={() =>{
                                     this.setState({ BridgeNotAccessible: !this.state.BridgeNotAccessible })
                                     setTimeout(() => {
                                         


                                     console.log("pre requistes",this.state.GetPreRequisite)
                                     if(this.state.BridgeNotAccessible===true){
                                         for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                            if( this.state.GetPreRequisite[i].Value=='Bridge Not accessible'){
                                               
                                             console.log("Bridge",this.state.GetPreRequisite[i]);
                                                this.setState({
                                                    GetBridgeNotAccessibleId:this.state.GetPreRequisite[i].Id
                             
                                                })
                                                console.log("state brigth",this.state.GetBridgeNotAccessibleId);
                                            }
                                         }
                                     }
                                    }, 500);  }
                            
                                    
                                    
                                    }
                                     checked={this.state.BridgeNotAccessible}

                                  />
                            <Body>
                                <Text>Bridge Not Accessible</Text>
                            </Body>
                        </ListItem>

                        
                        <ListItem>
                            <CheckBox checked={this.state.BrowsingIssue}
                                 onPress={() =>{
                                    this.setState({ BrowsingIssue: !this.state.BrowsingIssue })
                                    setTimeout(() => {
                                        
                                        

                                    
                                    if(this.state.BrowsingIssue===true){
                                        for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                           if( this.state.GetPreRequisite[i].Value=='Browsing Issue'){
                                              
                                            // console.log("Bridge",this.state.GetPreRequisite[i]);
                                               this.setState({
                                                   GetBrowsingIssue:this.state.GetPreRequisite[i].Id
                            
                                               })
                                               console.log("state brigth",this.state.GetBrowsingIssue);
                                           }
                                        }
                                    }
                                   }, 500);  }
                           
                                   
                                   
                                   }
                                    checked={this.state.BrowsingIssue}
                            />
                            <Body>
                                <Text>Browsing-Issue</Text>
                            </Body>
                        </ListItem>


                                <ListItem>
                            <CheckBox checked={this.state.EthernetAlarm}
                               onPress={() =>{
                                this.setState({ EthernetAlarm: !this.state.EthernetAlarm })
                                setTimeout(() => {
                                    


                                
                                if(this.state.EthernetAlarm===true){
                                    for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                       if( this.state.GetPreRequisite[i].Value=='Ethernet Alarm'){
                                          
                                        // console.log("Bridge",this.state.GetPreRequisite[i]);
                                           this.setState({
                                               GetEthernetAlarm:this.state.GetPreRequisite[i].Id
                        
                                           })
                                           console.log("state Ethernet Alarm",this.state.GetEthernetAlarm);
                                       }
                                    }
                                }
                               }, 500);  }
                       
                               
                               
                               }
                                checked={this.state.EthernetAlarm}
                            />
                            <Body>
                                <Text>Ethernet Alarm</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.FiberAlarn}
                                 onPress={() =>{
                                    this.setState({ FiberAlarn: !this.state.FiberAlarn })
                                    setTimeout(() => {
                                        
    
    
                                    
                                    if(this.state.FiberAlarn===true){
                                        for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                           if( this.state.GetPreRequisite[i].Value=='Fiber Alarn'){
                                              
                                            // console.log("Bridge",this.state.GetPreRequisite[i]);
                                               this.setState({
                                                   GetFiberAlarn:this.state.GetPreRequisite[i].Id
                            
                                               })
                                               console.log("state Fiber Alarn",this.state.GetFiberAlarn);
                                           }
                                        }
                                    }
                                   }, 500);  }
                           
                                   
                                   
                                   }
                                    checked={this.state.FiberAlarn}
                            />
                            <Body>
                                <Text>Fiber Alarm</Text>
                            </Body>
                        </ListItem>


                        
                                <ListItem>
                            <CheckBox checked={this.state.LinkDown}
                               onPress={() =>{
                                this.setState({ LinkDown: !this.state.LinkDown })
                                setTimeout(() => {
                                    


                                
                                if(this.state.LinkDown===true){
                                    for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                       if( this.state.GetPreRequisite[i].Value=='Link Down'){
                                          
                                        // console.log("Bridge",this.state.GetPreRequisite[i]);
                                           this.setState({
                                               GetLinkDown:this.state.GetPreRequisite[i].Id
                        
                                           })
                                           console.log("state LinkDown",this.state.GetLinkDown);
                                       }
                                    }
                                }
                               }, 500);  }
                       
                               
                               
                               }
                                checked={this.state.LinkDown}
                            />
                            <Body>
                                <Text>Link Down</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.PingDrops}
                               onPress={() =>{
                                this.setState({ PingDrops: !this.state.PingDrops })
                                setTimeout(() => {
                                    


                                
                                if(this.state.PingDrops===true){
                                    for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                       if( this.state.GetPreRequisite[i].Value=='Ping Drops'){
                                          
                                        // console.log("Bridge",this.state.GetPreRequisite[i]);
                                           this.setState({
                                               GetPingDrops:this.state.GetPreRequisite[i].Id
                        
                                           })
                                           console.log("state LinkDown",this.state.GetPingDrops);
                                       }
                                    }
                                }
                               }, 500);  }
                       
                               
                               
                               }
                                checked={this.state.PingDrops}
                            />
                            <Body>
                                <Text>Ping Drops</Text>
                            </Body>
                      
                        </ListItem>
                                <ListItem>
                            <CheckBox checked={this.state.POEIssue}
                               onPress={() =>{
                                this.setState({ POEIssue: !this.state.POEIssue })
                                setTimeout(() => {
                                    


                                
                                if(this.state.POEIssue===true){
                                    for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                       if( this.state.GetPreRequisite[i].Value=='POE Issue'){
                                          
                                        // console.log("Bridge",this.state.GetPreRequisite[i]);
                                           this.setState({
                                               GetPOEIssue:this.state.GetPreRequisite[i].Id
                        
                                           })
                                           console.log("state LinkDown",this.state.GetPOEIssue);
                                       }
                                    }
                                }
                               }, 500);  }
                       
                               
                               
                               }
                                checked={this.state.POEIssue}
                            />
                            <Body>
                                <Text>POE Issue</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.RouterIssue}
                                onPress={() =>{
                                    this.setState({ RouterIssue: !this.state.RouterIssue })
                                    setTimeout(() => {
                                        
    
    
                                    
                                    if(this.state.RouterIssue===true){
                                        for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                           if( this.state.GetPreRequisite[i].Value=='Router Issue'){
                                              
                                            // console.log("Bridge",this.state.GetPreRequisite[i]);
                                               this.setState({
                                                   GetRouterIssue:this.state.GetPreRequisite[i].Id
                            
                                               })
                                               console.log("state LinkDown",this.state.GetRouterIssue);
                                           }
                                        }
                                    }
                                   }, 500);  }
                           
                                   
                                   
                                   }
                                    checked={this.state.RouterIssue}
                            />
                            <Body>
                                <Text>Router Issue</Text>
                            </Body>
                        </ListItem>

                               
                    
                        
                        
                                    </View>
                                
                                :null
                                }



                                  {( this.state.Product===3)
                        

                        ?
                        
                        <View>
                            <ListItem>
                           <CheckBox checked={this.state.BridgeNotAccessible}
                                onPress={() =>{
                                     this.setState({ BridgeNotAccessible: !this.state.BridgeNotAccessible })
                                     setTimeout(() => {
                                         


                                     console.log("pre requistes",this.state.GetPreRequisite)
                                     if(this.state.BridgeNotAccessible===true){
                                         for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                            if( this.state.GetPreRequisite[i].Value=='Bridge Not accessible'){
                                               
                                             console.log("Bridge",this.state.GetPreRequisite[i]);
                                                this.setState({
                                                    GetBridgeNotAccessibleId:this.state.GetPreRequisite[i].Id
                             
                                                })
                                                console.log("state brigth",this.state.GetBridgeNotAccessibleId);
                                            }
                                         }
                                     }
                                    }, 500);  }
                            
                                    
                                    
                                    }
                                     checked={this.state.BridgeNotAccessible}

                                  />
                            <Body>
                                <Text>Bridge Not Accessible</Text>
                            </Body>
                        </ListItem>

                        
                        <ListItem>
                            <CheckBox checked={this.state.BrowsingIssue}
                                 onPress={() =>{
                                    this.setState({ BrowsingIssue: !this.state.BrowsingIssue })
                                    setTimeout(() => {
                                        


                                    
                                    if(this.state.BrowsingIssue===true){
                                        for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                           if( this.state.GetPreRequisite[i].Value=='Browsing Issue'){
                                              
                                            // console.log("Bridge",this.state.GetPreRequisite[i]);
                                               this.setState({
                                                   GetBrowsingIssue:this.state.GetPreRequisite[i].Id
                            
                                               })
                                               console.log("state brigth",this.state.GetBrowsingIssue);
                                           }
                                        }
                                    }
                                   }, 500);  }
                           
                                   
                                   
                                   }
                                    checked={this.state.BrowsingIssue}
                            />
                            <Body>
                                <Text>Browsing-Issue</Text>
                            </Body>
                        </ListItem>


                                <ListItem>
                            <CheckBox checked={this.state.EthernetAlarm}
                               onPress={() =>{
                                this.setState({ EthernetAlarm: !this.state.EthernetAlarm })
                                setTimeout(() => {
                                    


                                
                                if(this.state.EthernetAlarm===true){
                                    for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                       if( this.state.GetPreRequisite[i].Value=='Ethernet Alarm'){
                                          
                                        // console.log("Bridge",this.state.GetPreRequisite[i]);
                                           this.setState({
                                               GetEthernetAlarm:this.state.GetPreRequisite[i].Id
                        
                                           })
                                           console.log("state Ethernet Alarm",this.state.GetEthernetAlarm);
                                       }
                                    }
                                }
                               }, 500);  }
                       
                               
                               
                               }
                                checked={this.state.EthernetAlarm}
                            />
                            <Body>
                                <Text>Ethernet Alarm</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.FiberAlarn}
                                 onPress={() =>{
                                    this.setState({ FiberAlarn: !this.state.FiberAlarn })
                                    setTimeout(() => {
                                        
    
    
                                    
                                    if(this.state.FiberAlarn===true){
                                        for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                           if( this.state.GetPreRequisite[i].Value=='Fiber Alarn'){
                                              
                                            // console.log("Bridge",this.state.GetPreRequisite[i]);
                                               this.setState({
                                                   GetFiberAlarn:this.state.GetPreRequisite[i].Id
                            
                                               })
                                               console.log("state Fiber Alarn",this.state.GetFiberAlarn);
                                           }
                                        }
                                    }
                                   }, 500);  }
                           
                                   
                                   
                                   }
                                    checked={this.state.FiberAlarn}
                            />
                            <Body>
                                <Text>Fiber Alarm</Text>
                            </Body>
                        </ListItem>


                        
                                <ListItem>
                            <CheckBox checked={this.state.LinkDown}
                               onPress={() =>{
                                this.setState({ LinkDown: !this.state.LinkDown })
                                setTimeout(() => {
                                    


                                
                                if(this.state.LinkDown===true){
                                    for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                       if( this.state.GetPreRequisite[i].Value=='Link Down'){
                                          
                                        // console.log("Bridge",this.state.GetPreRequisite[i]);
                                           this.setState({
                                               GetLinkDown:this.state.GetPreRequisite[i].Id
                        
                                           })
                                           console.log("state LinkDown",this.state.GetLinkDown);
                                       }
                                    }
                                }
                               }, 500);  }
                       
                               
                               
                               }
                                checked={this.state.LinkDown}
                            />
                            <Body>
                                <Text>Link Down</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.PingDrops}
                               onPress={() =>{
                                this.setState({ PingDrops: !this.state.PingDrops })
                                setTimeout(() => {
                                    


                                
                                if(this.state.PingDrops===true){
                                    for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                       if( this.state.GetPreRequisite[i].Value=='Ping Drops'){
                                          
                                        // console.log("Bridge",this.state.GetPreRequisite[i]);
                                           this.setState({
                                               GetPingDrops:this.state.GetPreRequisite[i].Id
                        
                                           })
                                           console.log("Ping Drops",this.state.GetPingDrops);
                                       }
                                    }
                                }
                               }, 500);  }
                       
                               
                               
                               }
                                checked={this.state.PingDrops}
                            />
                            <Body>
                                <Text>Ping Drops</Text>
                            </Body>
                      
                        </ListItem>
                                <ListItem>
                            <CheckBox checked={this.state.POEIssue}
                               onPress={() =>{
                                this.setState({ POEIssue: !this.state.POEIssue })
                                setTimeout(() => {
                                    


                                
                                if(this.state.POEIssue===true){
                                    for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                       if( this.state.GetPreRequisite[i].Value=='POE Issue'){
                                          
                                        // console.log("Bridge",this.state.GetPreRequisite[i]);
                                           this.setState({
                                               GetPOEIssue:this.state.GetPreRequisite[i].Id
                        
                                           })
                                           console.log("POE Issue",this.state.GetPOEIssue);
                                       }
                                    }
                                }
                               }, 500);  }
                       
                               
                               
                               }
                                checked={this.state.POEIssue}
                            />
                            <Body>
                                <Text>POE Issue</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.RouterIssue}
                                onPress={() =>{
                                    this.setState({ RouterIssue: !this.state.RouterIssue })
                                    setTimeout(() => {
                                        
    
    
                                    
                                    if(this.state.RouterIssue===true){
                                        for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                           if( this.state.GetPreRequisite[i].Value=='Router Issue'){
                                              
                                            // console.log("Bridge",this.state.GetPreRequisite[i]);
                                               this.setState({
                                                   GetRouterIssue:this.state.GetPreRequisite[i].Id
                            
                                               })
                                               console.log("Router Issue",this.state.GetRouterIssue);
                                           }
                                        }
                                    }
                                   }, 500);  }
                           
                                   
                                   
                                   }
                                    checked={this.state.RouterIssue}
                            />
                            <Body>
                                <Text>Router Issue</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                    <CheckBox checked={this.state.FiberBreak}
                         onPress={() =>{
                            this.setState({ FiberBreak: !this.state.FiberBreak })
                            setTimeout(() => {
                                


                            
                            if(this.state.FiberBreak===true){
                                for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                   if( this.state.GetPreRequisite[i].Value=='Fiber Break'){
                                      
                                    // console.log("Bridge",this.state.GetPreRequisite[i]);
                                       this.setState({
                                           GetFiberBreak:this.state.GetPreRequisite[i].Id
                    
                                       })
                                       console.log("state Fiber Break",this.state.GetFiberBreak);
                                   }
                                }
                            }
                           }, 500);  }
                   
                           
                           
                           }
                            checked={this.state.FiberBreak}
                    />
                    <Body>
                        <Text>Fiber Break</Text>
                    </Body>
                </ListItem>
                <ListItem>

                    <CheckBox checked={this.state.MCIssue}
                         onPress={() =>{
                            this.setState({ MCIssue: !this.state.MCIssue })
                            setTimeout(() => {
                                


                            
                            if(this.state.MCIssue===true){
                                for(var i=0;i<this.state.GetPreRequisite.length;i++){
                                   if( this.state.GetPreRequisite[i].Value=='MC Issue'){
                                      
                                    // console.log("Bridge",this.state.GetPreRequisite[i]);
                                       this.setState({
                                           GetMCIssue:this.state.GetPreRequisite[i].Id
                    
                                       })
                                       console.log("state GetMCIssue",this.state.GetMCIssue);
                                   }
                                }
                            }
                           }, 500);  }
                   
                           
                           
                           }
                            checked={this.state.MCIssue}
                    />
                    <Body>
                        <Text>MC Issue</Text>
                    </Body>
                </ListItem>
            
                
                
                            </View>
                        
                        :null
                        }



                       
                       
                       
                       

                           











                          






                            <Text style={{ left: 15, fontSize: 20 }}>Department</Text>


                            <Picker selectedValue={this.state.Department}
                                onValueChange={(itemValue) => {

        

                                   

                                        if(itemValue!=0){
                                        this.setState({ Department: itemValue,
                                            Departmentid:itemValue.toString() })
                                  
                                    console.log("item value", itemValue)
                                //  return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiGetServiceCategory?DepartmentId=' + itemValue)
                                //         .then((response) => response.json())
                                //         .then((responseJson) => {
                                //             console.log("c", responseJson);
                                //             var b = JSON.parse(responseJson.d);
                                //             console.log("Service data fetching", b);
                                //             console.log("Department ID",itemValue)  
                                          
                                      
                                        // return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetLevel?DepartmentId=' + itemValue)
                                        //     .then((response) => response.json())
                                        //     .then((responseJson) => {
                                        //         console.log("c", responseJson);
                                        //         var q = JSON.parse(responseJson.d);
                                        //         console.log("Level data Fetching", q)
                                        //         console.log("Level Id",itemValue)
                                             
                                                    



                                           
                                                                // this.setState({
                                                                    
                                                                //     GetProblemCategory: b,
                                                                //     RequestType: itemValue,
                                                                //     GetLevel:q,
                                                                //     level:itemValue,
                                                                    

                                                                // })
                
                                                          


                                                  



                                        // })
                                    //     .catch((error) => {
                                    //         console.error(error);
                                    //     });
                                    
                                        
                                 
                                    // })
                                }

                                
                              
                                    
                                }}
                            
                                >
                                {/* <Picker.Item label={""} value={this.state.Department} /> */}
                                {this.state.GetDepartment.map((val, index) => {
                                    //   console.log(val);


                                    return (



                                        <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )

                                }
                                )
                                }



                           

 </Picker>



 {/* <Text style={{ left: 15, fontSize: 20 }}>Level </Text>
                            <Picker selectedValue={this.state.level}
                                onValueChange={(itemValue, itemIndex) => {


                                       




                                    if(itemValue!=0){
                                        this.setState({ level: itemValue,
                                            levelid:itemValue.toString() })
                                console.log("level id",itemValue);
                                console.log("Department id state",this.state.Department);
                                if(itemValue!==0){
                                return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetAssignee?DepartmentId=' +this.state.Department+'&LevelId='+itemValue)
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    console.log("c", responseJson);
                                    var p = JSON.parse(responseJson.d);
                                    console.log("Assignto data Fetching", p)

                                    this.setState({
                                        GetAssignto:p,
                                        Assignto:itemValue
                                    })

                                })
                                        }
                                    else if(itemValue==0) {
                                        this.setState({
                                            level:null
    
                                        })}

                            }
                            
                            
                            }}>
                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetLevel.map((val, index) => {
                                 
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )

                                }
                                )
                                }

                            </Picker>

                            <Text style={{ left: 15, fontSize: 20 }}>Assign To </Text>
                            <Picker selectedValue={this.state.Assignto}
                                onValueChange={(itemValue, itemIndex) =>{
                                    
                                        if(itemValue!=0){
                                        this.setState({ Assignto: itemValue,
                                            Assigntoid:itemValue.toString() })
                                        }
                                    else if(itemValue==0) {
                                        this.setState({
                                            Assignto:null
    
                                        })}
                                   
                                    
                                    
                                    
                                    }}>
                                <Picker.Item label="Select Option " value={0} />
                                {this.state.GetAssignto.map((val, index) => {
                                  
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )

                                }
                                )
                                }

                            </Picker>  */}






                            <Text style={{ left: 15, fontSize: 20 }}>Problem Category</Text>
                            <Picker selectedValue={this.state.ProblemCategory}
                                onValueChange={(itemValue, itemIndex) => {
                                    
                                 
                                    if(itemValue!=0){
                                        this.setState({ ProblemCategory: itemValue,
                                            
                                         })
                                        }
                                  
                                    
                                    
                                   
                                    
                                    
                                    }}>
                               
                                {this.state.GetProblemCategory.map((val, index) => {
                                   
                                    return (
             <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )

                                }
                                )
                                }

                            </Picker>




                            <Text style={{ left: 15, fontSize: 20 }}>Priority</Text>

                            <Picker selectedValue={this.state.Priority}
                                onValueChange={(itemValue, itemIndex) => {
                                    
                                    if(itemValue!=0){
                                        this.setState({ Priority: itemValue,
                                            Priorityid:itemValue.toString() })
                                        }
                                   
                                    
                                  



                                }}>
                              
                                {this.state.GetPriority.map((val, index) => {
                                   
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )

                                }
                                )
                                }

                            </Picker>




                            <Text style={{ left: 15, fontSize: 20 }}>Request Type</Text>
                            <Picker selectedValue={this.state.RequestType}
                                onValueChange={(itemValue, itemIndex) =>{
                                  
                                    if(itemValue!=0){
                                        this.setState({ RequestType: itemValue,
                                            RequestTypeid:itemValue.toString() })
                                        }
                                  
                                 
                                    
                                    
                                    
                                    }}>
                               
                                {this.state.GetRequestType.map((val, index) => {
                                    
                                    return (
                                        <Picker.Item key={index} label={val.Value} value={val.Id} />

                                    )

                                }
                                )
                                }

                            </Picker>



                            <Text style={{ left: 15, fontSize: 20 }}>Method Of Contact Phone</Text>
                            <Picker selectedValue={this.state.Contact}
                                onValueChange={(itemValue, itemIndex) => this.setState({ Contact: itemValue })}>
                                <Picker.Item label="Phone" value="3" />


                            </Picker>


   <Form>
                     
                     <Item stackedLabel style={{height:80}}>

                         <Label>Title</Label>
                        
                         <Input style={{fontSize:17,color:'black'}} value={this.state.Title} onChangeText={(e) => this.setState({Title:e})} />
                         
                     </Item>
                    
                     <Item stackedLabel style={{height:80}}>
                    
                         <Label>Initial Finding</Label>
                         <Input style={{fontSize:17,color:'black'}} value={this.state.initialfinding} onChangeText={(e) => this.setState({initialfinding:e})} />
                        
                     </Item>

                     <View style={{height:70,marginBottom:20}}>
                   
                     <Item stackedLabel style={{height:120,marginBottom:5}}>
                         <Label>Email To 
                         <Text style={{color:'red'}}>
                          (Note : Enter semicolon separate email address with no spaces)
                         </Text></Label>
                           
                        
                         
                         <Input style={{fontSize:17,color:'black'}} value={this.state.emailto} onChangeText={(e) => this.setState({emailto:e})} />

                  </Item>
                          </View>
                    

                    <View style={{height:70 ,marginBottom:20,marginTop:40}}>
                   
                   <Item stackedLabel style={{height:120,marginBottom:5}}>
                       <Label>Email CC 
                       <Text style={{color:'red'}}>
                       (Note : Enter semicolon separate email address with no spaces)
                       </Text></Label>
                         
                      
                       
                       <Input style={{fontSize:17,color:'black'}} value={this.state.emailcc} onChangeText={(e) => this.setState({emailcc:e})} />

                </Item>
                        </View>
                 </Form>






                            <View style={{ position: 'relative', bottom: 10,marginTop:30 }}>
                            <Button block danger 
                                style={{justifyContent: 'center',}}
                                onPress={this.Floatingbutton.bind(this)} >


                                <Text>Update</Text>


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
    // console.log("@@@",state.root.Depart)
    console.log("!!!",state.root.Initia);
    return {
        DepartmentData: state.root.Depart,
        CutomerTypeData: state.root.CustomerTyp,
        PriorityData: state.root.Prioty,
        InitiatorData: state.root.Initia,
        ProductData: state.root.Produc,
        RequestTypeData: state.root.Reques,

    }
}

//   const mapDispatchToProps = (dispatch) => {
//     return {
//         Department: () => {
//             dispatch(isDepartment())
//         }
//     }
//   }


export default connect(mapStateToProps, null)(Edit);
