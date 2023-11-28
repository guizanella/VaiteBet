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

const Aposta = ({ aposta }) => (
    <View style={styles.container}>
        <View style={styles.betContainer}>
            <Text 
                style={aposta.resultado  
                    ? (aposta.resultado == aposta.aposta ? styles.greenText : styles.redText) : styles.whiteText}>
                {aposta.resultado ? aposta.resultado : aposta.aposta}
            </Text>
            <Text 
                style={aposta.resultado 
                        ? (aposta.resultado == aposta.aposta ? styles.greenText : styles.redText) : styles.whiteText}>
                {aposta.odd.toFixed(2)}
            </Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.whiteText}>{aposta.casa + " " + aposta.placar + " " + aposta.fora}</Text>
        </View>
        <View style={styles.betContainer}>
            <Text style={styles.whiteText}>Aposta: R$ {aposta.valor.toFixed(2)}</Text>
            <Text style={styles.whiteText}>Ganho: R$ {aposta.resultado == aposta.aposta ? (aposta.valor * aposta.odd).toFixed(2) : '0'}</Text>
        </View>
    </View>
)

export default Aposta;