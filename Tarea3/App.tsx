import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; //adicion de libreria Image de react
import CustomInput from './src/CustomInput';
import CustomButton from './src/CustomButton';
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

  // --- EJERCICIO 2 (CONTADOR) ---
  //Creacion del estado contador
  const [contador, setContador] = useState(0);

  // Validacion logica para numero par
  const esPar = contador % 2 === 0;

  // --- EJERCICIO 3 (TOGGLE) ---
  // definicion de estado booleano inicial en false
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  return (    
<View style={styles.container}> {/*EJERCICIO 1 FORMULARIO*/}
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Text>Bienvenido</Text>
        <View>
          <CustomInput 
            placeholder="Escriba su nombre"
            typeInput='text'
            value={nombre}
            onChange={setNombre} 
          />
          <CustomInput 
            placeholder="Escriba su edad"
            typeInput='number'
            value={edad}
            onChange={setEdad}
          />
        </View>
        <View>
          {nombreEsValido && edadEsValida ? (
            <Text>Hola, {nombre}. Tienes {edad} años.</Text>
          ) : (
            <Text>Por favor, completa tus datos.</Text>
          )}
        </View>
      </View>

{/*EJERCICIO 2 (CONTADOR)*/}
      <View style={[styles.card, { marginTop: 20 }]}>
        <Text>Ejercicio 2: Contador</Text>
        
        {/*Texto que se actualiza por estilo y por tipo*/}
        <Text style={{ 
          fontSize: 18, 
           
          color: esPar ? 'blue' : 'purple'  //operador ternario para condicionar color del texto
        }}>
          {esPar ? "Número par" : "Número impar"}
        </Text>

        <Text style={styles.contadorValor}>{contador}</Text>

        {/*Mensaje de error si es menor que 0 */}
        {contador < 0 && (
          <Text style={styles.mensajeError}>No se recomienda valores negativos</Text>
        )}

        <View style={styles.buttonContainer}>
          {/*Botones Sumar y Restar */}
          <CustomButton 
            title="Sumar +1" 
            onClick={() => setContador(contador + 1)} 
            variant="primary" 
          />
          <View style={{ height: 10 }} />
          <CustomButton 
            title="Restar -1" 
            onClick={() => setContador(contador - 1)} 
            variant="secondary" 
          />
        </View>
      </View>

      {/*EJERCICIO 3 (TOGGLE)*/}
      <View style={[styles.card, { marginTop: 20 }]}>
        <Text>Ejercicio 3: Detalles</Text>
        
        {/* Botón con texto aplicando op. ternario */}
        <CustomButton 
          title={mostrarDetalles ? "Ocultar detalles" : "Mostrar detalles"} 
          onClick={() => setMostrarDetalles(!mostrarDetalles)}
          variant="primary"
        />

        <View style={{ marginTop: 15 }}>
          {/* validacion de mostrarDetalles = true, mostrar bloque con descripción e imagen */}
          {mostrarDetalles ? (
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.descripcion}>Detalles del usuario estan activos</Text>
              <Image 
              source={{ uri: 'https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o'}} 
                style={styles.imagen}
              />
            </View>
          ) : (
            /* Si es falso, muestra mensaje: "Detalles ocultos" */
            <Text style={styles.textoOculto}>Detalles ocultos</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: '85%',
    padding: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  contadorValor: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10
  },
  mensajeError: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  
  //estilos para el toogle
  descripcion: {
    textAlign: 'center',
    marginBottom: 10,
    fontStyle: 'italic'
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#ccc'
  },
  textoOculto: {
    color: '#fa6060',
    fontSize: 14
  }
  
});