import { Component } from 'react';
import Usuario from '../objetos/usuario';
import { Text } from 'react-native';

class Saldo extends Component {
    render() {
        return (
            
                <Text style={{ color: '#FFEB3B' }}>
                    Seu saldo atual:{' '}
                    <Text style={{ fontWeight: 'bold' }}>{Usuario.Saldo}</Text>
                </Text>
            
        );
    }
}

export default Saldo