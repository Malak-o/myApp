import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

export default function App(){
  const [ equalsText, setEqualsText ] = userState("");
  const [ CalculatorText, setCalculatorText] = useState("");

  const onClickedButton = (text) => {
    if (text == "="){
      return calcEquals();
    }
    setEqualsText(equalsText + text);
  };
  const calcEquals = () => {
    setCalculatorText(eval(equalsText));
  };

  const onOperationClick = (operation) => {
    let operations = [ "CE", "+", "-", "*", "/", ];

    if (operation == "CE"){
      return setEqualsText(
        equalsText.toString().substring(0, equalsText.length - 1 )
      );
    }
    if (operation == "AC"){
      setEqualsText("");
      setCalculatorText(0);
      return;
    }
    if (operations.includes(equalsText.toString().split("").pop())) return;
    setCalculatorText(equalsText + operation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.equals}>
        <Text style={styles.equalsText}>{CalculatorText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}{...equalsText}></Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>

            <TouchableOpacity
            onPress={() => onClickedButton(1)}
            style={styles.btn}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => onClickedButton(2)}
            style={styles.btn}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => onClickedButton(3)}
            style={styles.btn}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
              onPress={() => on>ClickedButton(4)}
              style={styles.btn}>
                <Text style={styles.number}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => onClickedButton(5)}
              style={styles.btn}>
                <Text style={styles.number}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => onClickedButton(6)}
              style={styles.btn}>
                <Text style={styles.number}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
              onPress={() => onClickedButton(7)}
              style={styles.btn}>
                <Text style={styles.number}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => onClickedButton(8)}
              style={styles.btn}>
                <Text style={styles.number}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => onClickedButton(9)}
              style={styles.btn}>
                <Text style={styles.number}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
              onPress={() => onClickedButton(".")}
              style={styles.btn}>
                <Text style={styles.number}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => onClickedButton(0)}
              style={styles.btn}>
                <Text style={styles.number}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => onClickedButton("=")}
              style={styles.btn}>
                <Text style={styles.number}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations}>
            <TouchableOpacity
            onPress={() => onClickedButton("C")}
            style={styles.btn}>
              <Text style={styles.operationButton}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => onClickedButton("AC")}
            style={styles.btn}>
              <Text style={styles.operationButton}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => onClickedButton("+")}
            style={styles.btn}>
              <Text style={styles.operationButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => onClickedButton("-")}
            style={styles.btn}>
              <Text style={styles.operationButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => onClickedButton("/")}
            style={styles.btn}>
              <Text style={styles.operationButton}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => onClickedButton("*")}
            style={styles.btn}>
            <Text style={styles.operationButton}>*</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  result: {
    flex: 2,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  equalsText: {
    fontSize: 30,
    color: "white",
  },
  calculationText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  number: {
    fontSize: 30,
    color: "white,"
  },
  calculation: {
    flex: 1,
    backgroundColor: "#5C899C",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: "30",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    backgroundColor: "#52BFED",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  operations: {
    flex: 1,
    backgroundColor: "#5B727A",
    alignItems: "center",
    justifyContent: "space-around",
  },
  operationButton: {
    fontSize: 30,
    color: "white",
  },

 });
