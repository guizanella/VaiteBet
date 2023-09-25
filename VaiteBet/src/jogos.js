import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';
import ModalAposta from './coomponentes/modalAposta'; 
import Jogo from './jogo'
import JogosList from './objetos/jogosList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
});

export default function Jogos() {

    return (
        <View style={styles.container}>
            <ModalAposta visivel={false}/>
            <Logo
                size={170}
            />
            <Saldo/>
            <View alignItems='center' paddingBottom={180}>
                <FlatList
                    data={JogosList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Jogo jogo={item} />}
                    marginVertical = {10}
                />
            </View>
        </View>
    );
}