import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PollsAndSurveys = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <View>
            <Text style={styles.question}>What is your favorite subject?</Text>
            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === 'Mathematics' && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect('Mathematics')}
            >
                <Text style={styles.optionText}>Mathematics</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === 'Science' && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect('Science')}
            >
                <Text style={styles.optionText}>Science</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === 'English' && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect('English')}
            >
                <Text style={styles.optionText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === 'History' && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect('History')}
            >
                <Text style={styles.optionText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                    // Handle submit logic here
                    console.log('Submitted option:', selectedOption);
                }}
            >
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    option: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    selectedOption: {
        backgroundColor: 'lightblue',
    },
    optionText: {
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

export default PollsAndSurveys;
