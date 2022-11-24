import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

interface clubePartiu {
  title: string,
  subTitle: string,
  logo: string,
  discount: number,
  props?: any,
}

export default function CardClubePartiu({ title, subTitle, logo, discount, ...props }: clubePartiu) {
  return (
    <>
      <View style={styles.cardBoleto}>

        <View style={styles.cardHeader}>
          <View style={styles.containerDiscount}>
            <View style={{ paddingLeft: 8, paddingBottom: 8 }}>
              <Text style={styles.discount}>{discount}</Text>
              <Text style={styles.porcentagem}>%</Text>
            </View>
          </View>
          <View style={styles.logo}>
            <Image source={logo} />
          </View>
        </View>

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>

      </View>
    </>
  )
}
const styles = StyleSheet.create({
  cardBoleto: {
    width: '48%',
    borderRadius: 8,
    marginBottom: 16,
  },
  cardHeader: {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    color: '#0F2597', 
    fontWeight: 'bold', 
  },
  subTitle: {
    color: '#6F8790', 
    fontWeight: '700',
  },
  discount: {
    fontSize: 32,
    color: '#fff', 
    fontWeight: '100', 
  },
  porcentagem: {
    top: 22, 
    right: 6, 
    fontSize: 16, 
    color: '#fff', 
    fontWeight: '200', 
    position: 'absolute', 
    backgroundColor: '#189E2A',
  },
  containerDiscount: {
    right: 0,
    width: 52, 
    height: 52, 
    position: 'absolute', 
    backgroundColor: '#189E2A', 
  },
  logo: {
    marginVertical: 58, 
    marginHorizontal: 8,
  }
});
