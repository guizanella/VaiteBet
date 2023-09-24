import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Botao from './coomponentes/botao'
import Input from './coomponentes/input'
import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 70,
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#FFEB3B',
        marginHorizontal: 5,
        marginVertical: 6
    },
});

export default function Deposito({ navigation }) {

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Saldo />
            <View marginBottom = {40} alignItems = 'center'>
                <Text style={{ color: 'white', fontWeight: 'bold' }} marginTop={100}>
                    Informe o valor do depósito
                </Text>
                <Text style={{ color: 'white' }} marginBottom={10}>
                    (Valor mínimo 30,00 R$)
                </Text>
                <Input
                    width={250}
                    texto='R$ '
                />
            </View>
            <Botao
                style={styles.botao}
                text='Depositar'
            />
        </View>
    );
}