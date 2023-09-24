import { StyleSheet, Text, View } from 'react-native';
import React  from 'react';

import Botao from './botao'
import Input from './input'
import Logo from './logo'

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
        marginBottom: 10,
    },
    botaoCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoCadastro: {
        color: '#FFEB3B',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default function Login({ navigation }) {

    return (
        <View style={styles.container}>
            <Logo 
                size={270} 
                margem={50}    
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
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 85 }}>
                <Botao
                    style={styles.botao}
                    text='Entrar'
                    func={() => navigation.navigate('Inicio')}
                />
                <Text style={{ color: 'white' }}>
                    Não possui uma conta?
                </Text>
                <Botao
                    style={styles.botaoCadastro}
                    text='Cadastre-se'
                    textStyle={styles.textoBotaoCadastro}
                    func={() => navigation.navigate('Cadastro')}
                />
            </View>
        </View>
    );
}
