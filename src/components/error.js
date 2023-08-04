import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import CommentButton from "./CommentButton";
import CustomButton from "../screens/CustomButton";
import DeleteButton from "./DeleteButton";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import {getFirebaseApp} from "../utils/firebaseHelper";
import {child, getDatabase, ref, remove} from "firebase/database";

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

    // const handleDelete = (postId) => {
    //
    //     Alert.alert("CURRENT POST ID IS ",postId)
    //     const app = getFirebaseApp();
    //     const dbRef = ref(getDatabase(app));
    //
    //     // Remove the photo from the "photos" ref
    //     const photosRef = child(dbRef, 'photos');
    //
    //     console.log("PHOTOS REF ",photosRef)
    //     remove(child(photosRef, postId))
    //         .then(() => {
    //             console.log(`Photo with postID ${postId} is successfully deleted from 'photos' ref.`);
    //         })
    //         .catch((error) => {
    //             console.error('Error deleting photo from "photos" ref:', error);
    //         });
    //
    //
    //     // Remove the photo from the "users" ref
    //     const usersRef = child(dbRef, 'users');
    //
    //     console.log("User REF ",usersRef)
    //     remove(child(usersRef, 'YOUR_USER_ID/photos/' + postId)) // Replace 'YOUR_USER_ID' with the actual user ID
    //         .then(() => {
    //             console.log(`Photo with postID ${postId} is successfully deleted from 'users' ref.`);
    //         })
    //         .catch((error) => {
    //             console.error('Error deleting photo from "users" ref:', error);
    //         });
    //
    // };

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

                <Text style={styles.uploadedDate}>Uploaded  {post.posted}</Text>
                <View style={styles.buttonsContainer}>
                    {isEditing ? (
                        <TouchableOpacity style={styles.saveButton} onPress={handleSaveClick}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.editButton} onPress={handleEditClick}>
                            <Text style={styles.buttonText}>Edit Caption</Text>
                        </TouchableOpacity>
                    )}

                    <DeleteButton />

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
        borderColor:colors.blackBorder,
        borderWidth:1,
        borderStyle:"solid"

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
        fontFamily:fonts.textFont,
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
        color: colors.blackBorder,
        fontFamily:fonts.medium,
    },
    buttonsContainer: {
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: colors.editButtonColor,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    saveButton: {
        backgroundColor: colors.saveButtonColor,
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
