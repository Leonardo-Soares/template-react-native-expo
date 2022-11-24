import React, { useState } from 'react'
import { forms } from '../../styles/forms'
import { Picker } from '@react-native-picker/picker'
import { View, Text, TextInputProps } from 'react-native'

export default function SelectFieldSimples({ label, error, ...inputProps }: { label: string, inputProps: TextInputProps, error: any }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
      <View style={forms.container}>
        <Text style={forms.label}>{label}</Text>
        <Picker
          dropdownIconColor="#000" 
          dropdownIconRippleColor="#6F8790"
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          accessibilityLabel={''}
        >
          <Picker.Item label="Sim" value="sim" />
          <Picker.Item label="Não" value="nao" />
        </Picker>
      </View>
      {!!error && <Text style={forms.errorMessage}>Campo obrigatório</Text>}
    </>
  )
}
