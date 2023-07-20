import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginButton from "./src/components/LoginButton";
import React from "react";
import SuggestionComponent from "./src/screens/SuggestionComponent";
import SuggestionForm from "./src/screens/SuggestionForm";
import ReportForm from "./src/screens/ReportForm";
import AlumniSection from "./src/screens/AlumniSection";
import { Searchbar } from 'react-native-paper';



console.log(StatusBar.currentHeight)
export default function App() {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (

        <>
            <SafeAreaProvider style={styles.mainContainer}>

                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                {/*<View style={styles.searchBox}>*/}
                {/*    <Text>Search</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.list}>*/}
                {/*    <Text>List</Text>*/}
                {/*</View>*/}

                {/*<LoginButton title={"Submit"}/>*/}

                {/*<SuggestionComponent/>*/}

                {/*<ReportForm/>*/}

                <AlumniSection/>
                {/*<SuggestionForm/>*/}



            </SafeAreaProvider>

            <ExpoStatusBar/>


        </>

    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        marginTop:StatusBar.currentHeight,
    },
    container: {
        borderColor: "red",
        borderWidth: 2,
        borderStyle: "solid",
    },
    searchBox: {
        backgroundColor: "green",
        padding: 16,
        // flexGrow:1,
        width: "100%",
    },

    list: {
        flex: 1,
        backgroundColor: "blue",
        // flexGrow: 9,
        width: "100%",
        padding: 16,
    },
    textStyle: {
        fontSize: 10,

    },
    flexContainer: {
        width:"80%",
        flexDirection:"row",
        borderColor:"black",
        borderWidth:2,
        borderStyle:"s"
    },




});
