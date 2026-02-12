import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './src/CustomInput';
import { useState } from 'react';

export default function App() {
  //declaracion de estados independientes 
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  // Funcion de validacion para revisar existencia de caracteres en 'nombre'
  const nombreEsValido = nombre.length > 0;
  
  // bucle for para validacion de existencia de numeros
  const validarSoloNumeros = (texto: string) => {
    if (texto.length === 0) return false;
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] < '0' || texto[i] > '9') return false;
    }
    return true;
  };

  //definicion de variable que almacena el resultado de la funcion 'validarSoloNumeros'
  const edadEsValida = validarSoloNumeros(edad);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Bienvenido</Text>
        {<StatusBar style="auto" />}
        <View>
          {/* Input para nombre*/}
          <CustomInput 
            placeholder="Escriba su nombre"
            typeInput='text'
            value={nombre}
            onChange={setNombre} 
          />

          {/* Input para edad */}
          <CustomInput 
            placeholder="Escriba su edad"
            typeInput='number'
            value={edad}
            onChange={setEdad}
          />
        </View>

        {/* Mensaje final */}
        <View>
          {nombreEsValido && edadEsValida ? (
            <Text>
              Hola, {nombre}. Tienes {edad} años.
            </Text>
          ) : (
            <Text>
              Por favor, completa tus datos.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '65%',
    height: '30%',
    padding: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 15,
  }
});