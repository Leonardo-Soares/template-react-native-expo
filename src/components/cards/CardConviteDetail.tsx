import React from 'react'
import ButtonSolid from '../buttons/ButtonSolid';
import { View, Text, StyleSheet, Linking, Image } from 'react-native'

interface fileBoleto {
  title: string,
  name: string,
  cpf: string,
  date: string,
  props: any,
}

export default function CardConviteDetail({ title, name, cpf, date, ...props }: fileBoleto) {
  return (
    <View style={styles.cardConvite}>
      <View style={styles.cardHeader}>
        <Text style={styles.tituloCard}>Convite {title}</Text>
        <Text style={styles.titulosBody}>Nome: {''}
          <Text style={styles.subtituloBody}>{name}</Text>
        </Text>
        <Text style={styles.titulosBody}>CPF: {''}
          <Text style={styles.subtituloBody}>{cpf}</Text>
        </Text>
        <Text style={styles.titulosBody}>Data:  {''}
          <Text style={styles.subtituloBody}>{date}</Text>
        </Text>
      </View>
      <Image style={{ height: 140, position: 'absolute', right: 0 }} source={require('../../../assets/img/convites/ondas-assembleia.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
  cardConvite: {
    padding: 20,
    width: '100%',
    minHeight: 140,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRightColor: '#B72619',
    borderRightWidth: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'column',
  },
  tituloCard: {
    fontSize: 20,
    color: '#0079BD',
    fontWeight: 'bold',
  },
  titulosBody: {
    fontSize: 16,
    color: '#022838',
    fontWeight: 'bold',
  },
  subtituloBody: {
    fontWeight: 'normal'
  },
});
