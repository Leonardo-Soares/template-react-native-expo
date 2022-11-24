import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardBoleto from "../components/cards/CardBoleto";
import Container from "../components/Container";
import H1 from "../components/headings/H1";
import MainLayout from "../components/layout/MainLayout";

export default function BoletoScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Boleto" navigation={navigation} headerTitle={"Boletos"}>
      <Container>

        <View style={{ flex: 1, width: '100%', marginTop: 32 }}>
          <H1 title='Últimos boletos' />
          <ScrollView >
            <View style={styles.container}>
              <CardBoleto props={''} title={'Vence em breve'} />
              <CardBoleto props={''} title={'Atrasado'} />
              <CardBoleto props={''} title={'Pago'} />
              <CardBoleto props={''} title={'Pago'} />
              <CardBoleto props={''} title={'Pago'} />
              <CardBoleto props={''} title={'Pago'} />
              <CardBoleto props={''} title={'Pago'} />
              <CardBoleto props={''} title={'Pago'} />
            </View>
          </ScrollView>
        </View>
      </Container>
    </MainLayout>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  }
})
