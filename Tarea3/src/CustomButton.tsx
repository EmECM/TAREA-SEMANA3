import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps{
    title: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "text";
}

export default function CustomButton({
    title,
    onClick,
    variant = "primary"
}: CustomButtonProps){
    const styles = getStyles(variant);

    return(
    <TouchableOpacity
    onPress={onClick}
    style={styles.container}
    >
        <Text
            style={styles.text}>
            {title}
        </Text>
    </TouchableOpacity>

    );
}


const getStyles = (variant:'primary' | 'secondary' | 'text') =>{
    const isText = variant === "text";
    const bg =
    variant === "primary" ? "#1ebc43" :
    variant === "secondary" ? "#f63535" :
    "transparent";

    const textColor = 
    variant === "primary" ? "black" :
    variant === "secondary" ? "white" :
    "#6B7280"


    return StyleSheet.create({
    container:{
        backgroundColor: bg,
        width : isText ? "auto" : "80%",
        borderWidth: isText ? 0 : 1,
        borderColor: isText ? "transparent" : "#ffffff",
        borderRadius: isText ? 0 : 8,
        paddingVertical: isText ? 6 : 15,
//       paddingHorizontal: isText ? 8 : 0,
        alignItems: 'center',
//        alignSelf: isText ? "center" : "auto",
//        marginTop: isText ? 12 : 0,
    },

    text:{
        color: textColor,
        fontSize: isText ? 14 : 18,
        fontWeight: "500"

    },

});
};
