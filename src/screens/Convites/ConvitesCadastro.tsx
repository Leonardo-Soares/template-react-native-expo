import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import ButtonSolid from "../../components/buttons/ButtonSolid";
import CardConviteDetail from "../../components/cards/CardConviteDetail";
import Container from "../../components/Container";
import H1 from "../../components/headings/H1";
import HomeCards from "../../components/home/HomeCards";
import MainLayout from "../../components/layout/MainLayout";
import image from '../../../assets/img/bg/bg-ondas-assembleia.png';
import TextField from "../../components/forms/TextField";
import SelectFieldSimples from "../../components/forms/SelectFieldSelectFieldSimples";

export default function ConvitesCadastro({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Convites" navigation={navigation} headerTitle={"Convites"}>
      <ScrollView style={{ marginTop: 32 }}>
        <Container>

          <View style={styles.cardForm}>
            <Image source={image} style={styles.image} />
            <View style={styles.cardHeader}>
              <Text style={styles.tituloCard}>DADOS DO CONVIDADO</Text>

              <View style={styles.containeInput}>
                <TextField label='CPF' error={''} inputProps={{}} keyboardType="numeric" />
              </View>
              <View style={styles.containeInput}>
                <TextField label='Nome' error={''} inputProps={{}} />
              </View>
              <View style={styles.containeInput}>
                <TextField label='Data' error={''} inputProps={{}} keyboardType="numeric" />
              </View>
              <View style={styles.containeInput}>
                <SelectFieldSimples label='Tipo de Convite' error={''} inputProps={{}} />
              </View>
              <View style={styles.containeInput}>
                <SelectFieldSimples label='Maior de 18 anos' error={''} inputProps={{}} />
              </View>
              <View style={styles.containeInput}>
                <SelectFieldSimples label='Estrangeiro' error={''} inputProps={{}} />
              </View>
              <ButtonSolid
                icon='ticket'
                title='CRIAR CONVITE'
                onPress={() => { navigation.navigate('ConvitesDetails') }}
              />
            </View>
          </View>

        </Container>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  cardForm: {
    width: '100%',
    minHeight: 140,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#E7E7E7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.85,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    borderRightWidth: 12,
    borderRightColor: '#B72619'
  },
  cardHeader: {
    width: '100%',
    padding: 20,
  },
  containeInput: {
    marginBottom: 12
  },
  tituloCard: {
    fontSize: 20,
    color: '#0079BD',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});