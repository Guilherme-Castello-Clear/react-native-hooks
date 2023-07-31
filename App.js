import React, {Fragment, useState} from 'react';

import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function App(){

  const [nome, setNome] = useState('Guilherme');
  const [input, setInput] = useState('')

  return(
    <View>
      <Text>{nome}</Text>
      <TouchableOpacity onPress={() => setNome(input)} style={{backgroundColor: 'green'}}>
        <Text>Alterar Nome</Text>
      </TouchableOpacity>
      <TextInput placeholder={'nome'} value={input} onChangeText={(texto) => setInput(texto)}/>
    </View>
  )
}