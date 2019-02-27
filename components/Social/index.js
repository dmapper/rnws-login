import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { observer } from 'react-sharedb'

export default observer (function Social ({children, strategy, ...props}) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(`/auth/${strategy}`)}>
      {children}
    </TouchableOpacity>
  )
})