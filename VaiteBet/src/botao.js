import { StyleSheet, Text, View, Pressable} from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
    cor: {
        color: '#FFEB3B',
    },
});

class Botao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: ''
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(nome) {
        this.setState({
            nome: nome
        })
    }

    render() {
        return (
            <View>
                <Pressable style={this.props.style} onPress={this.props.func}>
                    <Text style={this.props.textStyle}> {this.props.text} </Text>
                </Pressable>
                <Text style={styles.cor}> {this.state.nome} </Text>
            </View>
        );
    }
}

export default Botao;