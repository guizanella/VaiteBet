import { StyleSheet, View } from 'react-native';
import React from 'react';

import Botao from './coomponentes/botao'
import Input from './coomponentes/input'
import Logo from './coomponentes/logo'

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
    },
});

export default function Cadastro({ navigation }) {

    return (
        <View style={styles.container}>
            <Logo size={270} />
            <Input
                width={250}
                texto='Nome Completo'
            />
            <Input
                width={250}
                texto='Nome de Usuário'
            />
            <Input
                width={250}
                texto='Senha'
                senha={true}
            />
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 130 }}>
                <Botao
                    style={styles.botao}
                    text='Cadastrar'
                    textStyle={styles.textoBotao}
                    func={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}