import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import hot from './assets/hot.png'
import cold from './assets/cold.png'
import InputTemp from './components/InputTemp';
import TemperatureDisplay from './components/TemperatureDisplay';
import { useState, useEffect } from 'react';
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS } from './constants';
import { getOppositUnit, convertTemperature, isIceTemperature } from './services/temperature-services';
import ButtonConvert from './components/ButtonConvert';


export default function App() {

  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE)
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT)
  const oppositUnit = getOppositUnit(currentUnit)
  const [currentBackground, setCurrentBackground] = useState();

  useEffect(()=>{
    const temperatureAsFloat = Number.parseFloat(inputValue)
    if(!isNaN(temperatureAsFloat)){
      const isColdBackground = isIceTemperature(inputValue, currentUnit)
      setCurrentBackground(isColdBackground ? cold : hot)
    }
  },[inputValue, currentUnit])
  
  function getConvertedTemperature(){
    const valueAsFloat = Number.parseFloat(inputValue)
    return isNaN(valueAsFloat) ? '' : convertTemperature(oppositUnit,valueAsFloat).toFixed(1)
  }

  return (
    <ImageBackground source={currentBackground}  style={styles.container}>
      <View style={styles.workspace}>
        <TemperatureDisplay value={getConvertedTemperature()} unit={oppositUnit}/>
        <InputTemp onChangeText={setInputValue} defaultValue={DEFAULT_TEMPERATURE} unit={currentUnit}/>
        <ButtonConvert unit={currentUnit} onPress={()=>{setCurrentUnit(oppositUnit)}}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center',
    padding : 20,
  },
  workspace: {
    height : 450,
    alignItems : 'center',
    justifyContent : 'space-evenly'
  }
});
