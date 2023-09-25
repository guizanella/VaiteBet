import React from 'react';
import { View, StyleSheet } from 'react-native';

import Botao from './coomponentes/botao'

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

const Jogo = ({ jogo }) => (
            <View style={styles.container}>
                <Botao
                    style={styles.botaoTime}
                    text={jogo.casa + " " + jogo.oddCasa.toFixed(2)}
                    textStyle={styles.texto}
                                    />
                <Botao
                    style={styles.botaoEmpate}
                    text={"X " + jogo.empate.toFixed(2)}
                    textStyle={styles.texto}
                />
                <Botao
                    style={styles.botaoTime}
                    text={jogo.fora + " " + jogo.oddFora.toFixed(2)}
                    textStyle={styles.texto}
                />
            </View>
        );
    
export default Jogo;