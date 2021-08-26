import React, { useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';
// Context
import { CommentContext } from '../context/CommentContext';

const Comment = () => {
    const comment = useContext(CommentContext);

    useEffect(() => {
        console.log(comment)
    }, [comment])

    const renderComment = (item) => {
        return (
            <View style={styles.commentContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text>Comment</Text>
{/*             <FlatList
                data={comment.comment}
                renderItem={renderComment}
                keyExtractor={(item) => item.id}
                styles={styles.comment}
                />
 */}        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    postContainer: {
        margin: 10,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: 'black',
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
    comment: {
        height: '80%'
    },
});

export default Comment;