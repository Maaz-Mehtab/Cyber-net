import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native'
import Pie from 'react-native-pie';
import Piee from 'react-native-pie';
import Pieee from 'react-native-pie';
const screenwidh = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const sum = screenheight + screenwidh;
export default class PieDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr1: [],
            arr2: [],
            arr3: [],
            count: []
        }
        setTimeout(() => {
            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiPieChart?symbol=pr')
                .then((response) => response.json())
                .then((responseJson) => {
                    let result = JSON.parse(responseJson.d);
                    return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiPieChart?symbol=pri')
                        .then((response) => response.json())
                        .then((responseJson) => {
                            let result1 = JSON.parse(responseJson.d);
                            return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApiPieChart?symbol=cus')
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    let result2 = JSON.parse(responseJson.d);
                                    let res = []
                                    for (var i = 0; i < result.length; i++) {
                                        res.push(result[i].Count)
                                    }
                                    let res1 = []
                                    for (var i = 0; i < result1.length; i++) {
                                        res1.push(result1[i].Count)
                                    }
                                    let res2 = []
                                    for (var i = 0; i < result2.length; i++) {
                                        res2.push(result2[i].Count)
                                    }
                                    this.setState({
                                        arr1: res,
                                        arr2: res1,
                                        arr3: res2
                                    })
                                })

                        })

                })
                .catch((error) => {
                    console.error(error);
                });
        }, 500);

    }
    render() {
        return (
            <View>

                <View style={{ flex: 1, backgroundColor: '#B71C1C', alignItems: 'center', height: screenheight / 11 }}>
                    <Text style={{ color: 'white', fontSize: sum / 45, paddingTop: 11 }}>
                        Product Wise Ticket Count
            </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.4, flexDirection: 'column', justifyContent: 'center' }}>
                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#1B5E20' }}>

                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> 3G/4G </Text>

                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#F57F17' }}>

                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> Metro Fiber </Text>

                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#BA68C8' }}>

                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> DXX</Text>

                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#01579B' }}>

                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> Email </Text>
                    </View>

                    <View style={{ flex: 0.6, right: 10, paddingVertical: 10 }}>
                        <Pie
                            radius={100}
                            series={this.state.arr1}
                            colors={['#1B5E20', '#F57F17', '#BA68C8', '#01579B']} />
                    </View>
                </View>


                <View style={{ flex: 1, backgroundColor: '#B71C1C', alignItems: 'center', height: screenheight / 11 }}>
                    <Text style={{ color: 'white', fontSize: sum / 45, paddingTop: 11 }}>
                        Priority Wise Ticket Count
            </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.4, flexDirection: 'column', justifyContent: 'center' }}>
                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#43A047' }}>
                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> LOW </Text>
                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#B71C1C' }}>
                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> HIGH </Text>
                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#FDD835' }}>
                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> MEDIUM</Text>
                    </View>
                    <View style={{ flex: 0.6, right: 10, paddingVertical: 10 }}>
                        <Pie
                            radius={100}
                            series={this.state.arr2}
                            colors={['#43A047', '#B71C1C', '#FDD835']} />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#B71C1C', alignItems: 'center', height: screenheight / 11 }}>
                    <Text style={{ color: 'white', fontSize: sum / 45, paddingTop: 11 }}>
                        Customer Wise Ticket Count
            </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.4, flexDirection: 'column', justifyContent: 'center' }}>
                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#01579B' }}>
                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> HBL</Text>
                        <View style={{ marginTop: 5, margin: 5, width: 70, height: 15, backgroundColor: '#AB47BC' }}>
                        </View>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 5 }}> UBL </Text>
                    </View>
                    <View style={{ flex: 0.6, right: 10, paddingVertical: 10 }}>
                        <Pie
                            radius={100}
                            series={this.state.arr3}
                            colors={['#01579B', '#AB47BC']} />
                    </View>
                </View>
            </View>
        )
    }
}
