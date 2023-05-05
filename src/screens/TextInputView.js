import { Image, Keyboard, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../custom/Button'

const TextInputView = ({ navigation }) => {
    const [formData, setFormData] = useState({
        username: "Admin",
        email: "admin@gmail.com",
        password: "admin"
    })

    const [show, setShow] = useState(false)


    // onPress func.
    const handleOnPress = () => {
        if (formData?.email === "admin@gmail.com" && formData?.password === "admin") {
            navigation.replace('Tab');
            alert("Loged In Successfully");
            // setFormData({ email: "", password: "" })
        } else {
            alert("Email ID ar password ta thik thak kore de !!!");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.wrap}>

                    {/* Login Text */}
                    <View style={styles.text_wrap}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </View>

                    <View>
                        {/* Email */}
                        <View style={styles.inputView}>
                            <TextInput
                                inputMode='email'
                                style={styles.input}
                                value={formData?.email}
                                onChangeText={(value) => setFormData({ ...formData, email: value })}
                                placeholder='Enter Your Email ID'
                                placeholderTextColor={"#008b8b"}
                                onBlur={() => Keyboard.dismiss()}
                            />
                        </View>

                        {/* Password */}
                        <View style={styles.inputView}>
                            <TextInput
                                inputMode='text'
                                style={styles.input}
                                value={formData?.password}
                                onChangeText={(value) => setFormData({ ...formData, password: value })}
                                placeholder='Enter Your Password'
                                placeholderTextColor={"#008b8b"}
                                onBlur={() => Keyboard.dismiss()}
                                secureTextEntry={show ? false : true}
                            />
                            <TouchableOpacity
                                style={styles.showPass}
                                onPress={() => show ? setShow(false) : setShow(true)}
                            >
                                <Image
                                    style={styles.stretch}
                                    source={show ? require('../assets/view.png') : require('../assets/hide.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Button */}
                        <Button
                            OnPress={handleOnPress}
                            text={"Log In"}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default TextInputView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00ff7f",
    },
    wrap: {
        // flex: 1,
        // height: "100%",
        // borderWidth: 1,
        // borderColor: "red",
        alignItems: "center",
    },
    // ScrollView: {
    //     flex: 1,
    // },
    text_wrap: {
        marginTop: 100,
    },
    loginText: {
        fontSize: 50,
        color: "#00008b",
        fontWeight: 500,
    },
    inputView: {
        borderWidth: 1,
        borderColor: "#d5daed",
        width: 370,
        height: 55,
        flexDirection: "row",
        margin: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#f0fafa',
        alignItems: "center"
    },
    button_wrap: {
        marginTop: 20,
        marginBottom: 20,
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
        backgroundColor: "#0000ff"
    },
    button_text: {
        fontSize: 20,
        fontWeight: 500,
        color: "#ffffff"
    },
    input: {
        // borderWidth: 1,
        // borderColor: "red",
        paddingLeft: 20,
        width: "88%",
        height: 55,
        borderRadius: 8,
    },
    stretch: {
        width: 23,
        height: 23,
    },
    showPass: {
        width: "12%",
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        // borderColor: "red",
    }
})