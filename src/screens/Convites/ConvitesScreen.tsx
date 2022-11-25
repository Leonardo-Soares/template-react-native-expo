import React from "react";
import { View, ScrollView } from "react-native";
import Container from "../../components/layout/Container";
import H1 from "../../components/headings/H1";
import MainLayout from "../../components/layout/MainLayout";

export default function ConvitesScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Convites" navigation={navigation} headerTitle={"Convites"}>
      <ScrollView style={{marginTop:32}}>
        <Container>
          <H1 title="Últimos Convites" />
        </Container>
      </ScrollView>
    </MainLayout>
  );
}
