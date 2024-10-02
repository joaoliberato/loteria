import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function Numero(props: { numero: number, loteria:any; }) {
    return (
        <View>
            <Text style={[styles.numero, {backgroundColor: props.loteria.cor}]}>{props.numero.toString().padStart(2, '0')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    numero: {
        fontSize: 18,
        padding: 10,
        margin: 5,
        borderRadius: 50,
        color: 'white',
    }
});