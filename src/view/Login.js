import React, { useContext, useEffect } from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    SafeAreaView,
    TextInput,
    Image,
} from 'react-native';
// Axios
import Axios from 'axios';
// Context
import { UserContext } from '../context/UserContext';
import { PostContext } from '../context/PostContext';
// Component
import MyLink from '../component/MyLink';
// import Navbar from '../component/Navbar';

const Login = () => {
const userInfo = useContext(UserContext);
const allPost = useContext(PostContext);

useEffect(() => {
    const postData = async () => {
        const res = await Axios.get('https://jsonplaceholder.typicode.com/posts');
        allPost.postValue.setPost(res.data)
    }
    postData()
}, []);

useEffect(() => {
    const commentData = async () => {
        const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${allPost.numberValue.number}/comments`)
        console.log(res)
        
    }
    commentData();
}, []);

return (
    <View style={styles.container}>
        <View style={styles.stuff}>
            <Image 
                source={require('../img/piment.png')} 
                style={styles.image} />
            <Text style={styles.title}>Welcome !</Text>
            <SafeAreaView>
            <Text>What's your name ?</Text>
                <TextInput 
                    value={userInfo.nameValue.name}
                    onChangeText={userInfo.nameValue.setName}
                    placeholder='type your name' />
            <Text>What's your username ?</Text>
                <TextInput 
                    value={userInfo.idValue.id}
                    onChangeText={userInfo.idValue.setId}
                    placeholder='type your username' />
                <TextInput />
            </SafeAreaView>
            <MyLink to='/home'>Login</MyLink>
        </View>
    </View>
);
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 70,
    },
    stuff: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default Login;