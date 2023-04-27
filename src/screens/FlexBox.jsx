import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.row1}>
                <View style={styles.box1}>
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.box3}>
                    <Text style={styles.text}>3</Text>
                </View>
            </View>

            <View style={styles.box4}>
                <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.box5}>
                <Text style={styles.text}>5</Text>
            </View>

            <View style={styles.row3}>
                <View style={styles.box6}>
                    <Text style={styles.text}>6</Text>
                </View>
                <View style={styles.box7}>
                    <Text style={styles.text}>7</Text>
                </View>
            </View>
        </View>
    )
}

export default FlexBox

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    text: {
        fontSize: 35,
    },
    row1: {
        flex: 1,
        flexDirection: "row"
    },
    row3: {
        flex: 6,
        flexDirection: "row"
    },
    box1: {
        flex: 1,
        backgroundColor: "#d76067",
        alignItems: "center",
        justifyContent: "center"
    },
    box2: {
        flex: 2,
        backgroundColor: "#a7c44c",
        alignItems: "center",
        justifyContent: "center"
    },
    box3: {
        flex: 3,
        backgroundColor: "#3fb59e",
        alignItems: "center",
        justifyContent: "center"
    },
    box4: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    box5: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    box6: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    box7: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    }
})