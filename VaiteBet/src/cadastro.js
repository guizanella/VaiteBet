import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';

import Botao from './coomponentes/botao'
import Logo from './coomponentes/logo'

import { firebase } from './config/firebaseConfig'

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
    input: {
        backgroundColor: '#595959',
        height: 42,
        borderRadius: 5,
        marginBottom: 5,
        paddingHorizontal: 12,
        color: 'white'
    }
});

export default function Cadastro({ navigation }) {

    const [nome, setNome] = useState('')    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')    

    async function cadastrar() {

        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((value) => {

            firebase.database().ref('usuario').child(value.user.uid).set({
                nome: nome,
                saldo: 0.0
            })

            alert("Usuário criado com sucesso!")
            navigation.navigate('Login')
            return
        })
        .catch(() => {
            alert("Algo deu errado. ")
            return
        })
    }

    return (
        <View style={styles.container}>
            <Logo size={270} />
            <TextInput
                style={[styles.input, {width: 250}]}
                placeholder='Nome Completo'
                value={nome}
                onChangeText={(texto) => setNome(texto)}
            />
            <TextInput
                style={[styles.input, {width: 250}]}
                placeholder='Email'
                value={email}
                onChangeText={(texto) => setEmail(texto)}
            />
            <TextInput
                style={[styles.input, {width: 250}]}
                placeholder='Senha'
                value={senha}
                onChangeText={(texto) => setSenha(texto)}
                secureTextEntry={true}
            />

            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 130 }}>
                <Botao
                    style={styles.botao}
                    text='Cadastrar'
                    textStyle={styles.textoBotao}
                    func={() => cadastrar()}
                />
            </View>
        </View>
    );
}