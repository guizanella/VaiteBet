import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Botao from './coomponentes/botao'
import Logo from './coomponentes/logo'
import Saldo from './coomponentes/saldo';
import InputValor from './coomponentes/inputValor';

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

    const atualizarGanhos = (valorAposta) => {
        if (!isNaN(valorAposta)) {
            const ganhosPotenciais = (props.route.params.odd * parseFloat(valorAposta)).toFixed(2);
            setGanhos(ganhosPotenciais);
        } else {
            setGanhos('');
        }
    };

    return (
        <View style={styles.container}>
            <Logo
                size={170}
            />
            <Saldo />
            <View marginBottom = {40}>
                <Text style={{ color: 'white', fontWeight: 'bold' }} marginTop={100} marginBottom={15}>
                    {props.route.params.time}     x {props.route.params.odd.toFixed(2)}
                </Text>
                <InputValor
                    func={(valor) => atualizarGanhos(valor)}
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
                style={styles.botao}
                text='Apostar'
            />
        </View>
    );
}