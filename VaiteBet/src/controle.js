import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Botao from './coomponentes/botao'
import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo'
import Jogo from './jogo'

import { firebase } from './config/firebaseConfig'
import JogoControl from './jogoControl';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    lista: {
        alignItems:'center', 
        paddingBottom:180, 
        width: '100%' 
    }
});

export default function Controle({ navigation }) {

    const [jogos, setJogos] = useState([])

    useEffect(() => {
        
        async function carregaJogos() {
            await firebase.database().ref('jogo').on('value', (snapshot) => {
                
                setJogos([])

                snapshot.forEach((item) => {
                    let data = {
                        key: item.key,
                        casa: item.val().casa,
                        oddCasa: item.val().oddCasa,
                        golsCasa: item.val().golsCasa,
                        fora: item.val().fora,
                        oddFora: item.val().oddFora,
                        golsFora: item.val().golsFora,
                        empate: item.val().empate,
                        encerrado: item.val().encerrado
                    }

                    if (!data.encerrado) {
                        setJogos(old => [...old, data])
                    }
                })
            })
        }

        carregaJogos()
    }, []) 

    return (
        <View style={styles.container}>
            <Logo size={170}/>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                GERENCIAMENTO DE JOGOS
            </Text>
            <View style={styles.lista}>
                <FlatList
                    data={jogos}
                    keyExtractor={(item) => item.key}
                    renderItem={(item) => <JogoControl params={item}/>}
                    marginVertical = {10}
                />
            </View>
        </View>
    );
}