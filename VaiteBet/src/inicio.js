import { StyleSheet, Text, View, Button } from 'react-native';
import React, { Component } from 'react';

import Botao from './botao'
import Logo from './logo'
import Jogo from './jogo'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    cor: {
        color: '#FFEB3B',
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#FFEB3B',
        marginHorizontal: 5,
        marginVertical: 6
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 25,
    },
});

export default function Inicio({ navigation }) {

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Text style={{ color: 'white' }}>
                Olá, João!
            </Text>
            <Text style={styles.cor}>
                Seu saldo atual:{' '}
                <Text style={{ fontWeight: 'bold' }}>1.576,85</Text>
            </Text>
            <View style={styles.botoes}>
                <Botao
                    style={styles.botao}
                    text='Depositar'
                />
                <Botao
                    style={styles.botao}
                    text='Sacar'
                />
            </View>
            <View alignItems='center'>
                <Jogo timeCasa="Atlético MG 1.00" empate="X 2.00" timeFora="Santos 3.00" />
                <Jogo timeCasa="América MG 1.00" empate="X 2.00" timeFora="São Paulo 3.00" />
                <Jogo timeCasa="Botafogo 1.00" empate="X 2.00" timeFora="Bahia 3.00" />
                <Jogo timeCasa="Grêmio 1.00" empate="X 2.00" timeFora="Cruzeiro 3.00" />
                <Jogo timeCasa="Athletico PR 1.00" empate="X 2.00" timeFora="Internacional 3.00" />
                <Botao
                    style={styles.botao}
                    text='Mais Jogos'
                    textStyle={styles.textoBotao}
                    func={() => navigation.navigate('Jogos')}
                />
            </View>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
                <Botao
                    style={styles.botao}
                    text='Histórico de Apostas'
                    textStyle={styles.textoBotao}
                    func={() => navigation.navigate('Cadastro')}
                />
            </View>
        </View>
    );
}