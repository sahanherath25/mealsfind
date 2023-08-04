import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CommentButton from "./CommentButton";

const PostCard = ({ post }) => {
    const [caption, setCaption] = useState(post.caption);
    const [isEditing, setIsEditing] = useState(false);

    console.log("Post Object ",post)

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Save the edited caption here (you can implement the logic to update the caption in your data source)
        setIsEditing(false);
    };

    const handleCaptionChange = (text) => {
        setCaption(text);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: post.url }} style={styles.postImage} />
            <View style={styles.postInfo}>
                {isEditing ? (
                    <TextInput
                        value={caption}
                        onChangeText={handleCaptionChange}
                        style={styles.captionInput}
                        multiline
                    />
                ) : (
                    <Text style={styles.postCaption}>{post.caption}</Text>
                )}

                <Text style={styles.uploadedDate}>Uploaded on {post.posted}</Text>
                <View style={styles.buttonsContainer}>
                    {isEditing ? (
                        <TouchableOpacity style={styles.saveButton} onPress={handleSaveClick}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.editButton} onPress={handleEditClick}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity style={styles.deleteButton}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                    <CommentButton
                        onPress={() => this.props.navigation.navigate("CommentsSection", {photoId: post.authorId})}
                        content={"View Comments"}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 12,
    },
    postInfo: {
        marginBottom: 8,
    },
    postCaption: {
        fontSize: 16,
        marginBottom: 8,
        fontFamily:""
    },
    captionInput: {
        fontSize: 16,
        marginBottom: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
    },
    uploadedDate: {
        fontSize: 12,
        color: '#777',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    saveButton: {
        backgroundColor: '#28A745',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    deleteButton: {
        backgroundColor: '#DC3545',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    viewCommentsButton: {
        backgroundColor: '#FFC107',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default PostCard;
