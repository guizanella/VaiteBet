import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import Logo from './coomponentes/logo';
import Saldo from './coomponentes/saldo';
import Aposta from './aposta';

import { firebase } from './config/firebaseConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
});

export default function Historico(props) {

    const [apostas, setApostas] = useState([])

    console.log(props.route.params.jogosList)

    useEffect(() => {

        async function carregaApostas() {
            await firebase.database().ref('aposta').on('value', (snapshot) => {

                setApostas([])

                snapshot.forEach((item) => {

                    const jogoCorrespondente = props.route.params.jogosList.find(jogo => jogo.key == item.val().jogo);

                    let data = {
                        key: item.key,
                        aposta: item.val().aposta,
                        vlAposta: item.val().vlAposta,
                        jogo: item.val().jogo,
                        usuario: item.val().usuario,
                        jogoInfo: jogoCorrespondente
                    }

                    setApostas(old => [...old, data])
                })
            })
        }

        carregaApostas();
    }, [])

    console.log(apostas)

    return (
        <View style={styles.container}>
            <Logo size={170} />
            <Saldo />
            <View alignItems="flex" style={{ width: '100%' }} paddingBottom={180}>
                <FlatList
                    data={apostas}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <Aposta aposta={item} />
                    )}
                    marginVertical={10}
                />
            </View>
        </View>
    );
}