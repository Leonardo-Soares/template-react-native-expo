import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ButtonSolid from "../../components/buttons/ButtonSolid";
import CardConviteDetail from "../../components/cards/CardConviteDetail";
import Container from "../../components/Container";
import H1 from "../../components/headings/H1";
import HomeCards from "../../components/home/HomeCards";
import MainLayout from "../../components/layout/MainLayout";

export default function ConvitesScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Convites" navigation={navigation} headerTitle={"Convites"}>
      <ScrollView style={{marginTop:32}}>
        <Container>
          <View style={{ alignItems: "center", marginBottom: 24 }}>
            <View style={{ width: '50%' }}>
              <ButtonSolid 
                title="Quero Convidar"
                icon={"ticket"}
                onPress={() => { navigation.navigate('ConvitesTipos') }}
              />
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <H1  title="Últimos Convites" />
          </View>

          <CardConviteDetail 
            title="339659"
            name="Antônio Carlos de Souza"
            cpf="999.999.999-99"
            date="19/10/2021"
            props={''}
          />
          <CardConviteDetail 
            title="339659"
            name="Antônio Carlos de Souza"
            cpf="999.999.999-99"
            date="19/10/2021"
            props={''}
          />
          <CardConviteDetail 
            title="339659"
            name="Antônio Carlos de Souza"
            cpf="999.999.999-99"
            date="19/10/2021"
            props={''}
          />
          <CardConviteDetail 
            title="339659"
            name="Antônio Carlos de Souza"
            cpf="999.999.999-99"
            date="19/10/2021"
            props={''}
          />
        </Container>
      </ScrollView>
    </MainLayout>
  );
}
