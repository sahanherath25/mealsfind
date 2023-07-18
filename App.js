import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginButton from "./src/components/LoginButton";



console.log(StatusBar.currentHeight)
export default function App() {
    return (

        <>
            <SafeAreaProvider style={styles.mainContainer}>
                <View style={styles.searchBox}>
                    <Text>Search</Text>
                </View>
                <View style={styles.list}>
                    <Text>List</Text>
                </View>

                <LoginButton title={"Submit"}/>
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


});
