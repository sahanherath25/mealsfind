import React from "react";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import {StyleSheet} from "react-native";

const RestaurantInfo = () => {

    return (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle"  />
            <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
    )
}

const styles = StyleSheet.create(
    {

    }
)
export default RestaurantInfo