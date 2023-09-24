import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';
import Aposta from './aposta'
import ApostasList from './objetos/apostasList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
});

export default function Historico() {

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Saldo/>
            <View alignItems='flex' style={{width: '100%'}} paddingBottom={180}>
                <FlatList
                    data={ApostasList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Aposta aposta={item} />}
                    marginVertical = {10}
                />
            </View>
        </View>
    );
}