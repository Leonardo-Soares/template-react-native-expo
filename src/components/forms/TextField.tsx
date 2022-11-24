import React from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'
import { forms } from '../../styles/forms'

export default function TextField({ label, error, ...inputProps }: { label: string, inputProps: TextInputProps, error: any }) {

  return (
    <>
      <View style={forms.container}>
        <Text style={forms.label}>{label}</Text>
        <TextInput
          style={forms.input}
          {...inputProps}
        />
      </View>
      {!!error && <Text style={forms.errorMessage}>Campo obrigatório</Text>}
    </>
  )
}
