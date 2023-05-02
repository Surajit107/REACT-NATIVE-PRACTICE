import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'

const ScrollViews = () => {
    const [data, setData] = useState([
        { key: 0, item: "Item - 0" },
        { key: 1, item: "Item - 1" },
        { key: 2, item: "Item - 2" },
        { key: 3, item: "Item - 3" },
        { key: 4, item: "Item - 4" },
        { key: 5, item: "Item - 5" },
        { key: 6, item: "Item - 6" },
        { key: 7, item: "Item - 7" },
        { key: 8, item: "Item - 8" },
        { key: 9, item: "Item - 9" },
        { key: 10, item: "Item - 10" },
        { key: 11, item: "Item - 11" },
        { key: 12, item: "Item - 12" },
        { key: 13, item: "Item - 13" },
        // { key: 14, item: "Item - 14" },
    ])

    const [loading, setLoading] = useState(false)
    const onRefresh = () => {
        setLoading(true)
        setData([...data, { key: 14, item: "Item - 14" }])
        setLoading(false)
    }

    return (
        <ScrollView
            style={styles.body}
            refreshControl={<RefreshControl
                refreshing={loading}
                onRefresh={onRefresh}
                colors={["#f00035"]}
            />}
        >
            {
                data?.map(item => {
                    return (
                        <View style={styles.item} key={item?.key}>
                            <Text style={styles.text}>{item?.key} : {item?.item}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default ScrollViews

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