import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Button from '../custom/Button'

const Profile = ({ navigation }) => {
    const logOut = () => {
        alert("Log Out Successfully")
        navigation.replace("Login")
    }
    return (
        <View style={styles.parent}>
            <Text style={styles.text}>Profile</Text>
            <Button
                OnPress={logOut}
                text={"Log Out"}
            />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00ff7f",
    },
    text: {
        fontSize: 50,
        color: "#00008b",
        fontWeight: 500,
    },
})