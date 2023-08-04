import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Dummy data (same as before, but with image URLs)
const dummyData = [
    {
        id: '1',
        title: 'Post 1',
        content: 'This is the content of Post 1',
        author: 'Admin',
        image: 'https://example.com/post1.jpg',
        timestamp: new Date().getTime(),
    },
    {
        id: '2',
        title: 'Post 2',
        content: 'This is the content of Post 2',
        author: 'Admin',
        image: 'https://example.com/post2.jpg',
        timestamp: new Date().getTime(),
    },
    // Add more dummy posts if needed
];

const PostCard = ({ post, onDelete }) => (
    <View style={styles.postCardContainer}>
        <Image source={{ uri: "../../assets/images/users/alex.jpg" }} style={styles.postImage} />
        <View >
            <Text style={styles.postTitle}>TITLE</Text>
            <Text style={styles.postContent}>Content</Text>
            <Text style={styles.postAuthor}>Author</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(post.id)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    </View>
);

const AdminHomeScreen = () => {
    const [posts, setPosts] = useState(dummyData);

    const handleDelete = (postId) => {
        // Implement the function to delete the post from Firebase
        // In this example, we'll only update the local state to remove the post
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    };

    const renderPostItem = ({ item }) => <PostCard post={item} onDelete={handleDelete} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderPostItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    postCardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    postContent: {
        fontSize: 16,
    },
    postAuthor: {
        fontSize: 14,
        color: 'gray',
        marginTop: 8,
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default AdminHomeScreen;
