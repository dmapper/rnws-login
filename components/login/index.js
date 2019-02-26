import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import axios from 'axios'
import './index.styl'

export default function Login () {
  let [username, $username] = useState('')
  let [password, $password] = useState('')

  const handleLoginPress = () => {
    axios.post('/auth/login',
    {
      username,
      password
    },
    {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json; charset=utf-8'
      }
    })
  }

  return (
    <View styleName='root'>
      <TextInput
        styleName='textInput'
        placeholder='Username'
        onChangeText={text => $username('email', text)}
      />
      <TextInput
        styleName='textInput'
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={text => $password('password', text)}
      />
      <Button
        onPress={handleLoginPress}
      >
        Login
      </Button>
    </View>
  )
}
