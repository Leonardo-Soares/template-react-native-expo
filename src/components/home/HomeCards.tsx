import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import CardHome from '../cards/CardHome'
import H1 from '../headings/H1'


export default function HomeCards({ navigation }: { navigation: any }) {

  const cards = [
    {
      id: 1,
      title: 'Carteirinha',
      image: require('../../../assets/img/carteirinha.png'),
      route: 'Carteirinha'
    },
    {
      id: 2,
      title: 'Convites',
      image: require('../../../assets/img/convites.png'),
      route: 'Convites'
    },
    {
      id: 3,
      title: 'Via boleto',
      image: require('../../../assets/img/via-boleto.png'),
      route: 'Boleto'
    },
    {
      id: 4,
      title: 'Clube Partiu',
      image: require('../../../assets/img/clube-partiu.png'),
      route: 'ClubeScreen'
    },
    {
      id: 5,
      title: 'Whatsapp',
      image: require('../../../assets/img/whatsapp.png'),
      route: 'Whatsapp'
    },
    {
      id: 6,
      title: 'Notificações',
      image: require('../../../assets/img/notificacoes.png'),
      route: 'NotificacaoScreen'
    },
  ]

  return (
    <View style={{ flex: 1, width: '100%', marginTop: 32 }}>
      <H1 title='O que você procura?' />
      <ScrollView >
        <View style={styles.container}>
          {
            cards.map(card => (
              <CardHome key={card.id} title={card.title} image={card.image} route={card.route} navigation={navigation} />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  }
})
