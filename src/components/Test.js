import React, { useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import CommentButton from "../components/CommentButton";
import LikeButton from "../components/LikeButton";
import ReportButton from "../components/ReportButton";
import ProfileImage from "../components/ProfileImage";

const PostCard = ({ post, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedCaption, setEditedCaption] = useState(post.caption);

    const handleEditCaption = () => {
        setIsEditing(true);
    };

    const handleSaveCaption = () => {
        // Save the edited caption here (e.g., update the post in the database)
        setIsEditing(false);
    };

    return (
        <View style={styles.postContainer}>
            <View style={styles.postHeader}>
                <ProfileImage size={300} uri={post.profilePicture} showEditButton={false} />
                <View style={styles.authorContainer}>
                    <Text style={styles.authorName}>{post.author}</Text>
                    <Text style={styles.postedTime}>{post.posted}</Text>
                </View>
            </View>
            <Image source={{ uri: post.url }} style={styles.image} />
            <View style={styles.postContent}>
                {isEditing ? (
                    <TextInput
                        style={styles.editCaption}
                        value={editedCaption}
                        onChangeText={setEditedCaption}
                    />
                ) : (
                    <Text style={styles.caption}>{post.caption}</Text>
                )}
                {isEditing ? (
                    <TouchableOpacity style={styles.saveButton} onPress={handleSaveCaption}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.editButton} onPress={handleEditCaption}>
                        <Text style={styles.editButtonText}>Edit Caption</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.buttonContainer}>
                <CommentButton />
                <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(post.id)}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // ... (your existing styles)

    editCaption: {
        fontFamily: "regular",
        fontSize: 16,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 8,
    },
    editButton: {
        backgroundColor: "#4682B4",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginTop: 8,
    },
    editButtonText: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "regular",
    },
    saveButton: {
        backgroundColor: "#32CD32",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginTop: 8,
    },
    saveButtonText: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "regular",
    },
    deleteButton: {
        backgroundColor: "#FF6347",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "regular",
    },
});

export default PostCard;
