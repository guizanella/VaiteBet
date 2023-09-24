import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Botao from './coomponentes/botao'
import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo'
import Jogo from './jogo'
import JogosList from './objetos/jogosList';
import Usuario from './objetos/usuario';

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

    const principaisJogos = JogosList.slice(0, 5);

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Text style={{ color: 'white' }}>
                Olá, {Usuario.Nome}!
            </Text>
            <Saldo/>
            <View style={styles.botoes}>
                <Botao
                    style={styles.botao}
                    text='Depositar'
                    func={() => navigation.navigate('Deposito')}
                />
                <Botao
                    style={styles.botao}
                    text='Sacar'
                    func={() => navigation.navigate('Saque')}
                />
            </View>
            <View alignItems='center'>

                {principaisJogos.map((jogo) => (
                    <Jogo jogo={jogo} />
                ))}

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
                    func={() => navigation.navigate('Historico')}
                />
            </View>
        </View>
    );
}