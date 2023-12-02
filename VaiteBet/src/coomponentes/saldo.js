import { Component, useEffect, useState } from 'react';
import { Text } from 'react-native';

import { firebase } from '../config/firebaseConfig';

export default function Saldo({ userId }) {
    
    const [saldo, setSaldo] = useState(0);

    useEffect(() => {
        
        async function carregaSaldo() {
            await firebase.database().ref(`usuario/${userId}`).on('value', (snapshot) => {
                if (snapshot.val()) {
                    setSaldo(snapshot.val().saldo);
                }
            });
        }

        carregaSaldo();
    }, [userId]);

    return (
        <Text style={{ color: '#FFEB3B' }}>
            Seu saldo atual:{' '}
            <Text style={{ fontWeight: 'bold' }}>R$ {saldo.toFixed(2)}</Text>
        </Text>
    );
}
