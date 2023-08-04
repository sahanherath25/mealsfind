import React from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-web-swiper';
import StudentCard from "../components/StudentCard";

const studentsData = [
    {
        name: 'John Doe',
        age: 22,
        college: 'XYZ University',
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
    },
    {
        name: 'Jane Smith',
        age: 20,
        college: 'ABC College',
        image: 'https://plus.unsplash.com/premium_photo-1663079426406-1b82fed16a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1215&q=80',
    },
    // Add more student data objects as needed
];

const StudentSwipe = () => {
    return (
        <View style={styles.container}>
            <Swiper
                loop={true}
                autoplay={false}
                style={styles.swiper}
                showsPagination={false}
            >

                        <StudentCard student={studentsData[0]} />

                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    swiper: {
        height: '80%',
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default StudentSwipe;
