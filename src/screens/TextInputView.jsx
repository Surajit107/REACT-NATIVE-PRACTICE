import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { DismissKeyboard } from '../util/DismissKeyBoard'

const TextInputView = () => {
    // const [formData, setFormData] = useState({
    //     email: "",
    //     password: ""
    // })


    // onPress func.
    const handleOnPress = () => {
        alert("Button Pressed");
        // console.log(formData);
    }

    return (
        <SafeAreaView style={styles.parent}>
            {/* Login Text */}
            <Text style={styles.loginText}>LOGIN</Text>
            <DismissKeyboard>
                <View style={styles.textinput}>

                    {/* Email */}
                    <TextInput
                        style={styles.input}
                        // value={formData?.email}
                        // onChange={(e) => setFormData(e.target.value)}
                        placeholder='Enter Your Email ID'
                    />

                    {/* Password */}
                    <TextInput
                        style={styles.input}
                        // value={formData?.password}
                        // onChange={(e) => setFormData(e.target.value)}
                        placeholder='Enter Your Password'
                        secureTextEntry={true}
                    />

                    {/* Button */}
                    <View style={styles.button_wrap}>
                        <Pressable
                            style={({ pressed }) => [{ backgroundColor: pressed ? "#59da30" : "#4ec429" }, styles.button]}
                            onPress={handleOnPress}
                            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                            android_ripple={{ color: "#3fb919" }}
                        >
                            <Text style={styles.button_text}>Log In</Text>
                        </Pressable>
                    </View>
                </View>
            </DismissKeyboard>
        </SafeAreaView>
    )
}

export default TextInputView

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "#c2ecb6",
        alignItems: "center",
        justifyContent: "center"
    },
    loginText: {
        flex: 1,
        fontSize: 50,
        color: "#3fb919",
        fontWeight: 500,
        marginTop: 100
    },
    textinput: {
        flex: 3,
    },
    input: {
        borderWidth: 1,
        width: 370,
        height: 55,
        margin: 15,
        borderColor: "#d5daed",
        borderRadius: 50,
        fontSize: 16,
        paddingLeft: 25,
        backgroundColor: '#f0fafa'
    },
    button_wrap: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        width: 100,
        paddingTop: 5,
        paddingBottom: 8,
        textAlign: "center",
        borderRadius: 5,
    },
    button_text: {
        fontSize: 20,
        fontWeight: 500,
        color: "#ffffff"
    }
})