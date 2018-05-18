import prompt from 'react-native-prompt-android';
import React, { Component } from 'react';
import { Container, Left, Button, Header, Text, Content, Icon, Card, CardItem, Body, H2 ,Form,Label,Input,Item} from 'native-base';
import SideBar from './Sidebar';
import { StyleSheet, Alert, View, Picker ,AsyncStorage} from 'react-native';
import MenuButton from 'react-native-menu-button'
import PropTypes from 'prop-types'
import Login from './Login';
// import { Actions } from 'react-native-router-flux';
// import ImagePicker from 'react-native-image-picker';
class Headers extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectData:""
        };
      }
      _handleOnSelect (value,par) {
        this.setState({selectData:value})
        console.log("Val",value);
        console.log("par",par);
       if(value==="Logout"){
         console.log("Logout id");
         console.log("Logout");
     
         AsyncStorage.removeItem("Users").then((value)=> console.log("value remove"));
         AsyncStorage.clear().then((value)=> console.log("value remove"));
         console.log("Navigation",this.props.navigation.navigate("Login"));
         this.props.navigation.navigate("Login")
        // Actions.Login();
 
       }
       if(value==="About"){
         console.log("About page");
       }
      }

    //   logout(){
    //     console.log("Logout");
    //     AsyncStorage.removeItem("Users").then((value)=> console.log("value remove"));

    // }
      render() {
        // console.log("red",this.props.navigation.navigate())
        menuGroup= [
          {key:"1",value:"Logout",text:"Logout"},
          {key:"2",value:"About",text:"About"},
         
        ]
       
        return (


            <Container>
            <Content>

                
            <View style={{flex:1,backgroundColor: '#212121',height:60,flexDirection:'row',alignItems:'center'}}>
<View style={{flex:0.2,height:60}}>
{/* <Button transparent style={{width:60,height:60}} onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={{color:'white',fontSize:24}} name="md-menu" />
              </Button> */}
</View>
<View style={{flex:1,height:60,alignItems:'center'}}>

        {/* <Text style={{paddingTop:15,paddingRight:10,fontSize:20,color:'white'}}>
            CYBER NET
            </Text> */}
 </View>
 <View style={{flex:0.2,height:60}}>


{/* <Button transparent style={{width:60,height:60}}>
              <Icon style={{color:'white'}} name="md-more" /> 
              
                </Button> */}
             
           
          <MenuButton  
            buttonStyle={[styles.rightButton]} 
            // Style={{color:'white'}}
            menuGroup={menuGroup}
            onSelect={this._handleOnSelect.bind(this)} 
            optionSelectedStyle={{backgroundColor:"red"}}
          />
       
            
          
        
</View>

    </View>
    

               

     


    </Content>
                </Container>
        )
    }
}
export default Headers;
const styles = StyleSheet.create({
    top:{
      backgroundColor: 'black',
      paddingTop: 20,
      top: 0,
     
      right: 0,
      left: 0,
      borderBottomWidth: 0.5,
      borderBottomColor: '#828287',
      position: 'relative',
      flex:0.2,
      height:60
    },
    text:{
      marginTop:20,
      color:'white',

    },
    rightButton: {
    
      // backgroundColor:'white',
      width: 100,
      height: 60,
      position: 'absolute',
      bottom: 0,
      right: 2,
      padding: 0,
      top:12
    },
  })