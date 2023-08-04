import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import firebase from 'firebase'; // Make sure you have initialized Firebase in your project
import PostCard from './PostCard';


const dummyPosts = [
    {
        id: 1,
        title: 'Post 1',
        date: 'July 17, 2023',
        content: 'This is the content of post 1.',
    },
    {
        id: 2,
        title: 'Post 2',
        date: 'July 18, 2023',
        content: 'This is the content of post 2.',
    },
    {
        id: 3,
        title: 'Post 3',
        date: 'July 19, 2023',
        content: 'This is the content of post 3.',
    },
    // Add more dummy posts as needed
];

const PostFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Replace 'yourFirebaseRef' with the reference to your Firebase database
        const databaseRef = firebase.database().ref('posts');
        databaseRef.on('value', (snapshot) => {
            const postData = snapshot.val();
            if (postData) {
                const postArray = Object.values(postData);
                setPosts(postArray);
            }
        });
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {dummyPosts.map((post, index) => (
                <PostCard
                    key={index}
                    title={post.title}
                    date={post.date}
                    content={post.content}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default PostFeed;
