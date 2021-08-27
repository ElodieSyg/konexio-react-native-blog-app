import React, { useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Button,
    TouchableOpacity,
} from 'react-native';
import Navbar from '../component/Navbar';
import { useHistory } from 'react-router-native';
// Context
import { CommentContext } from '../context/CommentContext';

const Comment = () => {
    const comment = useContext(CommentContext);
    const history = useHistory();

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

    const handleBack = () => {
        history.push('/home');
    };

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={handleBack}>
                    <Button
                        title='Back'
                        style={styles.button}
                        />
                    <Text style={styles.title}>Comment</Text>
                </TouchableOpacity>               
            </View>
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
    button: {
        
    }
});

export default Comment;