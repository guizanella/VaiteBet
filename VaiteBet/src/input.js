import { StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#595959',
        height: 42,
        borderRadius: 5,
        marginBottom: 5,
        paddingHorizontal: 12,
        color: 'white'
    }
});

class Input extends Component {

    render() {
        return (
            <TextInput
                style={[styles.input, {width: this.props.width}]}
                placeholder= {this.props.texto}
                secureTextEntry={this.props.senha}
            />
        );
    }
}

export default Input;