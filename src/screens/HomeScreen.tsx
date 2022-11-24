import React from "react";
import Container from "../components/Container";
import HomeCards from "../components/home/HomeCards";
import MainLayout from "../components/layout/MainLayout";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Home" navigation={navigation} headerTitle={"Bem-vindo, Angelo"} type="home">
      <Container>
        <HomeCards navigation={navigation} />
      </Container>
    </MainLayout>
  );
}
