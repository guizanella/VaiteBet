import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState }  from 'react';

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

export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [user, setUser] = useState('')

    async function logar() {

        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(async (value) => {

            var usuario;

            await firebase.database().ref('usuario').child(value.user.uid)
            .on('value', (snapshot) => {
                usuario = snapshot.val()
            })

            if (!usuario.adm) {
                navigation.navigate('Inicio', {userId: value.user.uid})
            } else {
                navigation.navigate('Controle')    
            }
        }).catch((error) => {
            alert('Email ou senha incorretos.')
            return
        })

        setEmail('')
        setSenha('')
    }

    return (
        <View style={styles.container}>
            <Logo 
                size={270} 
                margem={50}    
            />
            <TextInput
                style={[styles.input, {width: 250}]}
                func={(valor) => setEmail(valor)}
                placeholder='Email'
                value={email}
                onChangeText={(texto) => setEmail(texto)}
            />
            <TextInput
                style={[styles.input, {width: 250}]}
                func={(valor) => setSenha(valor)}
                placeholder='Senha'
                value={senha}
                onChangeText={(texto) => setSenha(texto)}
                secureTextEntry={true}
            />
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 85 }}>
                <Botao
                    style={styles.botao}
                    text='Entrar'
                    func={() => logar()}
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
