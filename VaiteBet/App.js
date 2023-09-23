import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 70,
    },
    cor: {
        color: '#FFEB3B',
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        paddingHorizontal: 70,
        borderRadius: 10,
        backgroundColor: '#FFEB3B',
    },
    textoBotao: {
        color: 'black'
    },
    botaoCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoCadastro: {
        color: '#FFEB3B',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    input: {
        backgroundColor: '#595959',
        height: 42,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 12,
        color: 'white'
    }
});

class App extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Logo size={270} />
                <Input 
                    width={250} 
                    texto='Nome de Usuário'
                />
                <Input 
                    width={250} 
                    texto='Senha' 
                    senha={true}
                />
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 100}}>
                    <Botao 
                        style={styles.botao} 
                        text='Entrar' 
                        textStyle={styles.textoBotao}
                    />
                    <Text style={{color:'white'}}> 
                        Não possui uma conta? 
                    </Text>
                    <Botao 
                        style={styles.botaoCadastro} 
                        text='Cadastre-se' 
                        textStyle={styles.textoBotaoCadastro}
                    />
                </View>
            </View>
        );
    }
}

export default App;

class Logo extends Component {

    render() {
        return (
            <Image
                source={require('./imagens/logo_transparent.png')}
                style={{ 
                    width: this.props.size, 
                    height: this.props.size, 
                    marginBottom: 50 
                }}
            />
        );
    }
}

class Input extends Component {

    render() {
        return (
            <TextInput
                style={[styles.input, {width: this.props.width}]}
                placeholder= {this.props.texto}
                secureTextEntry={this.props.senha}
            />
        );
    }
}

class Botao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: ''
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(nome) {
        this.setState({
            nome: nome
        })
    }

    render() {
        return (
            <View>
                <Pressable style={this.props.style} onPress={() => this.entrar('Guilherme')}>
                    <Text style={this.props.textStyle}> {this.props.text} </Text>
                </Pressable>
                <Text style={styles.cor}> {this.state.nome} </Text>
            </View>
        );
    }
}