import React from "react";
import {StyleSheet, View, Image} from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';

const RestaurantInfo = ({restaurant = {}}) => {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const {
        name = "Spenzer Dog",
        icon = "",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg"],
        address = ["Tasty Bites Restaurant,456 Main Avenue,Cityville, State, ZIP Code"],
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant


    return (

        <Card style={styles.cardContainer}>
            <Card.Cover source={{ uri: photos[0] }} />
            <Card.Content style={styles.cardContent}>
                <Text style={styles.cardTitle} variant="titleLarge">{name}</Text>
                {/*<Text variant="bodyMedium">Card content</Text>*/}
                {/*<Text variant="bodyMedium">Is Open : {isOpenNow}</Text>*/}
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        padding:10,
    },
    imageContainer: {
        // flex:1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',

    },
    cardContent: {
        padding:10
    },
    cardTitle: {
        color:'red',
        marginTop:10,
    }

})

export default RestaurantInfo