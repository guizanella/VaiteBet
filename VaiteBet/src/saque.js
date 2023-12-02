import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Botao from './coomponentes/botao'
import InputValor from './coomponentes/inputValor';
import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';

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
        marginHorizontal: 5,
        marginVertical: 6
    },
});

export default function Saque({ navigation, route }) {

    const [saldo, setSaldo] = useState(0)

    useEffect(() => {
        
        async function carregaSaldo() {
            await firebase.database().ref('usuario/' + route.params.userId).on('value', (snapshot) => {
                setSaldo(snapshot.val().saldo)
            })
        }

        carregaSaldo()
    }, []) 

    const [vlSaque, setVlSaque] = useState(0)

    const getVlSaque = (valorSaque) => {
        setVlSaque(valorSaque);
    };

    async function sacar(valorSaque) {
        if (!isNaN(valorSaque) && valorSaque > 0) {
            if (saldo >= valorSaque) {
                alert("Saque de R$ " + valorSaque + " realizado com sucesso!")
                await firebase.database().ref('usuario/' + route.params.userId).update({
                    saldo: parseFloat(saldo) - parseFloat(vlSaque)
                })
            } else alert('Saldo insuficiente.')
        } else {
            alert('Informe um valor válido.')
        }
    }

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Saldo userId={route.params.userId}/>
            <View marginBottom = {40} alignItems = 'center'>
                <Text style={{ color: 'white', fontWeight: 'bold' }} marginTop={100} marginBottom={10}>
                    Informe o valor do saque:
                </Text>
                <InputValor
                    func={(valor) => getVlSaque(valor)}
                    width={250}
                    texto='R$ '
                    tipo='numeric'
                />
            </View>
            <Botao
                style={styles.botao}
                text='Sacar'
                func={() => sacar(vlSaque)}
            />
        </View>
    );
}