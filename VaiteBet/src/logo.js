import { Image } from 'react-native';
import React, { Component } from 'react';

class Logo extends Component {

    render() {
        return (
            <Image
                source={require('../imagens/logo_transparent.png')}
                style={{ 
                    width: this.props.size, 
                    height: this.props.size, 
                    marginBottom: this.props.margem
                }}
            />
        );
    }
}

export default Logo;