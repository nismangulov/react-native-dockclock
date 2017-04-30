import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
} from "react-native";

import KeepAwake from "react-native-keep-awake";
import moment from "moment";
import Immersive from 'react-native-immersive';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timeText: {
		color: '#FF0000',
		fontSize: 220,
	}
})

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: moment().format("HH:mm")
		};
		Immersive.setImmersive(true);
	}
  
  componentDidMount() {
    setInterval(() => {
			this.setState({
				time: moment().format("HH:mm")
			});
		}, 1000);
  }
  
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.timeText}>
					{this.state.time}
				</Text>
				<KeepAwake />
			</View>
		)
	}
}