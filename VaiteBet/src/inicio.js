import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Botao from './coomponentes/botao'
import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo'
import Jogo from './jogo'

import { firebase } from './config/firebaseConfig'

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

export default function Inicio({ navigation, route}) {

    const [jogos, setJogos] = useState([])
    const [jogosInicio, setJogosInicio] = useState([])

    useEffect(() => {
        
        async function carregaJogos() {

            await firebase.database().ref('jogo').on('value', (snapshot) => {
                
                setJogos([])

                snapshot.forEach((item) => {
                    let data = {
                        key: item.key,
                        casa: item.val().casa,
                        oddCasa: item.val().oddCasa,
                        golsCasa: item.val().golsCasa,
                        fora: item.val().fora,
                        oddFora: item.val().oddFora,
                        golsFora: item.val().golsFora,
                        empate: item.val().empate,
                        encerrado: item.val().encerrado
                    }

                    setJogos(old => [...old, data])

                    if (!data.encerrado) {
                        setJogosInicio(old => [...old, data])
                    }
                })
            })
        }

        carregaJogos()
    }, []) 

    const [nome, setNome] = useState('')

    useEffect(() => {
        
        async function carregaNome() {
            await firebase.database().ref('usuario/' + route.params.userId).on('value', (snapshot) => {
                setNome(snapshot.val().nome)
            })
        }

        carregaNome()
    }, []) 

    const principaisJogos = jogosInicio.slice(0, 5);

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Text style={{ color: 'white' }}>
                Olá, {nome}!
            </Text>
            <Saldo userId={route.params.userId}/>
            <View style={styles.botoes}>
                <Botao
                    style={styles.botao}
                    text='Depositar'
                    func={() => navigation.navigate('Deposito', {userId: route.params.userId})}
                />
                <Botao
                    style={styles.botao}
                    text='Sacar'
                    func={() => navigation.navigate('Saque', {userId: route.params.userId})}
                />
            </View>
            <View alignItems='center'>

                {principaisJogos.map((jogo) => (
                    <Jogo params={[jogo,navigation,route.params.userId]}/>
                ))}

                <Botao
                    style={styles.botao}
                    text='Mais Jogos'
                    textStyle={styles.textoBotao}
                    func={() => navigation.navigate('Jogos', {userId: route.params.userId})}
                />
            </View>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
                <Botao
                    style={styles.botao}
                    text='Histórico de Apostas'
                    textStyle={styles.textoBotao}
                    func={() => navigation.navigate('Historico', {jogosList: jogos, userId: route.params.userId})}
                />
            </View>
        </View>
    );
}