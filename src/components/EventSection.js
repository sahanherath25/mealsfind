import React from 'react';
import {Alert, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import EventCard from './EventCard';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {MaterialIcons} from "@expo/vector-icons"; // Import the EventCard component you created

const events = [
    {
        id: 1,
        name: 'Event 1',
        image: require('../../assets/images/events/p2.jpg'),
        organizer: 'IT Faculty',
        description: 'This is the first event description.',
        date: '2023-08-01',
        contactPerson: 'John Doe',
    },
    {
        id: 2,
        name: 'Event 2',
        image: require('../../assets/images/events/party.jpg'),
        organizer: 'Education Faculty',
        description: 'event description',
        date: '2023-08-10',
        contactPerson: 'Jane Smith',
    },
    {
        id: 3,
        name: 'Event 3',
        image: require('../../assets/images/users/alex.jpg'),
        organizer: 'Science Faculty',
        description: 'This is the third event description.',
        date: '2023-08-15',
        contactPerson: 'Bob Johnson',
    },
    {
        id: 4,
        name: 'Event 4',
        image: require('../../assets/images/users/alex.jpg'),
        organizer: 'IT Faculty',
        description: 'This is the third event description.',
        date: '2023-08-15',
        contactPerson: 'Bob Johnson',
    },
    // Add more events here
];

const EventList = () => {

    const renderEventCard = ({item}) => {
        return <EventCard event={item}/>;
    };


    return (

        <View>

            <View style={styles.headingContainer}>
                {/*<FontAwesome5 name="star" size={24} color="#FFD700" style={styles.icon} />*/}
                <Text style={styles.heading}>Horizon Events</Text>
                <MaterialIcons name="event" size={40}  style={styles.icon}   color="black" />
            </View>

            <FlatList
                data={events}
                renderItem={renderEventCard}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContent}
            />
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },

    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    icon: {
        marginHorizontal: 10,
    },
    flatListContent: {
        paddingHorizontal: 16,
        paddingBottom: 80, // Adjust this value to give enough space for the last card's "Join" button
    },
});

export default EventList;
