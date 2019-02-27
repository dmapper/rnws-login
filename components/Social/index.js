import React from 'react'
import { TouchableOpacity, Linking, Button } from 'react-native'
import { observer } from 'react-sharedb'
import './index.styl'

export default observer (function Social ({children, strategy, ...props}) {
  return (
    <TouchableOpacity 
      styleName='root'  
      onPress={() => Linking.openURL(`/auth/${strategy}`)}
    >
      {children || <Button title={strategy}/>}
    </TouchableOpacity>
  )
})