import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';
import Jogo from './jogo'

import { firebase } from './config/firebaseConfig'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
});

export default function Jogos({ navigation, route }) {

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
            <Logo
                size={170}
            />
            <Saldo userId={route.params.userId}/>
            <View alignItems='center' paddingBottom={180}>
                <FlatList
                    data={jogos}
                    keyExtractor={(item) => item.key}
                    renderItem={({item}) => <Jogo params={[item,navigation,route.params.userId]}/>}
                    marginVertical = {10}
                />
            </View>
        </View>
    );
}