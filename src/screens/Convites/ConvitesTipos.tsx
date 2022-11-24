import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ButtonSolid from "../../components/buttons/ButtonSolid";
import CardConviteDetail from "../../components/cards/CardConviteDetail";
import Container from "../../components/Container";
import H1 from "../../components/headings/H1";
import HomeCards from "../../components/home/HomeCards";
import MainLayout from "../../components/layout/MainLayout";

export default function ConvitesTipos({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Convites" navigation={navigation} headerTitle={"Convites"}>
      <ScrollView style={{marginTop:32}}>
        <Container>
          <View style={{ alignItems: 'center' }}>
            <H1  title="Qual o tipo de convite?" />
          </View>

          <View style={{ alignItems: "center", marginVertical: 12 }}>
            <View style={{ width: '50%' }}>
              <ButtonSolid 
                title="CONVITE GRÁTIS"
                onPress={() => { navigation.navigate('ConvitesCadastro') }}
                icon={"ticket"}
              />
            </View>
          </View> 
            
          <View style={{ alignItems: "center", marginBottom: 12 }}>
            <View style={{ width: '50%' }}>
              <ButtonSolid 
                title="CONVITE PAGO"
                onPress={() => { navigation.navigate('ConvitesCadastro') }}
                icon={"ticket"}
              />
            </View>
          </View>
        </Container>
      </ScrollView>
    </MainLayout>
  );
}
