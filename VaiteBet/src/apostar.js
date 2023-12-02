import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Botao from './coomponentes/botao'
import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';
import InputValor from './coomponentes/inputValor';

import { firebase } from './config/firebaseConfig'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 70,
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
});

export default function Apostar(props) {

    const [ganhos, setGanhos] = useState('')
    const [vlAposta, setVlAposta] = useState('')

    const atualizarGanhos = (valorAposta) => {
        if (!isNaN(valorAposta) && valorAposta !== '' && valorAposta > 0) {
            const ganhosPotenciais = (props.route.params.odd * parseFloat(valorAposta)).toFixed(2);
            setGanhos(ganhosPotenciais);
        } else {
            setGanhos('');
        }
    };

    const atualizarVlAposta = (valorAposta) => {
        setVlAposta(valorAposta)
    }

    const atualizarValores = (valor) => {
        atualizarGanhos(parseFloat(valor))
        atualizarVlAposta(parseFloat(valor))
    }


    const [usuario, setUsuario] = useState('')

    useEffect(() => {
        
        async function carregaUsuario() {
            await firebase.database().ref('usuario/' + props.route.params.userId)
            .on('value', (snapshot) => {
                setUsuario(snapshot)
            })
        }

        carregaUsuario()
    }, []) 

    async function apostar() {
        if (vlAposta !== '' && vlAposta > 0 && !isNaN(vlAposta))  {

            if (vlAposta <= usuario.val().saldo) {

                let apostaRef = await firebase.database().ref('aposta')
                let key = apostaRef.push().key

                apostaRef.child(key).set({
                    aposta: props.route.params.aposta,
                    vlAposta: vlAposta,
                    usuario: usuario.key,
                    jogo: parseFloat(props.route.params.idJogo)
                })

                firebase.database().ref('usuario/' + usuario.key).update({
                    saldo: (usuario.val().saldo - vlAposta)
                })

                alert("Aposta realizada com sucesso! ")

                props.route.params.navigation.goBack()

                return
            } else {
                alert('Saldo insuficiente.')
            }
        } else {
            alert('Informe um valor válido!')
        }
    }

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Saldo userId={props.route.params.userId}/>
            <View marginBottom = {40}>
                <Text style={{ color: 'white', fontWeight: 'bold' }} marginTop={100} marginBottom={15}>
                    {props.route.params.time}     x {props.route.params.odd.toFixed(2)}
                </Text>
                <InputValor
                    func={(valor) => atualizarValores(valor)}
                    width={250}
                    texto='R$ '
                    tipo='numeric'
                />
                <Text style={{ color: 'white', fontWeight: 'bold' }} marginTop={15}> 
                    Ganhos potenciais: {' '}
                    <Text style={{ color: '#FFEB3B' }}>{ganhos}</Text>
                </Text>
            </View>
            <Botao
                func={() => apostar()}
                style={styles.botao}
                text='Apostar'
            />
        </View>
    );
}