import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { View, Text, TextInputProps, StyleSheet } from 'react-native'

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

export const forms = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '100%',
  },
  label: {
    color: '#79747E',
    fontSize: 12,
  },
  input: {
    height: 36,
    borderRadius: 4,
    paddingVertical: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: '#FF0000',
    fontSize: 14,
  },
});
