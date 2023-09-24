import React from 'react';
import { View, StyleSheet } from 'react-native';

import Botao from './botao'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6,
    },
    botaoTime: {
        backgroundColor: '#595959',
        width: 120,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 13,
        marginHorizontal: 6,
    },
    botaoEmpate: {
        backgroundColor: '#595959',
        width: 60,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 13,
    },
    texto: {
        color: 'white',
    },
});

const Jogo = ({ timeCasa, empate, timeFora }) => (
    <View style={styles.container}>
        <Botao
            style={styles.botaoTime}
            text={timeCasa}
            textStyle={styles.texto}
        />
        <Botao
            style={styles.botaoEmpate}
            text={empate}
            textStyle={styles.texto}
        />
        <Botao
            style={styles.botaoTime}
            text={timeFora}
            textStyle={styles.texto}
        />
    </View>
);

export default Jogo;