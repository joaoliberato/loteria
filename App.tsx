import { StatusBar } from 'expo-status-bar';
import { SetStateAction, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Numeros from './components/Numeros';

export default function App() {

  const loterias = [
    { id: 1, nome: 'Mega-Sena', cor: "green", quantidadePadrao: 6, quantidadeMaxima: 15 },
    { id: 2, nome: 'Quina', cor: "purple", quantidadePadrao: 5, quantidadeMaxima: 15 },
    { id: 3, nome: 'Lotofácil', cor: "blue", quantidadePadrao: 15, quantidadeMaxima: 18 }
  ];

  const [numerosGerados, setNumerosGerados] = useState<number[]>([]);
  const [loteria, setLoteria] = useState({id:0});

  const gerarNumeros = (quantidade: number) => {
    setNumerosGerados([]);
    let numeros: SetStateAction<number[]> = [];
    while (numeros.length < quantidade) {
      let numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }

    setNumerosGerados(numeros);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Lotéricas</Text>
      {loterias.map(item => (
        <><Button
          title={item.nome}
          color={item.cor}
          key={item.id}
          onPress={() => {
            gerarNumeros(item.quantidadePadrao);
            setLoteria(item);
          }} />          
            <Numeros numerosGerados={numerosGerados} loteria={loteria} visible={item.id==loteria.id} />   
            <View style={{ marginBottom: 10 }}></View>       
        </>

      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
