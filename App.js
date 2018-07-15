import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChickenButton from './components/ChickenButton';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			counter: 0,
			velocity: 0,
			powerUps: {
				double: null
			}
		}
	}

	click() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	render() {
		return (<View style={styles.container}>
			<ChickenButton style={styles.button} click={this.click.bind(this)}/>
			<Text style={styles.primaryCounter}>{this.state.counter}</Text>
			<Text style={styles.secondaryCounter}>{this.state.velocity + " Nuggets/sec"}</Text>
		</View>);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	primaryCounter: {
		fontSize: 20
	},
	secondaryCounter: {
		fontSize: 16
	}
});
