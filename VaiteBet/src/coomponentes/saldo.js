import { Component, useEffect, useState } from 'react';
import { Text } from 'react-native';

import { firebase } from '../config/firebaseConfig'

export default function Saldo() {
    
    const [saldo, setSaldo] = useState(0)

    useEffect(() => {
        
        async function carregaSaldo() {
            await firebase.database().ref('usuario/1').on('value', (snapshot) => {
                setSaldo(snapshot.val().saldo)
            })
        }

        carregaSaldo()
    }, []) 

    return (
        <Text style={{ color: '#FFEB3B' }}>
            Seu saldo atual:{' '}
            <Text style={{ fontWeight: 'bold' }}>R$ {saldo.toFixed(2)}</Text>
        </Text>
    );
}