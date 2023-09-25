import { Component } from 'react';
import { Modal, Text, StyleSheet, View } from 'react-native';
import Input from './input';
import Botao from './botao';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        marginVertical: 310,
        paddingHorizontal: 10,
        width: '95%',
        borderWidth: 2,
        borderColor: '#595959',
        borderRadius: 15,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    texto: {
        color: '#fff',
        marginVertical: 8,
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        width: 70,
        borderRadius: 10,
        backgroundColor: '#FFEB3B',
    },
});

class ModalAposta extends Component {

    render() {
        return (
            <Modal visible={this.props.visivel}>
                <View style={styles.container}>
                    <Text style={styles.texto}> Casa: 3.28 </Text>
                    <Text style={styles.texto}> Informe o valor da aposta: </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Input
                            width={240}
                            texto='R$'
                        />
                        <Botao
                            style={styles.botao}
                            text='Apostar'
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

export default ModalAposta