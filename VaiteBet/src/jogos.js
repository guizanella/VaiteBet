import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import Logo from './logo'
import Jogo from './jogo'
import JogosList from './objetos/jogosList';
import Saldo from './saldo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
});

export default function Jogos({ navigation }) {

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Saldo/>
            <View alignItems='center'>
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