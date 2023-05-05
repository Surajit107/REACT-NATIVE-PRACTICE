import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ text, OnPress }) => {
    return (
        <View style={styles.button_wrap}>
            <TouchableOpacity
                style={styles.button}
                onPress={OnPress}
                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                activeOpacity={0.6}
            >
                <Text style={styles.button_text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button_wrap: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#0000ff"
    },
    button_text: {
        fontSize: 20,
        fontWeight: 500,
        color: "#ffffff",
        paddingHorizontal: 20,
    },
})