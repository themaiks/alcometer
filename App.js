import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { IconButton, PaperProvider, Switch, TextInput, Button, RadioButton } from 'react-native-paper';
import styles from './style/style';
import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [checked, setChecked] = useState('first');
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);
  const [weight, setWeight] = useState(''); // State to store weight input

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const incrementNumber2 = () => {
    setNumber2(number2 + 1);
  };

  const decrementNumber2 = () => {
    if (number2 > 0) {
      setNumber2(number2 - 1);
    }
  };

  const calculateBloodAlcoholLevel = () => {
    const litres = number * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = number2 / 10;
    const gramsLeft = grams - burning * number2;

    const weightNumeric = parseFloat(weight); // Convert weight to a numeric value

    if (isNaN(weightNumeric)) {
      // Handle the case where weight is not a valid number
      return;
    }

    let result = 0;

    if (checked === 'first') {
      result = gramsLeft / (weightNumeric * 0.7);
    } else if (checked === 'second') {
      result = gramsLeft / (weightNumeric * 0.6);
    }

    setBloodAlcoholLevel(result);
  };

  return (
    <PaperProvider theme={styles.style}>
      <ScrollView style={{ paddingTop: 100, alignSelf: 'flex-start', paddingLeft: 20 }}>
        <Text style={styles.alcotext}>Alcometer</Text>

        <Text style={styles.TitleText}>Weight</Text>
        <TextInput
          style={styles.textinput}
          keyboardType='numeric'
          value={weight}
          onChangeText={text => setWeight(text)}
        />

        <Text style={styles.TitleText}>Bottles</Text>
        <View style={styles.buttonContainer}>
          <Button mode='contained' style={styles.button} onPress={decrementNumber}>-</Button>
          <Text style={styles.beerbottles}>{number}</Text>
          <Button mode='contained' style={styles.button} onPress={incrementNumber}>+</Button>
        </View>

        <Text style={styles.TitleText}>Hours</Text>
        <View style={styles.buttonContainer}>
          <Button mode='contained' style={styles.button} onPress={decrementNumber2}>-</Button>
          <Text style={styles.beerbottles}>{number2}</Text>
          <Button mode='contained' style={styles.button} onPress={incrementNumber2}>+</Button>
        </View>

        <View style={styles.radiobutton}>
          <RadioButton
            color='#0004ff'
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text>Male</Text>
        </View>
        <View style={styles.radiobutton2}>
          <RadioButton
            color='#ff0000'
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text>Female</Text>
        </View>

        <View>
        <Text style={styles.calculateText}>{bloodAlcoholLevel.toFixed(2)}</Text>
        </View>
        <View style={styles.calculatebutton}>
          <Button mode='contained' style={styles.calcbtn} onPress={calculateBloodAlcoholLevel}>
            Calculate
          </Button>
        </View>

      </ScrollView>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}