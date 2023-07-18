import React from "react";
import {Text, View} from "react-native";


const LoginButton=({title, color})=>{
    return(
        <View>
            <Text>
                {title}
            </Text>
        </View>
    )
}

export default LoginButton;