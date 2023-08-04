import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CommentButton from "../components/CommentButton";
import LikeButton from "../components/LikeButton";
import ReportButton from "../components/ReportButton";
import ProfileImage from "../components/ProfileImage";

const PostCard = ({ post }) => {
    return (
        <View style={styles.postContainer}>
            <View style={styles.postHeader}>
                <ProfileImage size={50} uri={post.profilePicture} showEditButton={false} />
                <View style={styles.authorContainer}>
                    <Text style={styles.authorName}>{post.author}</Text>
                    <Text style={styles.postedTime}>{post.posted}</Text>
                </View>
            </View>
            <Image source={{ uri: post.url }} style={styles.image} />
            <View style={styles.postContent}>
                <Text style={styles.caption}>{post.caption}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    postContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "gray",
    },
    authorContainer: {
        marginLeft: 10,
        flex: 1,
    },
    authorName: {
        fontFamily: "regular",
        padding: 10,
        borderRadius: 5,
    },
    postedTime: {
        fontFamily: "regular",
        color: "#888",
    },
    image: {
        width: "100%",
        height: 275,
        backgroundColor: "#e78",
        resizeMode: "cover",
    },
    postContent: {
        padding: 5,
    },
    caption: {
        fontFamily: "regular",
        fontSize: 16,
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 5,
    },

});

export default PostCard;
