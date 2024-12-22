import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonConvert({onPress, unit}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"black",
        paddingHorizontal : 40,
        paddingVertical: 20,
        borderRadius : 30,
        width : 250,
    },
    text:{
        alignSelf: "center",
        color:"white",
        fontWeight : 'bold'
    }
})