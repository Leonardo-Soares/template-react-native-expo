import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import bgCarteirinhaPng from "../../../../assets/img/bg/bg-carteirinha.png"
import H1 from '../../headings/H1';
import Paragraph from '../../headings/Paragraph';
import Strong from '../../headings/Strong';
import Dependentes from './Dependentes';
import Infos from './Infos';
import Photo from './Photo';
import { styles } from './style';

export default function CardCarteirinha() {
  return (
    <ImageBackground style={styles.wrapper} source={bgCarteirinhaPng} resizeMode="cover">
      <View style={{ padding: 16 }}>
        <H1 title={'Angelo Ricardo'} />
        <Photo/>
        <Infos/>
        <Dependentes/>
      </View>
    </ImageBackground>
  )
}



