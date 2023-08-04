import React, {useState} from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Searchbar} from "react-native-paper";
import ResturantInfo from "../components/RestautantInfo";


const Restaurants = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View style={styles.list}>
                <ResturantInfo/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight,
    },
    search:{
        padding:16
    },
    list:{
        flex:1,
        padding:16,
        // backgroundColor:"blue"
    }
})

export default Restaurants;