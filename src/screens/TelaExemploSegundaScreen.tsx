import React from "react";
import { View } from "react-native";
import Container from "../components/layout/Container";
import H1 from "../components/fonts/H1";
import MainLayout from "../components/layout/MainLayout";

export default function TelaExemploSegundaScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Boleto" navigation={navigation} headerTitle={"Tela Exemplo 2"}>
      <Container>

        <View style={{ flex: 1, width: '100%', marginTop: 32 }}>
          <H1 title='Body Tela Exemplo 2' />
        </View>

      </Container>
    </MainLayout>
  );
}
