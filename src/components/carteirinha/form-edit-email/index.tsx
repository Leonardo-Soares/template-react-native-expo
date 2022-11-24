import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import ButtonSolid from '../../buttons/ButtonSolid';
import TextField from '../../forms/TextField';
import H1 from '../../headings/H1';

export default function FormEditEmail({ navigation, setType }: { navigation: any, setType: any }) {
  const { register, setValue, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  useEffect(() => {
    register('login', { required: true })
    register('senha', { required: true })
    // register('password')
  }, [register])
  return (
    <View>
      <H1 title={'Alterar Email'} />
      <View style={{ marginTop: 16 }}>
        <TextField label={'Novo e-mail'} onChangeText={text => setValue('login', text)} error={errors?.login} />
        <View style={{ marginTop: 16 }}>
          <ButtonSolid onPress={handleSubmit(onSubmit)} title="ALTERAR E-MAIL" />
          <View style={{ marginTop: 8 }}>
            <ButtonSolid onPress={() => setType('none')} title="VOLTAR" backgroundColor={"#fff"} color="#0079BD" />
          </View>
        </View>
      </View>
    </View>
  )
}
