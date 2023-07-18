import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InternshipCard = ({ internship }) => {
    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{internship.company}</Text>
                <Text style={styles.text}>Skills Needed: {internship.skills}</Text>
                <Text style={styles.text}>Location: {internship.location}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    detailsContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default InternshipCard;
