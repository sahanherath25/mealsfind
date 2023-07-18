import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const VotingComponent = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleVoteSubmit = () => {
        // TODO: Implement your vote submission logic here
        console.log('Voted for:', selectedOption);
        // You can send the selected option to your backend or update the state accordingly
    };

    return (
        <View>
            <Text style={styles.question}>Vote for Student Council President:</Text>
            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === 'Candidate1' && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect('Candidate1')}
            >
                <Text style={styles.optionText}>Candidate 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === 'Candidate2' && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect('Candidate2')}
            >
                <Text style={styles.optionText}>Candidate 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === 'Candidate3' && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect('Candidate3')}
            >
                <Text style={styles.optionText}>Candidate 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleVoteSubmit}
                disabled={!selectedOption} // Disable the button if no option is selected
            >
                <Text style={styles.submitButtonText}>Vote</Text>
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

export default VotingComponent;
