import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

const students = [
    {
        id: 1,
        name: 'John Doe',
        age: 22,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 2,
        name: 'Ricky',
        age: 22,
        imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
        id: 3,
        name: 'Sahan',
        age: 22,
        imageUrl: 'https://images.unsplash.com/photo-1510258791301-4d7ac469cc46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    },
    // Add more student profiles here
];

const Card = ({ student }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: student.imageUrl }} style={styles.image} />
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.age}>{student.age} years old</Text>
        </View>
    );
};

const NoMoreCards = () => {
    return (
        <View style={styles.noMoreCards}>
            <Text>No more students to view</Text>
        </View>
    );
};

const TinderCard = () => {
    const handleYup = () => {
        // Handle when user swipes right
        // You can implement matching logic or any other action here
    };

    const handleNope = () => {
        // Handle when user swipes left
        // You can implement any other action here
    };

    return (
        <SwipeCards
            cards={students}
            renderCard={(student) => <Card student={student} />}
            renderNoMoreCards={() => <NoMoreCards />}
            handleYup={handleYup}
            handleNope={handleNope}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        padding: 20,
        margin: 10,
        height: 400,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    age: {
        fontSize: 18,
        color: '#888',
    },
    noMoreCards: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default TinderCard;
