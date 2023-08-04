import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import {Searchbar} from "react-native-paper";

const alumniData = [
    {
        id: '1',
        name: 'John Doe',
        campus: 'Horizon Campus',
        email: 'john.doe@example.com',
        faculty: 'IT',
        image: require('../../assets/images/users/alex.jpg'), // Replace with image URL from Firebase
    },
    {
        id: '2',
        name: 'Jane Smith',
        campus: 'Horizon Campus',
        email: 'jane.smith@example.com',
        faculty: 'Science',
        image: require('../../assets/images/users/alex.jpg'), // Replace with image URL from Firebase
    },
    {
        id: '3',
        name: 'Rickey',
        campus: 'Horizon Campus',
        email: 'jane.smith@example.com',
        faculty: 'IT',
        image: require('../../assets/images/users/alex.jpg'), // Replace with image URL from Firebase
    },
    {
        id: '4',
        name: 'Jane Smith',
        campus: 'Horizon Campus',
        email: 'jane.smith@example.com',
        faculty: 'Science',
        image: require('../../assets/images/users/alex.jpg'), // Replace with image URL from Firebase
    },
    {
        id: '5',
        name: 'John',
        campus: 'Horizon Campus',
        email: 'jane.smith@example.com',
        faculty: 'IT',
        image: require('../../assets/images/users/alex.jpg'), // Replace with image URL from Firebase
    },
    {
        id: '6',
        name: 'Shane',
        campus: 'Horizon Campus',
        email: 'jane.smith@example.com',
        faculty: 'IT',
        image: require('../../assets/images/users/alex.jpg'), // Replace with image URL from Firebase
    },
    // Add more dummy data as needed
];

const AlumniComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('All');

    const filteredData = alumniData.filter((alumni) => {
        const nameMatch = alumni.name.toLowerCase().includes(searchText.toLowerCase());
        const facultyMatch = selectedFaculty === 'All' || alumni.faculty === selectedFaculty;
        return nameMatch && facultyMatch;
    });

    const renderItem = ({ item }) => (
        <View style={styles.alumniCard}>
            <Image source={item.image} style={styles.alumniImage} />
            <Text style={styles.alumniName}>{item.name}</Text>
            <Text style={styles.alumniCampus}>{item.campus}</Text>
            <Text style={styles.alumniEmail}>{item.email}</Text>
            <TouchableOpacity style={styles.messageButton} onPress={() => sendMessage(item.name)}>
                <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
        </View>
    );

    const sendMessage = (recipient) => {
        // Implement your logic to send a message to the alumni
        console.log('Sending message to:', recipient);
    };

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search Name"
                onChangeText={setSearchText}
                value={searchText}
            />

            <View style={styles.searchContainer}>

                <View style={styles.facultyDropdown}>
                    <Text style={styles.facultyText}>Faculty :</Text>
                    <Picker
                        selectedValue={selectedFaculty}
                        style={styles.facultyPicker}
                        onValueChange={(itemValue) => setSelectedFaculty(itemValue)}
                    >
                        <Picker.Item label="All" value="All" />
                        <Picker.Item label="IT" value="IT" />
                        <Picker.Item label="Education" value="Education" />
                        <Picker.Item label="Management" value="Management" />
                        <Picker.Item label="Science" value="Science" />

                    </Picker>
                </View>
            </View>

            <Text>Selected Faculty : {selectedFaculty}</Text>
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop:15,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        width: '80%',
    },
    facultyDropdown: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    facultyText: {
        fontSize: 16,
        marginRight: 5,
    },
    facultyPicker: {
        width: 290,
        height: 40,
    },
    listContainer: {
        paddingBottom: 20,
    },
    alumniCard: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 3,
    },
    alumniImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    alumniName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    alumniCampus: {
        fontSize: 16,
        color: '#666',
    },
    alumniEmail: {
        fontSize: 14,
        color: '#071952',
        fontWeight:"bold"
    },
    messageButton: {
        backgroundColor: '#071952',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AlumniComponent;
