import React from 'react';
import {StyleSheet, TouchableHighlight, Image, View} from 'react-native';

export default class ChickenButton extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (<TouchableHighlight onPress={this.props.click}>
			<Image source={require('../img/test.jpg')} style={styles.image}/>
		</TouchableHighlight>);
	}
}

const styles = StyleSheet.create({
	image: {
		height: 250,
		width: 250
	}
});
