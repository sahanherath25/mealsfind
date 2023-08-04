import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const PostCard = ({ title, date, content }) => {
    return (
        <Card style={styles.postCard}>
            <Card.Content>
                <Title>{title}</Title>
                <Text style={styles.postDate}>Posted on: {date}</Text>
                <Paragraph>{content}</Paragraph>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    postCard: {
        marginVertical: 10,
        elevation: 4,
        borderRadius: 8,
    },
    postDate: {
        fontSize: 12,
        color: 'gray',
    },
});

export default PostCard;
