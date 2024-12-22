import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TemperatureDisplay({value, unit}) {
  return (
      <Text style={styles.text}>{value} {unit}</Text>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize : 80,
        color:'white'
    }
})