import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {Picker} from "@react-native-picker/picker";

const alumniData = [
    {
        id: '1',
        name: 'John Doe',
        campus: 'Horizon Campus',
        email: 'john.doe@example.com',
        faculty: 'IT',
        image: require('../../assets/splash.png'), // Replace with image URL from Firebase
    },
    {
        id: '2',
        name: 'Jane Smith',
        campus: 'Horizon Campus',
        email: 'jane.smith@example.com',
        faculty: 'Education',
        image: require('../../assets/splash.png'), // Replace with image URL from Firebase
    },
    {
        id: '3',
        name: 'Jane Smith',
        campus: 'Horizon Campus',
        email: 'jane.smith@example.com',
        faculty: 'Education',
        image: require('../../assets/splash.png'), // Replace with image URL from Firebase
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
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search alumni by name..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <View style={styles.facultyDropdown}>
                    <Text style={styles.facultyText}>Filter by Faculty:</Text>
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
        width: 150,
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
        color: '#337ab7',
    },
    messageButton: {
        backgroundColor: '#337ab7',
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
