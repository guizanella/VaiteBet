import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import Botao from './coomponentes/botao'

import { firebase } from './config/firebaseConfig'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        marginVertical: 5,
        paddingHorizontal: 20,
        alignSelf: 'center',    
        width: '100%',
        borderWidth: 2, 
        borderColor: '#595959',
        borderRadius: 15
    },
    texto: {
        color: 'white',
    },
    betContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex',
        paddingVertical: 5
    },
    botao: {
        alignItems: 'center',
        paddingVertical: 12,
        marginHorizontal: 20,
        width: 90,
        borderRadius: 10,
        backgroundColor: '#FFEB3B',
    },
    input: {
        backgroundColor: '#595959',
        height: 42,
        borderRadius: 5,
        marginBottom: 5,
        paddingHorizontal: 12,
        color: 'white',
        width: 80
    }
});

export default function JogoControl({ params }) {

    const [golsCasa, setGolsCasa] = useState(params.item.golsCasa.toString());
    const [golsFora, setGolsFora] = useState(params.item.golsFora.toString());

    const alteraGolsCasa = (novoValor) => {
        setGolsCasa(novoValor);
    };

    const alteraGolsFora = (novoValor) => {
        setGolsFora(novoValor);
    };

    async function encerrarJogo() {
        if ((golsCasa >= 0 && !isNaN(golsCasa)) && 
        (golsFora >= 0 && !isNaN(golsFora)))  {

            await firebase.database().ref('jogo/' + params.item.key).update({
                encerrado: true,
                golsCasa: parseFloat(golsCasa),
                golsFora: parseFloat(golsFora),
            })

            /*var apostasRef = await firebase.database().ref('aposta')
            apostasRef.on('value', (snapshot) => {

                snapshot.forEach((item) => {

                    if(item.val().jogo == params.item.key) {

                        if (item.val().aposta == "Casa" && golsCasa > golsFora){

                            firebase.database().ref('usuario/' + item.val().usuario).on('value', (snapshot) => {
                                firebase.database().ref('usuario/' + item.val().usuario).update({
                                    saldo: (snapshot.val().saldo + (params.item.oddCasa * item.val().vlAposta))
                                })
                            })

                        } else if (item.val().aposta == "Fora" && golsFora > golsCasa) {

                            firebase.database().ref('usuario/' + item.val().usuario).on('value', (snapshot) => {
                                firebase.database().ref('usuario/' + item.val().usuario).update({
                                    saldo: (snapshot.val().saldo + (params.item.oddFora * item.val().vlAposta))
                                })
                            })

                        } else if (item.val().aposta == "Empate" && golsFora == golsCasa) {

                            firebase.database().ref('usuario/' + item.val().usuario).on('value', (snapshot) => {
                                firebase.database().ref('usuario/' + item.val().usuario).update({
                                    saldo: (snapshot.val().saldo + (params.item.empate * item.val().vlAposta))
                                })
                            })
                        } 
                    }
                })
            })*/
            
        } else {
            alert('Informe um valor válido!')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.betContainer}>
                <Text style={{ color: 'white', fontWeight: 'bold'}}> {params.item.casa} </Text>
                <Text style={{ color: 'white', fontWeight: 'bold'}}> {params.item.fora} </Text>
            </View>
            <View style={styles.betContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={alteraGolsCasa}
                    value={golsCasa}
                    keyboardType="numeric" 
                />
                <Botao 
                    style={styles.botao} 
                    text='Encerrar'
                    func={() => encerrarJogo()}/>
                <TextInput
                    style={styles.input}
                    onChangeText={alteraGolsFora}
                    value={golsFora}
                    keyboardType="numeric" 
                />
            </View>
        </View>
    )
}

