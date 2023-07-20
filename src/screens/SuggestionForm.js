import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';

const SuggestionForm = () => {
    const [suggestion, setSuggestion] = useState('');
    const [errorAnimation] = useState(new Animated.Value(0));

    const handleSubmission = () => {
        if (suggestion.trim() === '') {
            // Trigger error animation
            Animated.sequence([
                Animated.timing(errorAnimation, { toValue: 10, duration: 100, useNativeDriver: false }),
                Animated.timing(errorAnimation, { toValue: -10, duration: 100, useNativeDriver: false }),
                Animated.timing(errorAnimation, { toValue: 10, duration: 100, useNativeDriver: false }),
                Animated.timing(errorAnimation, { toValue: 0, duration: 100, useNativeDriver: false })
            ]).start();
            return;
        }

        // Perform submission logic here
        // You can send the suggestion to your backend or perform any other action
        console.log('Suggestion submitted:', suggestion);

        // Reset form after submission
        setSuggestion('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Submit a Suggestion</Text>
            <TextInput
                style={[styles.input, { borderColor: errorAnimation.interpolate({
                        inputRange: [-10, 10],
                        outputRange: ['red', 'transparent']
                    }) }]}
                placeholder="Enter your suggestion"
                value={suggestion}
                onChangeText={text => setSuggestion(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmission}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Animated.Text style={[styles.errorText, { transform: [{ translateX: errorAnimation }] }]}>
                Please enter a suggestion
            </Animated.Text>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#337ab7',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
};

export default SuggestionForm;
