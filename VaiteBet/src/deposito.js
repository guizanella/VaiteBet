import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Botao from './coomponentes/botao'
import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';
import InputValor from './coomponentes/inputValor';

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

export default function Deposito({ navigation }) {

    const [saldo, setSaldo] = useState(0)

    useEffect(() => {
        
        async function carregaSaldo() {
            await firebase.database().ref('usuario/1').on('value', (snapshot) => {
                setSaldo(snapshot.val().saldo)
            })
        }

        carregaSaldo()
    }, []) 

    const [vlDeposito, setVlDeposito] = useState(0)

    const getVlDeposito = (valorDeposito) => {
        setVlDeposito(valorDeposito);
    };

    async function depositar(valorDeposito) {
        if (!isNaN(valorDeposito) && valorDeposito > 0) {
            alert("Depósito de R$ " + valorDeposito + " realizado com sucesso!")
            await firebase.database().ref('usuario/1').update({
                saldo: parseFloat(saldo) + parseFloat(vlDeposito)
            })
        } else {
            alert('Informe um valor válido.')
        }
    }

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Saldo />
            <View marginBottom = {40} alignItems = 'center'>
                <Text style={{ color: 'white', fontWeight: 'bold' }} marginTop={100} marginBottom={10}>
                    Informe o valor do depósito:
                </Text>
                <InputValor
                    func={(valor) => getVlDeposito(valor)}
                    width={250}
                    texto='R$ '
                    tipo='numeric'
                />
            </View>
            <Botao
                style={styles.botao}
                text='Depositar'
                func={() => depositar(vlDeposito)}
            />
        </View>
    );
}