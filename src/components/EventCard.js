import React,{ useState }  from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Animated, Alert} from 'react-native';

const EventCard = ({ event }) => {

    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    const [disabledButtonIds, setDisabledButtonIds] = useState([]);

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleJoinButtonPress = () => {
        if (!isButtonDisabled) {
            setIsButtonDisabled(true);
            Alert.alert(
                'Thank You',
                'Thank you for your interest! We will contact you soon.',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                {
                    cancelable: false,
                    onDismiss: () => setIsButtonDisabled(false),
                }
            );
        }
    };

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={[styles.cardContainer, { opacity: fadeAnim }]}>
            <Image source={event.image} style={styles.image} />
            <Text style={styles.eventName}>{event.name}</Text>
            <Text style={styles.organizer}>Organized by: {event.organizer}</Text>
            <Text style={styles.description}>{event.description}</Text>
            <Text style={styles.date}>Date: {event.date}</Text>
            <Text style={styles.contact}>Contact Person: {event.contactPerson}</Text>
            <TouchableOpacity
                style={[styles.joinButton, isButtonDisabled && styles.disabledButton]}
                onPress={handleJoinButtonPress}
                disabled={isButtonDisabled}
            >
                <Text style={styles.joinButtonText}>
                    {isButtonDisabled ? 'Joining...' : 'Join'}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create(
    {
        cardContainer: {
            backgroundColor: '#FFFFFF',
            padding: 16,
            marginVertical: 8,
            borderRadius: 8,
            shadowColor: '#000000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 2 },
            elevation: 2,
        },
        image: {
            width: '100%',
            height: 200,
            borderRadius: 8,
            marginBottom: 8,
        },
        eventName: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 4,
        },
        organizer: {
            fontSize: 16,
            marginBottom: 4,
        },
        description: {
            fontSize: 16,
            marginBottom: 4,
        },
        date: {
            fontSize: 16,
            marginBottom: 4,
        },
        contact: {
            fontSize: 16,
            marginBottom: 8,
        },
        joinButton: {
            backgroundColor: '#007BFF',
            padding: 10,
            borderRadius: 4,
            alignItems: 'center',
        },
        joinButtonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
        },
        disabledButton: {
            backgroundColor: '#CCCCCC',
        },


});

export default EventCard;
