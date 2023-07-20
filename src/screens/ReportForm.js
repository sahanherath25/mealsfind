import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const ReportForm = () => {
    const [reportType, setReportType] = useState('');
    const [reason, setReason] = useState('');
    const [isError, setIsError] = useState(false);
    const [submitAnimation] = useState(new Animated.Value(0));

    const handleSubmission = () => {
        if (reportType.trim() === '' || reason.trim() === '') {
            setIsError(true);
            return;
        }

        // Perform submission logic here
        // You can save the report data in your Firebase database
        console.log('Report submitted:', { reportType, reason });

        // Show submit animation (optional)
        Animated.timing(submitAnimation, { toValue: 1, duration: 500, useNativeDriver: false }).start();

        // Reset form after submission (optional)
        setReportType('');
        setReason('');
        setIsError(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Report Post</Text>

            <Text style={styles.label}>Report Type</Text>
            <TextInput
                style={[styles.input, isError && styles.inputError]}
                placeholder="E.g., Spam, Harassment, etc."
                value={reportType}
                onChangeText={(text) => {
                    setReportType(text);
                    setIsError(false);
                }}
            />

            <Text style={styles.label}>Reason</Text>
            <TextInput
                style={[styles.input, isError && styles.inputError]}
                placeholder="Why are you reporting this?"
                multiline
                numberOfLines={4}
                value={reason}
                onChangeText={(text) => {
                    setReason(text);
                    setIsError(false);
                }}
            />

            {isError && <Text style={styles.errorText}>Please fill in all fields</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmission}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <Animated.Text
                style={[
                    styles.successText,
                    {
                        opacity: submitAnimation,
                        transform: [
                            {
                                translateY: submitAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -20],
                                }),
                            },
                        ],
                    },
                ]}
            >
                Report submitted successfully!
            </Animated.Text>
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
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
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
    successText: {
        color: 'green',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default ReportForm;
