import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

export default Home

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