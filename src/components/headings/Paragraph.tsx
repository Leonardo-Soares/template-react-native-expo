import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Paragraph({ children, color = "black" }: { children: string, color?: string }) {
  return (
    <Text style={[styles.text, { color: color }]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '400',
  }
})

