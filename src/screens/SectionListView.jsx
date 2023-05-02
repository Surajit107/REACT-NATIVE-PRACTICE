import { RefreshControl, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const SectionListView = () => {
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

    const newData = [
        {
            title: "Title 1",
            data: ['Item 0-1', 'Item 1-2', 'Item 2-3']
        },
        {
            title: "Title 2",
            data: ['Item 4-5', 'Item 5-6', 'Item 6-7']
        },
        {
            title: "Title 3",
            data: ['Item 8-9', 'Item 9-10', 'Item 10-11']
        },
        {
            title: "Title 4",
            data: ['Item 12-13']
        },
    ]

    const [loading, setLoading] = useState(false)
    const onRefresh = () => {
        setLoading(true)
        setData([...data, { name: "Item - 14" }])
        setLoading(false)
    }

    return (
        <SafeAreaView style={styles.body}>
            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={newData}
                renderItem={({ item }) => (
                    <Text style={styles.text}>{item}</Text>
                )}
                renderSectionHeader={({ section }) => {
                    <View style={styles.item}>
                        <Text style={styles.text}>{section.title}</Text>
                    </View>
                }}
                refreshControl={<RefreshControl
                    refreshing={loading}
                    onRefresh={onRefresh}
                    colors={["#f00035"]}
                />}
            />
        </SafeAreaView>
    )

}

export default SectionListView

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