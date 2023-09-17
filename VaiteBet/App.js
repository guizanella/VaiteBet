import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

class App extends Component {

    render(){

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
            },
        });

        return (
            <View style={styles.container}>
                <Text style={{color: "yellow"}}>VaiteBet</Text>
                <Text style={{color: "yellow"}}>fala dele!!</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
}

export default App;
