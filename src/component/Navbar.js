import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const Navbar = () => {

  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                source={require('../img/homeicone.png')} 
                style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image 
                source={require('../img/commenticone.png')} 
                style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image 
                source={require('../img/profilicone.png')} 
                style={styles.image} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#841584',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'100%',
        height: '20%',
    },
    image: {
        width: 60,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Navbar;