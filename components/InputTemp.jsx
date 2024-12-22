import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function InputTemp({defaultValue, onChangeText, unit}) {
    return (
        <View style={styles.container}>
          <TextInput style={styles.input}
           placeholder='Tape une temperature'
           keyboardType='numeric'
           maxLength={4}
           defaultValue={defaultValue}
           onChangeText={onChangeText}
            />
            <Text style={styles.unit}>{unit}</Text>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        container:{
            alignSelf: 'stretch',
            justifyContent:'center'

        },
        input:{
            backgroundColor:'white',
            borderRadius : 20,
            height: 50,
            paddingLeft : 25,
        },
        unit:{
            position:'absolute',
            fontSize : 30,
            alignSelf : 'flex-end',
            paddingRight: 25,
        }
    })