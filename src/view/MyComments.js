import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
// Component 
import Navbar from '../component/Navbar';

const MyComments = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My comments</Text>
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
})
export default MyComments;