import React, { useState } from 'react'
import { View, TextInput, Button, Linking } from 'react-native'
import { observer } from 'react-sharedb'
import axios from 'axios'
import './index.styl'

export default observer (function Login () {
  let [email, $email] = useState('')
  let [password, $password] = useState('')

  const handleLoginPress = () => {
    axios.post('/auth/login',
    {
      email,
      password
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
        placeholder='Username'
        onChangeText={text => $email(text)}
      />
      <TextInput
        styleName='textInput'
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={text => $password(text)}
      />
      <Button
        className='button'
        onPress={handleLoginPress}
        title='Login'
      />
    </View>
  )
})