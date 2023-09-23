import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { Component } from 'react';

class App extends Component {

    render(){

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#000',
                alignItems: 'center',
                paddingTop: 80,
            },
        });

        return (
            <View style={styles.container}>
                <Logo size={270}/>
                <Text style={{color: '#FFEB3B'}}>VaiteBet</Text>
                <Text style={{color: '#FFEB3B', paddingBottom: 50}}>fala dele!!</Text>
                <Botao largura={200} altura={100}/>
                <StatusBar style="auto"/>
            </View>
        );
    }
}

export default App;

class Logo extends Component{

    render(){
        return (
            <Image
                source={require('./imagens/logo_transparent.png')}
                style={{width: this.props.size, height: this.props.size}}
            />
        );
    }
}

class Botao extends Component{

    render(){
        return (
            <Button
                title="Entrar"
                color='#FFEB3B'
            />
        );
    }
}