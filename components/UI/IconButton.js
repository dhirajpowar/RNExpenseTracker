import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

function IconButton({icon, size, color, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.button}>
            <View style={styles.container}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    button: {
        opacity: 0.75
    }
})