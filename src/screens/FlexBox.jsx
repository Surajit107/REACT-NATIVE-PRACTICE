import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
    return (
        <View style={styles.body}>
            <View style={styles.view1}>
                <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.view3}>
                <Text style={styles.text}>3</Text>
            </View>
        </View>
    )
}

export default FlexBox

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#d7e7d8",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        // color: "#000000",
        fontSize: 35,
        // margin: 10,
    },
    view1: {
        width: 100,
        height: 100,
        backgroundColor: "#d76067",
        alignItems: "center",
        justifyContent: "center"
    },
    view2: {
        width: 100,
        height: 100,
        backgroundColor: "#a7c44c",
        alignItems: "center",
        justifyContent: "center"
    },
    view3: {
        width: 100,
        height: 100,
        backgroundColor: "#3fb59e",
        alignItems: "center",
        justifyContent: "center"
    },
})