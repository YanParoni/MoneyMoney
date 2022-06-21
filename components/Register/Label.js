import React from 'react'
import { Text } from 'react-native'
export const Label = ({text,variant},...props) => {
  return (
    <Text style={variant} >
        {text}
    </Text>
    
    )
}

