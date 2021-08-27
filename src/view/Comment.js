import React, { useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';
import Navbar from '../component/Navbar';
// Context
import { CommentContext } from '../context/CommentContext';

const Comment = () => {
    const comment = useContext(CommentContext);

/*     useEffect(() => {
        console.log('comment body', comment.body)
    }, [comment])

 */
    // Item entre accolades car on reçoit un objet 
    const renderComment = ({item}) => {
        return (
            <View style={styles.commentContainer}>
                <Text style={styles.body}>{item.postId}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comment</Text>
            <FlatList
                data={comment.comment}
                renderItem={renderComment}
                keyExtractor={(item) => item.id}
                styles={styles.commentContainer}
                />
            <Navbar />
         </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    commentContainer: {
        margin: 10,
        borderColor: 'grey',
        borderWidth: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    body: {
        fontSize: 14,
        margin: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
});

export default Comment;