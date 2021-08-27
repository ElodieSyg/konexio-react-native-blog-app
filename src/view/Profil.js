import React, { useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
// Component 
import Navbar from '../component/Navbar';
// Context
import { UserContext } from '../context/UserContext';

const MyComments = () => {
    const userInfo = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My profil</Text>
            <SafeAreaView style={styles.profilContainer}>
                <Text style={styles.profiltitle}>UserName : {userInfo.idValue.id}</Text>
                <Text style={styles.profiltitle}>Name : {userInfo.nameValue.name}</Text>
                <Text style={styles.profiltitle}>You wrote ... posts </Text>
            </SafeAreaView>
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
    profilContainer: {
        margin: 10,
        borderColor: 'grey',
        borderWidth: 1,
        width: '80%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    profiltitle: {
        margin: 10,
        fontSize: 14,
    }
})
export default MyComments;