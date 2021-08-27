import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useHistory } from 'react-router-native';

const Navbar = () => {
    const history = useHistory();

    const handleHome = () => {
        history.push('/home');
    };

    const handleComment = () => {
        history.push('/my-comments');
    };

    const handleProfil = () => {
        history.push('/profil');
    };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleHome}>
            <Image 
                source={require('../img/homeicone.png')} 
                style={styles.image}
                />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment}>
            <Image 
                source={require('../img/commenticone.png')} 
                style={styles.image}
                />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfil}>
            <Image 
                source={require('../img/profilicone.png')} 
                style={styles.image}
                />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        backgroundColor: '#841584',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'100%',
        height: '12%',
    },
    image: {
        width: 45,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Navbar;