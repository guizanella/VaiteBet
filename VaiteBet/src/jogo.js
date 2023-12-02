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

const Jogo = ({ params }) => (
            <View style={styles.container}>
                <Botao
                    style={styles.botaoTime}
                    text={params[0].casa + " " + params[0].oddCasa.toFixed(2)}
                    textStyle={styles.texto}
                    func={() => params[1].navigate('Apostar', {
                        idJogo: params[0].key,
                        time: params[0].casa,
                        odd: params[0].oddCasa,
                        aposta: 'Casa',
                        userId: params[2]
                    })}
                />
                <Botao
                    style={styles.botaoEmpate}
                    text={"X " + params[0].empate.toFixed(2)}
                    textStyle={styles.texto}
                    func={() => params[1].navigate('Apostar', {
                        idJogo: params[0].key,
                        time: 'Empate',
                        odd: params[0].empate,
                        aposta: 'Empate',
                        userId: params[2]
                    })}
                />
                <Botao
                    style={styles.botaoTime}
                    text={params[0].fora + " " + params[0].oddFora.toFixed(2)}
                    textStyle={styles.texto}
                    func={() => params[1].navigate('Apostar', {
                        idJogo: params[0].key,
                        time: params[0].fora,
                        odd: params[0].oddFora,
                        aposta: 'Fora',
                        userId: params[2]
                    })}
                />
            </View>
        );
    
export default Jogo;