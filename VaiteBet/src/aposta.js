import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        marginVertical: 5,
        paddingHorizontal: 20,
        alignSelf: 'center',    
        width: '95%',
        borderWidth: 2, 
        borderColor: '#595959',
        borderRadius: 15
    },
    greenText: {
        color: '#00ff00',
        fontWeight: 'bold',
    },
    whiteText: {
        color: '#fff',
    },
    redText: {
        color: 'red',
    },
    whiteText: {
        color: 'white',
    },
    betContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex',
        paddingVertical: 5
    },
});

export default function Aposta({ aposta }) {

    let resultado

    if (aposta.jogoInfo.golsCasa > aposta.jogoInfo.golsFora) {
        resultado = "Casa"
    } else if (aposta.jogoInfo.golsCasa < aposta.jogoInfo.golsFora) {
        resultado = "Fora"
    } else {
        resultado = "Empate"
    }

    const [odd, setOdd] = useState(1.0)

    useEffect(() => {
        
        if (aposta.aposta == "Casa") {
            setOdd(aposta.jogoInfo.oddCasa)
        } else if (aposta.aposta == "Fora") {
            setOdd(aposta.jogoInfo.oddFora)
        } else {
            setOdd(aposta.jogoInfo.empate)
        }

    }, [])


    const [ganho, setGanho] = useState(0.0)

    useEffect(() => {
        
        setGanho(resultado != aposta.aposta ? 0.0 : parseFloat(odd) * parseFloat(aposta.vlAposta))
    }, [odd])


    const [cor, setCor] = useState(styles.whiteText)

    useEffect(() => {

        if (aposta.jogoInfo.encerrado) {

            setCor(resultado != aposta.aposta ? styles.redText : styles.greenText)
        }
    }, [])

    return ( 
        <View style={styles.container}>
            <View style={styles.betContainer}>
                <Text style={cor}>
                    {aposta.aposta}
                </Text>
                <Text style={cor}>
                    {odd}
                </Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.whiteText}>
                    {aposta.jogoInfo.casa + " " + aposta.jogoInfo.golsCasa + " x " + aposta.jogoInfo.golsFora + " " +aposta.jogoInfo.fora}
                </Text>
            </View>
            <View style={styles.betContainer}>
                <Text style={styles.whiteText}>Aposta: R$ {aposta.vlAposta}</Text>
                <Text style={styles.whiteText}>Ganho: R$ {ganho.toFixed(2)}</Text>
            </View>
        </View> 
    )
}