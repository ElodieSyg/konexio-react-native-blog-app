import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

const MyLink = ({ children, to }) => {
	const history = useHistory();

	const handlePress = () => {
        console.log('handlePress')
		history.push(to);
	};

	return (
		<TouchableOpacity onPress={handlePress} style={styles.btn}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btn: {
		padding: 10,
		backgroundColor: 'purple',
		borderRadius: 5,
	},
	text: {
		color: 'white',
		fontWeight: '500',
		textAlign: 'center',
	},
});

export default MyLink;