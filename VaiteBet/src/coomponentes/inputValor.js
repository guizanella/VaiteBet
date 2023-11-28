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

class InputValor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: ''
        };
    }

    handleChangeText = (text) => {
        this.setState({ valor: text });
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }
    };

    render() {
        return (
            <TextInput
                style={[styles.input, {width: this.props.width}]}
                placeholder={this.props.texto}
                keyboardType={this.props.tipo}
                value={this.state.valor}
                onChangeText={this.handleChangeText}
                onSubmitEditing={() => this.props.func(this.state.valor)}
            />
        );
    }
}

export default InputValor;