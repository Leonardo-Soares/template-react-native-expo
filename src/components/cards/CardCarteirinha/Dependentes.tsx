import React from 'react'
import { ImageBackground, View } from 'react-native'
import Strong from '../../headings/Strong'
import { styles } from './style'
import avatar from "../../../../assets/img/avatar.png"

export default function Dependentes() {
  return (
    <View style={{ marginTop: 16 }}>
      <Strong>Dependentes</Strong>
      <View style={styles.avatarWrapper}>
        <ImageBackground style={styles.avatar} source={avatar} />
        <ImageBackground style={styles.avatar} source={avatar} />
        <ImageBackground style={styles.avatar} source={avatar} />
      </View>
    </View>
  )
}
