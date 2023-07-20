import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SuggestionComponent = () => {
    const [suggestion, setSuggestion] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmission = () => {
        if (suggestion.trim() === '') {
            setIsError(true);
            return;
        }

        // Perform submission logic here
        // You can send the suggestion to your backend or perform any other action
        console.log('Suggestion submitted:', suggestion);

        // Reset form after submission
        setSuggestion('');
        setIsError(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Submit a Suggestion</Text>
            <TextInput
                style={[styles.input, isError && styles.inputError]}
                placeholder="Enter your suggestion"
                value={suggestion}
                onChangeText={(text) => {
                    setSuggestion(text);
                    setIsError(false);
                }}
            />
            {isError && <Text style={styles.errorText}>Please enter a suggestion</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmission}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#337ab7',
        borderRadius: 5,
        paddingVertical: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SuggestionComponent;
