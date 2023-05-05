import { FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const FlatListItem = () => {
    const [data, setData] = useState([
        { name: "Item - 0" },
        { name: "Item - 1" },
        { name: "Item - 2" },
        { name: "Item - 3" },
        { name: "Item - 4" },
        { name: "Item - 5" },
        { name: "Item - 6" },
        { name: "Item - 7" },
        { name: "Item - 8" },
        { name: "Item - 9" },
        { name: "Item - 10" },
        { name: "Item - 11" },
        { name: "Item - 12" },
        { name: "Item - 13" },
        // { name: "Item - 14" },
    ])


    const [loading, setLoading] = useState(false)
    const onRefresh = () => {
        setLoading(true)
        setData([...data, { name: "Item - 14" }])
        setLoading(false)
    }

    return (
        <SafeAreaView style={styles.body}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item?.name}</Text>
                    </View>
                )}
                refreshControl={<RefreshControl
                    refreshing={loading}
                    onRefresh={onRefresh}
                    colors={["#f00035"]}
                />}
            />
        </SafeAreaView>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f00035",
    },
    item: {
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    text: {
        fontSize: 50,
        color: "black",
        marginTop: 10,
        marginBottom: 10
    }
})