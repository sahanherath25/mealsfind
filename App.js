import {
    Alert,
    Button,
    FlatList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginButton from "./src/components/LoginButton";
import React, {useState} from "react";
import SuggestionComponent from "./src/screens/SuggestionComponent";
import SuggestionForm from "./src/screens/SuggestionForm";
import ReportForm from "./src/screens/ReportForm";
import AlumniSection from "./src/screens/AlumniSection";
import {Searchbar} from 'react-native-paper';

import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import AdminHomeScreen from "./src/screens/HomeAdmin";
import Internships from "./src/screens/Internships";
import Feed from "./src/screens/Feed";
import EventList from "./src/components/EventSection";
import StartingScreen from "./src/screens/StartingScren";
import ImageSlider from "./src/components/ImageSlider";
import StudentSwipe from "./src/screens/StudentSwipe";
import StudentCard from "./src/components/StudentCard";
import TinderCard from "./src/screens/Tinder";
import SemesterGradesComponent from "./src/components/SemesterGradesComponent";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import PollsAndSurveys from "./src/screens/PollsAndSurveys";
import RestaurantInfo from "./src/screens/RestaurantInfo";
import Restaurants from "./src/features/screens/Restuarant";


console.log(StatusBar.currentHeight)
const Stack = createNativeStackNavigator();

export default function App() {

    const [enteredGoalText, setEnteredGoalText] = useState();
    const [courseGoals, setCourseGoals] = useState([]);


    const goalInputHandler = (value) => {
        console.log(value);
        setEnteredGoalText(value)
    }

    const addGoalHandler = (enteredGoal) => {


        // setCourseGoals([...courseGoals,enteredGoalText])
        setCourseGoals((currentCourseGoals) => {
            return [...currentCourseGoals, enteredGoalText]
        })

        setEnteredGoalText("")
        // Alert.alert(enteredGoalText)
    }


    const handleLongPress = () => {

        // Show the Alert.prompt after TextInput is unfocused
        //     Alert.alert("You entered:");

        Alert.prompt(
            'Enter your name',
            'Please enter your name:',
            (text) => {
                if (text) {
                    // This callback will be called with the user's input as 'text'.
                    // You can do whatever you want with the entered text here.
                    console.log('You entered:', text);
                } else {
                    console.log('No input provided.');
                }
            }
        );


    };


    return (


        <>
            {/*<SafeAreaProvider style={styles.mainContainer}>*/}

            {/*    /!*<LoginButton title={"Submit"}/>*!/*/}
            {/*    /!*<SuggestionComponent/>*!/*/}
            {/*    /!*<ReportForm/>*!/*/}
            {/*    /!*<AlumniSection/>*!/*/}
            {/*    /!*<SuggestionForm/>*!/*/}
            {/*</SafeAreaProvider>*/}
            {/*<ExpoStatusBar/>*/}
            {/*<Internships/>*/}
            <View style={styles.mainContainer}>
                {/*<Text>Hello</Text>*/}
                <Restaurants/>
                {/*<AlumniSection/>*/}
                {/*<ReportForm/>*/}
                {/*<EventList/>*/}
            </View>

        </>

    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight,

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
        // backgroundColor: "blue",
        // flexGrow: 9,
        width: "100%",
        padding: 16,
    },
    textStyle: {
        fontSize: 10,

    },
    flexContainer: {
        width: "80%",
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "s"
    },
    appContainer: {
        // borderStyle: "solid",
        // borderWidth: 1,
        // borderColor: "black",
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 50,
        paddingHorizontal: 16
        // alignItems:"center",
    },
    formContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "#cccccc",
        flex: 1,

    },
    textInput: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#cccccc",
        padding: 8,
        width: "70%",

    },
    goalsContainer: {
        flex: 5,
    },
    listItem: {
        color: "#cccccc",
        fontWeight: "bold",
        borderStyle: "solid",
        borderColor: "#cccccc",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        shadowColor: "red",
        marginVertical: 3,
        backgroundColor: "#5e0acc"
    },
    listText: {
        color: "#ffffff",
    }


});
