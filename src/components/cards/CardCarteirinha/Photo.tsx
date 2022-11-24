import React from 'react'
import { ImageBackground, View } from 'react-native';
import { styles } from './style';
import avatar from "../../../../assets/img/avatar.png"
import qrcode from "../../../../assets/img/qrcode.png"

export default function Photo() {
  return (
    <View style={styles.photoWrapper}>
      <ImageBackground style={styles.avatarMain} source={avatar} />
      <ImageBackground style={styles.qrcode} source={qrcode} />
    </View>
  )
}
