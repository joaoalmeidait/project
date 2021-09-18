import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Page from './views/page';
import { css } from './assets/css/css';

export default function App() {
  const[product, setProduct] = useState('tapioca');
  const[quantity, setQuantity] = useState(0);
  
  useEffect(()=> {
      if (quantity >0) {
        Alert.alert('Novo produto adicionado');
      }
    },[quantity]);

    const props={
    empresa:'webdesign em foco',
    name: 'thiago',
    produto: product,
    quantidade: quantity
  };
  return (
    <View style={css.container}>
      <Text>
        {product}
        </Text>
      <Page{...props} />
      <Button title='Adicionar Produtos' onPress={()=> setQuantity(quantity+1)}></Button>
    </View>
  );
}


