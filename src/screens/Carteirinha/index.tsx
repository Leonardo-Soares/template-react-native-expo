import React from "react";
import { View, ScrollView } from "react-native";
import MainLayout from "../../components/layout/MainLayout";
import CardCarteirinha from "../../components/cards/CardCarteirinha";
import ButtonSolid from "../../components/buttons/ButtonSolid";
import Container from "../../components/Container";

export default function CarterinhaScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Carteirinha" navigation={navigation} headerTitle={"Carteirinha"}>
      <ScrollView style={{marginTop:32}}>
        <Container>
          <CardCarteirinha />
          <View style={{ alignItems: 'center', marginTop: 16 }}>
            <ButtonSolid title={"ALTERAR CADASTRO"} onPress={() => {navigation.navigate('CarteirinhaEdit') }} icon="edit" />
          </View>
        </Container>
      </ScrollView>
    </MainLayout>
  );
}
