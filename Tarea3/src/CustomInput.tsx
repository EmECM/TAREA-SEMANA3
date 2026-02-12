import { TextInput, View, Text, StyleSheet, TouchableOpacity, KeyboardTypeOptions} from "react-native";
import{Ionicons, MaterialIcons} from "@expo/vector-icons";
import { useState } from "react";

type Props ={
    placeholder: string,
    onChange: (text: string) => void,
    value: string,
    typeInput: 'number' | 'text';
}
export default function CustomInput ({placeholder, onChange, value, typeInput}:Props){

    //definicion de variable para asignacion de teclado de acuerdo con el input
    const keyboardType: KeyboardTypeOptions = 
    typeInput === "text" ? 'default' :
           typeInput === "number" ? 'numeric' : "default"

    //funcion para mostrar mensaje de acuerdo con la presencia de caracteres y numeros
     const getMessage=()=>{
        if(value.length === 0)
            return 'Campo vacio, favor llenar';

        if (typeInput === 'number') {
    // bucle 'for' para validar la presencia de numeros
    for (let i = 0; i < value.length; i++) {
      if (value[i] < '0' || value[i] > '9') {
        return 'Solo se permiten números';
      }
    }
    }
    }

    const message = getMessage();

    return(
        //Wrapper
        <View style={styles.wrapper}>
            <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                value={value} 
                onChangeText={onChange}
                keyboardType={keyboardType}
            />
            </View>
            {message && (<Text> {message}</Text>)}
        </View>
    );

}

const styles = StyleSheet.create({
    wrapper:{
        marginBottom:10,
        width: "100%"
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',

        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        paddingHorizontal: 15,
    },
    input:{
        paddingHorizontal:10,
        flex: 1,
    }


});