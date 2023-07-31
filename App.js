import React, {Fragment, useState, useEffect, useMemo, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function App(){

  const [nome, setNome] = useState('Guilherme');
  const [input, setInput] = useState('')
  const nomeInput = useRef(null)
  useEffect(() => {
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nome');
      if(nomeStorage !== null) setNome(nomeStorage)
    }


  })

  useEffect(() => {
    async function saveStorage(){
      await AsyncStorage.setItem('nome', nome)
    }
    saveStorage
  }, [nome])

  function alteraNome(){
    setNome(input);
    setInput('');
  }

  function novoNome(){
    nomeInput.current.focus();
  }

  const letrasNome = useMemo(() => {console.log(nome.length)}, [nome])

  return(
    <View>
      <Text>{nome}</Text>
      <TouchableOpacity onPress={() => alteraNome()} style={{backgroundColor: 'green'}}>
        <Text>Alterar Nome</Text>
      </TouchableOpacity>
      <TextInput ref={nomeInput} placeholder={'nome'} value={input} onChangeText={(texto) => setInput(texto)}/>
      <Text>{letrasNome}</Text>
      <TouchableOpacity onPress={() => novoNome()} style={{backgroundColor: 'green'}}>
        <Text>Novo nome</Text>
      </TouchableOpacity>
    </View>
  )
}