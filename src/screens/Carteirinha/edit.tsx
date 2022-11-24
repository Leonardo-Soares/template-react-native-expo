import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import MainLayout from "../../components/layout/MainLayout";
import CardCarteirinha from "../../components/cards/CardCarteirinha";
import ButtonSolid from "../../components/buttons/ButtonSolid";
import Container from "../../components/Container";
import FormEditEmail from "../../components/carteirinha/form-edit-email";
import H1 from "../../components/headings/H1";
import FormEditPassword from "../../components/carteirinha/form-edit-password";



export default function CarterinhaEditScreen({ navigation }: { navigation: any }) {
  const [type, setType] = useState<'email' | 'senha' | 'none'>('none')
  return (
    <MainLayout path="CarteirinhaEdit" navigation={navigation} headerTitle={"Editar Cadastro"}>
      <ScrollView style={{ marginTop: 32 }}>
        <Container>
          {
            type === 'none' &&
            <>
              <H1 title="O que você deseja alterar?" />
              <View style={{ marginTop: 16 }}>
                <ButtonSolid title="EMAIL" onPress={() => { setType('email') }} />
              </View>
              <View style={{ marginTop: 16 }}>
                <ButtonSolid title="SENHA" onPress={() => { setType('senha') }} />
              </View>
            </>
          }

          {
            type === 'email' && <FormEditEmail navigation={navigation} setType={setType} />
          }
          {
            type === 'senha' && <FormEditPassword navigation={navigation} setType={setType} />
          }

        </Container>
      </ScrollView>
    </MainLayout>
  );
}
