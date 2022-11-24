import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import ButtonSolid from '../../buttons/ButtonSolid';
import TextField from '../../forms/TextField';
import H1 from '../../headings/H1';

export default function FormEditPassword({ navigation, setType }: { navigation: any, setType: any }) {
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
      <H1 title={'Alterar senha de acesso'} />
      <View style={{ marginTop: 16 }}>

        <View style={{ marginTop: 8 }}>
          <TextField label={'Senha atual'} onChangeText={text => setValue('senha_atual', text)} error={errors?.senha_atual} secureTextEntry={true} />
        </View>

        <View style={{ marginTop: 8 }}>
          <TextField label={'Nova senha'} onChangeText={text => setValue('nova_senha', text)} error={errors?.nova_senha} secureTextEntry={true} />
        </View>

        <View style={{ marginTop: 8 }}>
          <TextField label={'Repetir nova senha'} onChangeText={text => setValue('nova_senha_check', text)} error={errors?.nova_senha_check}
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 16 }}>
          <ButtonSolid onPress={handleSubmit(onSubmit)} title="ATUALIZAR SENHA" />
          <View style={{ marginTop: 8 }}>
            <ButtonSolid onPress={() => setType('none')} title="VOLTAR" backgroundColor={"#fff"} color="#0079BD" />
          </View>
        </View>
      </View>
    </View>
  )
}
