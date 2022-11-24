import React from 'react'
import { View } from 'react-native';
import Paragraph from '../../headings/Paragraph';
import Strong from '../../headings/Strong';
import { styles } from './style';

export default function Infos() {
  return (
    <View>
      <View style={styles.info}>
        <Strong>Matrícula: </Strong>
        <Paragraph>Matrícula: </Paragraph>
      </View>
      <View style={styles.info}>
        <Strong>Matrícula: </Strong>
        <Paragraph>123456 </Paragraph>
      </View>
      <View style={styles.info}>
        <Strong>Título: </Strong>
        <Paragraph>111111 </Paragraph>
      </View>
      <View style={styles.info}>
        <Strong>Emissão </Strong>
        <Paragraph>18/12/2015 </Paragraph>
      </View>
      <View style={styles.info}>
        <Strong>Validade: </Strong>
        <Paragraph>12/2025</Paragraph>
      </View>
    </View>
  )
}
