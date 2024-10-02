import React from 'react';
import { View, Text } from 'react-native';
import Numero from './Numero';

export default function Numeros(props: { numerosGerados: any[], loteria: any, visible:boolean; }) {

    const exibirNumeros = () => {
        return props.numerosGerados.sort((a, b) => a - b).map(numero => {
            return <Numero loteria={props.loteria} key={numero} numero={numero} />;
        });
    };

    return ( props.visible &&
        <><Text>Seus números da sorte são:</Text><View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {exibirNumeros()}
        </View></>
    );
};