import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
const [display, setDisplay] = useState('0');
const [previousValue, setPreviousValue] = useState(null);
const [operator, setOperator] = useState(null);
const [waitingForNewValue, setWaitingForNewValue] = useState(false);

const handleNumberPress = (num) => {
  if (waitingForNewValue){
    setDisplay(String(num));
    setWaitingForNewValue(false);
  }else {
    setDisplay(display ==='0' ? String(num) : display + num)
  }
}

const handleClear = () => {
  setDisplay('0');
  setPreviousValue(null);
  setOperator(null);
  setWaitingForNewValue(false);
}

const handleOperatorPress = (op) => {
  const inputValue = parsefloat(display);

  if(previousValue === null) {
    setPreviousValue(inputValue);
 } else if (operator) {
  const result = calculate(previousValue, inputValue, operator)
  setDisplay(string(result));
  setPreviousValue(result);
 }

 setWaitingForNewValue(true);
 setOperator(op);
}

const calculate = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '+' : return firstValue + secondValue;
    case '-' : return firstValue - secondValue;
    case 'x' : return firstValue * secondValue;
    case '' : return firstValue / secondValue;
    default: return secondValue;
  }
}
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

           {/* Display da Calculadora */}
        <View style={styles.displayContainer}>
          <Text style={styles.displayText} numberOfLines={1}>
            {display}
          </Text>
     </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.functionButton} onPress={handleClear}>
            <Text style={styles.functionText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.functionButton}>
            <Text style={styles.functionText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.functionButton}>
            <Text style={styles.functionText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton}>
            <Text style={styles.operatorButton}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.functionButton} onPress={() => handleNumberPress(7)}>
            <Text style={styles.functionText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.functionButton} onPress={() => handleNumberPress(8)}>
            <Text style={styles.functionText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.functionButton} onPress={() => handleNumberPress(9)}>
            <Text style={styles.functionText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton}>
            <Text style={styles.operatorButton}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.functionButton}>
            <Text style={styles.functionText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.functionButton}>
            <Text style={styles.functionText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.functionButton}>
            <Text style={styles.functionText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton}>
            <Text style={styles.operatorButton}>.</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.functionButton}>
            <Text style={styles.functionText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.functionButton}>
            <Text style={styles.functionText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.functionButton}>
            <Text style={styles.functionText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton}>
            <Text style={styles.operatorButton}>+</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
          <TouchableOpacity style={[styles.buttonNumber, styles.doubleWidthButton]}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton}>
            <Text style={styles.operatorText}>=</Text>
          </TouchableOpacity>
        
        </View>
        
        <View style={styles.row}>
          <TouchableOpacity style={[styles.buttonNumber, styles.doubleWidthButton]}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton}>
            <Text style={styles.operatorText}>=</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.row}>
          <TouchableOpacity style={[styles.buttonNumber, styles.doubleWidthButton]}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton}>
            <Text style={styles.operatorText}>=</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
displayContainer:{
    flex: 2.5,
    justifyContent: 'flex-end',
    alingItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  displayText:{
    color: '#ffffff',
    fontSize:72,
    fontWeight: '300',

  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  functionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#A5A5A5'
  },
  functionText: {
    color: '#000000',
    fontSize: 28, 
  },
  operatorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#FF9500'
  },
  operatorText: {
    color: '#ffffff',
    fontSize: 28,
  },
  buttonNumber:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#333333'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 32,
  },
  doubleWidthButton: {
    flex: 2,
    alingItems: 'flex-start',
    paddingLeft: 32,
  }
});