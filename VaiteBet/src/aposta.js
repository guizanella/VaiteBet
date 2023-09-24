import React from 'react';
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
    betContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex',
        paddingVertical: 5
    },
});

const Aposta = ({ aposta }) => (
    <View style={styles.container}>
        <View style={styles.betContainer}>
            <Text style={aposta.resultado == aposta.aposta ? styles.greenText : styles.redText}>{aposta.resultado}</Text>
            <Text style={aposta.resultado == aposta.aposta ? styles.greenText : styles.redText}>{aposta.odd.toFixed(2)}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.whiteText}>{aposta.jogo}</Text>
        </View>
        <View style={styles.betContainer}>
            <Text style={styles.whiteText}>Aposta: R$ {aposta.valor.toFixed(2)}</Text>
            <Text style={styles.whiteText}>Ganho: {aposta.ganho.toFixed(2)}</Text>
        </View>
    </View>
)

export default Aposta;