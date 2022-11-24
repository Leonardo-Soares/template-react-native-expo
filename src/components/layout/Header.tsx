import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import image from '../../../assets/img/bg/bg-menu.png'
import logotipo from '../../../assets/img/logotipo.png'
import Container from '../Container'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
interface IHeaderProps {
  title: string
  type?: 'home' | 'internal'
}

export default function Header({ title, type }: IHeaderProps) {
  return (
    <ImageBackground style={styles.container} source={image} resizeMode='cover'>
      <Container>
        <View style={styles.wrapper}>
          {
            type === 'home' ?
              (
                <Image source={logotipo} style={styles.logo} />
              ) : (
                <TouchableOpacity onPress={() => { }}>
                  <AntDesign name="back" size={32} color="#0054A5" />
                </TouchableOpacity>
              )
          }
          <Text style={styles.title}>{title}</Text>
          {
            type === 'home' ?
              (
                <TouchableOpacity onPress={() => { }}>
                  <MaterialIcons name="logout" size={32} color="#0054A5" />
                </TouchableOpacity>
              ) : (
                <Image source={logotipo} style={styles.logo} />
              )
          }

        </View>
      </Container>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 90,
    paddingTop: 38,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 36,
    height: 36
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
