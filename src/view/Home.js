import React, { useContext } from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput,
    Button,
    Text,
    TouchableOpacity
} from 'react-native';
// Context
import { UserContext } from '../context/UserContext'; 
// Component
import Navbar from '../component/Navbar';
import Post from '../component/Post';

const Home = () => {
    const userInfo = useContext(UserContext);
    // Post onPress => add un nouveau post pour l'utilisateur

  return (
    <View style={styles.container}>
        <View style={styles.newPost}>
            <TextInput
                placeholder="  What's happening?"
                style={styles.input}
                numberOfLines={5}
                multiline={true}
                />
            <TouchableOpacity style={styles.button}>
            <Button 
                title='post'
                color='white'
                style={styles.margin}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.usr}>
            <Text style={styles.textUsr}>Hello {userInfo.idValue.id} !</Text>
        </View>
        <Post />
        <Navbar />
    </View>
  );
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 50,
        flex: 1,
        alignItems: 'center',
    },
    newPost: {
        width: '100%',
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
    },
    input: {
        width: '100%',
        margin: 10,
    },
    titleMargin: {
        margin: 10,
    },
    usr: {
        margin: 10,
    },
    textUsr: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'purple',
        borderRadius: 5,
        width: 70,
        height: 40,
    },
});

export default Home;