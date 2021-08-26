import React, { useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
// Context
import { PostContext } from '../context/PostContext';

const Comment = () => {
    const allPost = useContext(PostContext);

    return (
        <View style={styles.container}>
            <Text>Comment</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Comment;