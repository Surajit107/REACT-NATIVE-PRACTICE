import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const TestscreenOne = () => {
    const [state, setState] = useState("Hello")
    const [count, setCount] = useState(0)

    // handleState func
    const handleState = () => {
        if (state === "Hello") {
            setState("Welcome Surajit")
        } else if (state === "Welcome Surajit") {
            setState("Hello")
        }
        setCount(count + 1)
    }

    // onReset func.
    const onReset = () => {
        setState("Hello")
        setCount(0)
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>{state}</Text>
            {
                count > 0 ? <Text style={styles.counter}>Button Clicked {count} Times</Text> : null
            }
            <View style={styles.stateBtn}>
                <Button title='UPDATE STATE' onPress={handleState}></Button>
            </View>
            <View style={styles.resetBtn}>
                <Button title='RESET' onPress={onReset}></Button>
            </View>
        </View>
    )
}

export default TestscreenOne


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#6359fc",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 10,
        borderColor: "#b1ba9b",
        borderRadius: 10,
    },
    text: {
        color: "#ffffff",
        fontSize: 25,
        margin: 10,
        fontStyle: "italic",
    },
    counter: {
        color: "#ffffff",
        fontSize: 20,
        margin: 10,
    },
    stateBtn: {
        marginBottom: 10,
    },
    resetBtn: {
        marginTop: 5,
    }
});