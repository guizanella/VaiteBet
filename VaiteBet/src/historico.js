import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';
import Aposta from './aposta'

import { firebase } from './config/firebaseConfig'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
});

export default function Historico() {

    const [apostas, setApostas] = useState({})

    useEffect(() => {
        async function carregaHistorico() {
            firebase.database().ref('aposta').on('value', (snapshot) => {
                const apostasArray = [];
    
                snapshot.forEach(async (item) => {
                    let idJogo = item.val().jogo;
    
                    const snapshotJogo = await firebase.database().ref('jogo/' + idJogo).once('value');
                    const dataJogo = {
                        key: snapshotJogo.key,
                        casa: snapshotJogo.val().casa,
                        fora: snapshotJogo.val().fora,
                        golsCasa: snapshotJogo.val().golsCasa,
                        golsFora: snapshotJogo.val().golsFora,
                        oddCasa: snapshotJogo.val().oddCasa,
                        oddFora: snapshotJogo.val().oddFora,
                        empate: snapshotJogo.val().empate,
                        encerrado: snapshotJogo.val().encerrado
                    };
    
                    let data = {
                        key: item.key,
                        aposta: item.val().aposta,
                        vlAposta: item.val().vlAposta,
                        jogo: dataJogo
                    };
    
                    apostasArray.push(data);
                });
    
                setApostas(apostasArray);
            });
        }
    
        carregaHistorico();
    }, []);

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Saldo/>
            <View alignItems='flex' style={{width: '100%'}} paddingBottom={180}>
                <FlatList
                    data={apostas}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => <Aposta aposta={item} />}
                    marginVertical = {10}
                />
            </View>
        </View>
    );
}