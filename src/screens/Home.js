import React from "react";
import {Button, Text, View} from "react-native";
import SemesterGradesComponent from "../components/SemesterGradesComponent";
const Home=({navigation})=>{
    return(
        <View>
            {/*<SemesterGradesComponent/>*/}
            <Button title={"Go To Tinder"}  options={{ title: 'Home' }} onPress={()=>navigation.navigate("Alumni")}/>
            <Button title={"Polls"}  options={{ title: 'Vote For ' }} onPress={()=>navigation.navigate("Polls")}/>
            {/*<Button title={"Home"}  options={{ title: 'Home' }} onPress={props.navigation.navigate("Home")}/>*/}

        </View>
    )
}
export default Home;