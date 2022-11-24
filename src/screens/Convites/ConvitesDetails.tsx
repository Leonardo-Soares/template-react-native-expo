import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Container from "../../components/Container";
import MainLayout from "../../components/layout/MainLayout";
import ButtonSolid from "../../components/buttons/ButtonSolid";
import ButtonShare from "../../components/buttons/ButtonShare";
import image from '../../../assets/img/bg/bg-ondas-assembleia.png';
import qrCode from '../../../assets/img/qrcode.png';
import ModalAlerta from "../../components/modals/ModalCopyText";
import ModalCopyText from "../../components/modals/ModalCopyText";

export default function ConvitesDetails({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Convites" navigation={navigation} headerTitle={"Convites"}>
      <ScrollView style={{ marginTop: 32 }}>
        <Container>

          <View style={styles.cardForm}>
            <Image source={image} style={styles.image} />
            <View style={styles.cardHeader}>
              <Text style={styles.tituloCard}>Convite criado com sucesso!</Text>
              <View style={styles.bodyCard}>
                <Text style={styles.bodyTitulo}>Número do convite</Text>
                <Text style={styles.bodySubTitulo}>457896</Text>
              </View>
              <View style={styles.bodyCard}>
                <Text style={styles.bodyTitulo}>CPF</Text>
                <Text style={styles.bodySubTitulo}>999.999.999-99</Text>
              </View>
              <View style={styles.bodyCard}>
                <Text style={styles.bodyTitulo}>Nome</Text>
                <Text style={styles.bodySubTitulo}>Leonardo Soares</Text>
              </View>
              <View style={styles.bodyCard}>
                <Text style={styles.bodyTitulo}>Data</Text>
                <Text style={styles.bodySubTitulo}>18/10/2022</Text>
              </View>
              <View style={styles.bodyCard}>
                <Text style={styles.bodyTitulo}>Tipo de Convite</Text>
                <Text style={styles.bodySubTitulo}>Convite Clube</Text>
              </View>

              <View style={{ marginVertical: 20, alignItems: "center", }}>
                <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 12 }}>
                  <Image source={qrCode} style={{ maxWidth: 120, maxHeight: 120 }} />
                </View>
              </View>

              <View style={{ alignItems: "center" }}>
                <ButtonShare
                  buttonTitle="COMPARTILHAR CONVITE"
                  mensagemShare={'Assembleia Paraense | Você foi convidado a por um de nossos sócios !!!'}
                  icon={'share-2'}
                />
                <View style={{ height: 12 }}></View>
                <ModalCopyText
                  titleButton='COPIAR LINK'
                  titleModal='Link copiado para a área de transferencia'
                  conteudoCopy="Link a ser copiado"
                  icon={"copy"}
                />
              </View>
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
  tituloCard: {
    fontSize: 20,
    color: '#0079BD',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  bodyCard: {
    marginLeft: 20,
    marginVertical: 12,
  },
  bodyTitulo: {
    fontSize: 16,
    color: '#79747E',
  },
  bodySubTitulo: {
    fontSize: 20,
    color: '#1E1E1E',
    fontWeight: "500",
  }
});