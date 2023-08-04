import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, Animated } from 'react-native';

const LOGO_URL = 'YOUR_LOGO_URL_HERE'; // Replace this with the URL to your app logo

const StartingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const fadeIn = new Animated.Value(0);

    useEffect(() => {
        // Simulating a loading delay with setTimeout
        setTimeout(() => {
            setIsLoading(false);
            // Fade in the logo after loading is complete
            Animated.timing(fadeIn, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }, 3000); // Adjust the delay time as needed
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : (
                <Animated.View style={[styles.logoContainer, { opacity: fadeIn }]}>
                    <Image source={{ uri: LOGO_URL }} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.appName}>Social Media App</Text>
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default StartingScreen;
