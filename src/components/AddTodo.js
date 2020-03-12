import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert, Keyboard} from 'react-native'
import { THEME } from '../theme'
import {AntDesign} from '@expo/vector-icons'

export const AddTodo = ({onSubmit}) => {
  const[value, setValue]=useState('')

  const pressHandler=()=>{
    if(value.trim()){
      onSubmit(value);
      setValue('')
      Keyboard.dismiss()
    } else{
      Alert.alert('Название дела не может быть пустым')
    }
  }
    return (
      <View style={styles.block}>
          <TextInput 
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder='Введите название дела...' 
          autoCorrect={false}
          autoCapitalize='none'/>
          <AntDesign.Button onPress={pressHandler} name='pluscircleo'>Добавить</AntDesign.Button>
          {/*<Button title='Добавить' onPress={pressHandler}/>*/}
      </View>
    )
}
const styles = StyleSheet.create({
  block:{
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center'
  },
   input:{
       width:'70%',
       borderStyle:'solid',
       borderWidth: 2,
       borderColor: THEME.MAIN_COLOR
   }
})