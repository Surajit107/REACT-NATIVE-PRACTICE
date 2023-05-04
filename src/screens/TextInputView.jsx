import { Image, Keyboard, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const TextInputView = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [show, setShow] = useState(false)


    // onPress func.
    const handleOnPress = () => {
        if (formData?.email && formData?.password) {
            alert("Taka-Poisa Nei Login Kore Ki Korbi ???");
            console.log(formData);
            setFormData({ email: "", password: "" })
        } else {
            alert("Email ID ar Password Ki Tor Bap Debe Suar ???");
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
                                {
                                    show ?
                                        <Image
                                            style={styles.stretch}
                                            source={require('../assets/view.png')}
                                        />
                                        :
                                        <Image
                                            style={styles.stretch}
                                            source={require('../assets/hide.png')}
                                        />
                                }
                            </TouchableOpacity>
                        </View>

                        {/* Button */}
                        <View style={styles.button_wrap}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleOnPress}
                                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                activeOpacity={0.6}
                            >
                                <Text style={styles.button_text}>Log In</Text>
                            </TouchableOpacity>
                        </View>
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