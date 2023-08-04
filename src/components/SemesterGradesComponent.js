import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from "../constants/colors";

const gradeOptions = ['A', 'B', 'C', 'C -', 'C +', 'F'];

const SemesterGradesComponent = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('');
    const [gradesList, setGradesList] = useState([]);

    const years = ['1', '2', '3',"4"]; // Replace with your year list
    const semesters = ['Semester 1', 'Semester 2']; // Replace with your semester list
    const subjects = ['IT and Computing Fundamentals', 'Discrete Mathematics', 'Psychology ', 'Leadership and Communication Skils']; // Replace with your subject list

    const handleAddGrade = () => {
        if (selectedYear && selectedSemester && selectedSubject && selectedGrade) {
            const newGrade = {
                year: selectedYear,
                semester: selectedSemester,
                subject: selectedSubject,
                grade: selectedGrade,
            };
            setGradesList([...gradesList, newGrade]);
            setSelectedYear('');
            setSelectedSemester('');
            setSelectedSubject('');
            setSelectedGrade('');
        }
    };

    const handleViewResults = () => {
        // Filter results based on selected year and semester
        const filteredResults = gradesList.filter(
            (item) => item.year === selectedYear && item.semester === selectedSemester
        );
        console.log(filteredResults); // Display filtered results in the console or use them as needed
    };

    const filteredGradesList = gradesList.filter(
        (item) => item.year === selectedYear && item.semester === selectedSemester
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Semester Grades</Text>

            {/* Year Dropdown */}
            <Picker
                style={styles.picker}
                selectedValue={selectedYear}
                onValueChange={(itemValue) => setSelectedYear(itemValue)}
            >
                <Picker.Item label="Select Year" value="" />
                {years.map((year) => (
                    <Picker.Item key={year} label={year} value={year} />
                ))}
            </Picker>

            {/* Semester Dropdown */}
            <Picker
                style={styles.picker}
                selectedValue={selectedSemester}
                onValueChange={(itemValue) => setSelectedSemester(itemValue)}
            >
                <Picker.Item label="Select Semester" value="" />
                {semesters.map((semester) => (
                    <Picker.Item key={semester} label={semester} value={semester} />
                ))}
            </Picker>

            {/* Subject Dropdown */}
            <Picker
                style={styles.picker}
                selectedValue={selectedSubject}
                onValueChange={(itemValue) => setSelectedSubject(itemValue)}
            >
                <Picker.Item label="Select Subject" value="" />
                {subjects.map((subject) => (
                    <Picker.Item key={subject} label={subject} value={subject} />
                ))}
            </Picker>

            {/* Grade Dropdown */}
            <Picker
                style={styles.picker}
                selectedValue={selectedGrade}
                onValueChange={(itemValue) => setSelectedGrade(itemValue)}
            >
                <Picker.Item label="Select Grade" value="" />
                {gradeOptions.map((grade) => (
                    <Picker.Item key={grade} label={grade} value={grade} />
                ))}
            </Picker>

            {/* Add Grade Button */}
            <TouchableOpacity style={styles.addButton} onPress={handleAddGrade}>
                <Text style={styles.addButtonText}>Add Grade</Text>
            </TouchableOpacity>

            {/* Display Added Grades */}
            {filteredGradesList.map((item, index) => (
                <View key={index} style={styles.gradeItem}>
                    <Text style={styles.gradeSubject}>{item.subject}</Text>
                    <Text style={styles.gradeValue}>{item.grade}</Text>
                </View>
            ))}

            <TouchableOpacity style={styles.viewResultsButton} onPress={handleViewResults}>
                <Text style={styles.viewResultsButtonText}>View My Results</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    picker: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    gradeItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    gradeSubject: {
        fontSize: 16,
    },
    gradeValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewResultsButton: {
        backgroundColor: colors.closeWhite,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    viewResultsButtonText: {
        color: colors.resetButton,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SemesterGradesComponent;
