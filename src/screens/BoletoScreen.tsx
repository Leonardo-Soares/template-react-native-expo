import React from "react";
import { View } from "react-native";
import Container from "../components/layout/Container";
import H1 from "../components/fonts/H1";
import MainLayout from "../components/layout/MainLayout";

export default function BoletoScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Boleto" navigation={navigation} headerTitle={"Boletos"}>
      <Container>

        <View style={{ flex: 1, width: '100%', marginTop: 32 }}>
          <H1 title='Últimos boletos' />
        </View>

      </Container>
    </MainLayout>
  );
}
