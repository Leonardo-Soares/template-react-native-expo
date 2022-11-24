import React from "react";
import { ScrollView, View } from "react-native";
import Container from "../../components/Container";
import MainLayout from "../../components/layout/MainLayout";
import CardClubePartiu from "../../components/cards/CardClubePartiu";
import imgParceiro from '../../../assets/img/clube-partiu/netshoes-logo-1.png'

export default function ClubeScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Carteirinha" navigation={navigation} headerTitle={"Clube Partiu"}>
      <ScrollView style={{ marginTop: 32 }}>
        <Container>
          <View style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>

            <CardClubePartiu
              title='NETSHOES'
              subTitle={'ONLINE'}
              discount={20}
              logo={imgParceiro}
              props={''}
            />
            <CardClubePartiu
              title='NETSHOES'
              subTitle={'ONLINE'}
              discount={20}
              logo={imgParceiro}
              props={''}
            />
            <CardClubePartiu
              title='NETSHOES'
              subTitle={'ONLINE'}
              discount={20}
              logo={imgParceiro}
              props={''}
            />
            <CardClubePartiu
              title='NETSHOES'
              subTitle={'ONLINE'}
              discount={20}
              logo={imgParceiro}
              props={''}
            />
            <CardClubePartiu
              title='NETSHOES'
              subTitle={'ONLINE'}
              discount={20}
              logo={imgParceiro}
              props={''}
            />            
            <CardClubePartiu
              title='NETSHOES'
              subTitle={'ONLINE'}
              discount={20}
              logo={imgParceiro}
              props={''}
            />               
          </View>
        </Container>
      </ScrollView>
    </MainLayout>
  );
}
