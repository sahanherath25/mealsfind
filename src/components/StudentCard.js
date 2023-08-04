// StudentCard.js

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const StudentCard = ({ student }) => {

    console.log(student)

    return (
        <View style={styles.card}>
            <Image source={{ uri: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80"}} style={styles.image} />
            <Text style={styles.name}>Jane Smith</Text>
            <Text style={styles.age}>22 years old</Text>
            <Text style={styles.college}>XYZ University</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: '80%',
        height: '70%',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    age: {
        fontSize: 16,
        color: '#666',
    },
    college: {
        fontSize: 18,
        color: '#333',
    },
});

export default StudentCard;
