import React from "react";
import { AppRegistry, Image, StatusBar, StyleSheet } from "react-native";
import { Department, getCustomerType, getPriority, getInitiotor, getProduct, getRequesttype } from '../store/Action/action'
import {
    Button, Text, Container, List, ListItem, Content, Icon, Left, Right
} from "native-base";
import { connect } from 'react-redux';
const menuItems = [
    {
        name: "Home",
        route: "Home",
        icon: "home",
    },
    {
        name: "Wallboard",
        route: "Wallboard",
        icon: "paper",
    },
    {
        name: "Setup",
        route: "Setup",
        icon: "md-settings",
    },
    {
        name: "Ticket",
        route: "Ticket",
        icon: "md-link",
    },
    {
        name: "Meeting",
        route: "Meeting",
        icon: "md-person",
    },
];

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.onMenuPress = this.onMenuPress.bind(this);
        this.state = { currentPage: '', Departments: [] };
    }
    componentDidUpdate() {
        this.render();
    }
    onMenuPress = (item) => {
        this.setState({ currentPage: item });
        this.forceUpdate();
        if (item == 'Wallboard') {
            this.props.navigation.navigate("Wallboard");
            this.setState({ currentPage: item })
            this.forceUpdate();
            setTimeout(() => {
                console.log("state", this.state.currentPage)
            }, 1000);
        }
        else if (item == "Home") {
            this.setState({ currentPage: item })
            this.props.navigation.navigate("Home")
            this.forceUpdate();
            setTimeout(() => {
                console.log("state", this.state.currentPage)
            }, 1000);
        }
        else if (item == "Setup") {
            console.log("Setup");
            this.setState({ currentPage: item })
            this.props.navigation.navigate("Setup")
            setTimeout(() => {
                console.log("state", this.state.currentPage)
            }, 2000);
        }
        else if (item == "Meeting") {
            console.log("Meeting");
            this.props.navigation.navigate("Meeting")
        }
        else if (item == "Ticket") {
            console.log("Ticket");
            this.props.isDepartment();
            this.props.isgetCustomerType();
            this.props.isgetPriority();
            this.props.isgetInitiotor();
            this.props.isgetProduct();
            this.props.isgetRequesttype();
            this.props.navigation.navigate("Ticket")
        }
        else if (item == "Report") {
            console.log("Report");
            this.props.navigation.navigate("Report")
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Image
                        style={{ width: 260, height: 85, margin: 10 }}
                        source={require('../images/cybernet1.png')}
                    />
                    <List
                        dataArray={menuItems}
                        renderRow={item =>
                            <ListItem style={this.state.currentPage == item.name ? styles.activeMenuItem : styles.menuItem} button onPress={() => this.onMenuPress(item.name)}>
                                <Icon name={item.icon} style={{ left: 10 }} />
                                <Text style={{ left: 27 }}>
                                    {item.name}
                                </Text>
                            </ListItem>
                        }
                    />
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEEEE",
        height: 30,
        flex: 1,
        justifyContent: 'center',
    },
    menuItem: {
        height: 50,
        // fontSize: 20,
        // color: 'red',
        backgroundColor: "#EEEEEE",
        borderBottomWidth: 1,
        borderColor: '#5B686E',
    },
    activeMenuItem: {

        height: 50,
        backgroundColor: "#C62828",
        borderBottomWidth: 1,
        borderColor: '#5B686E',
        // color:'white'
    },

    st: {
        left: 15,
        marginLeft: 30
    }

})



const mapStateToProps = (state) => {

    return {
        CustomerType: state.root.CustomerTyp,
        Department: state.root.Depart,
        PriorityData: state.root.Prioty,
        InitiatorData: state.root.Initiate,
        ProductData: state.root.Produc,
        RequestTypeData: state.root.Reques,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isDepartment: () => {
            dispatch(Department())
        },
        isgetCustomerType: () => {
            dispatch(getCustomerType())
        },
        isgetPriority: () => {
            dispatch(getPriority())
        },
        isgetInitiotor: () => {
            dispatch(getInitiotor())
        },
        isgetProduct: () => {
            dispatch(getProduct())
        },
        isgetRequesttype: () => {
            dispatch(getRequesttype())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);