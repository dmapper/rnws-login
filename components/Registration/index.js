import React, { useState } from 'react'
import { View, TextInput, Button, Linking } from 'react-native'
import { observer } from 'startupjs'
import axios from 'axios'
import './index.styl'

export default observer (function Registration () {
  let [email, $email] = useState('')
  let [password, $password] = useState('')
  let [confirm, $confirm] = useState('')
  let [firstname, $firstname] = useState('')
  let [lastname, $lastname] = useState('')

  const handleRegisterPress = () => {

    axios.post('/auth/register',
    {
      email,
      password,
      confirm,
      firstname,
      lastname
    },
    {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if(res.data.error){
        alert(res.data.error)
      }else{
        Linking.openURL('/')
      }
    })
  }
  
  return (
    <View styleName='root'>
      <TextInput
        styleName='textInput'
        placeholder='Email'
        onChangeText={text => $email(text)}
      />
      <TextInput
        styleName='textInput'
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={text => $password(text)}
      />
      <TextInput
        styleName='textInput'
        placeholder='Confirm password'
        secureTextEntry={true}
        onChangeText={text => $confirm(text)}
      />
      <TextInput
        styleName='textInput'
        placeholder='First name'
        onChangeText={text => $firstname(text)}
      />
      <TextInput
        styleName='textInput'
        placeholder='Last name'
        onChangeText={text => $lastname(text)}
      />
      <Button
        styleName='button'
        title='Register'
        onPress={handleRegisterPress}
      />
    </View>
  )
})