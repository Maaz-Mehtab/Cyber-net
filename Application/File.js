import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Button, Header, Body, Left, Right, Text } from 'native-base';
import FilePickerManager from 'react-native-file-picker';
import RNFetchBlob from 'react-native-fetch-blob'
// import * as firebase from 'firebase';

// const Blob = RNFetchBlob.polyfill.Blob;
// const fs = RNFetchBlob.fs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   backgroundColor: '#F5FCFF',
    },
    welcome: {
        // textAlign: 'center',
        padding: 10
    },
    Button: {
        marginBottom: 8,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

class Filing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            fileImages: ''
        }
    }
    analyze() {

    }
    browse() {
        FilePickerManager.showFilePicker(null, (response) => {

            if (response.didCancel) {
                console.log('User cancelled file picker');
            }
            else if (response.error) {
                console.log('FilePickerManager Error: ', response.error);
            }
            else {
                this.setState({
                    file: response
                });
                console.log('Response =>>> ', response.uri);
                // let uploadUri = response.uri;
                // fs.readFile(uploadUri, 'base64')
                //     .then((data) => {
                //         console.log(data,"data")
                //         // axios.post('https://patients-tracker.herokuapp.com/addpatient', data)
                //         .then(() => {
                            
                //         })
                //         .catch((err) => {
        
                //         });
                //     })

            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                            Google Cloud Speech
                        </Text>
                    </Body>
                    {/* <Right>
                        <Button onPress={this.Options.bind(this)}>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                Options
                            </Text>
                        </Button>
                    </Right> */}
                </Header>

                <View style={styles.welcome}>
                    <Button onPress={this.analyze.bind(this)} block success style={styles.Button}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Analyze
                        </Text>
                    </Button>
                    <Button onPress={this.browse.bind(this)} block success style={styles.Button}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Browse
                        </Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default Filing;