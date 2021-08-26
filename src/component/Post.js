import React, { useContext } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    FlatList, 
    Image,
    TouchableOpacity,
} from 'react-native';
import { useHistory } from 'react-router';
// Context
import { PostContext } from '../context/PostContext';

const Post = () => {
    const allPost = useContext(PostContext);
    const history = useHistory();

    const handleClickComment = () => {
        history.push('/comment')
    }

    const renderPost = ({item}) => {
        allPost.numberValue.setNumber(item.id);

        return (
            <View style={styles.postContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <TouchableOpacity onPress={handleClickComment}>
                    <Image 
                        source={require('../img/postcomment.png')}
                        style={styles.image} 
                        />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={allPost.postValue.post}
                renderItem={renderPost}
                keyExtractor={(post) => post.id}
                style={styles.post}
            />
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
    postContainer: {
        margin: 10,
        borderColor: 'grey',
        borderWidth: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    body: {
        fontSize: 14,
        margin: 10,
    },
    image: {
        width: 25,
        height: 25,
        margin: 10,
    },
    post: {
        height: '80%'
    }
});

export default Post;