import React from "react";
import {StyleSheet, Text, View} from "react-native";
import ChickenButton from "./components/ChickenButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#80534E",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    counter: {alignItems: "center", justifyContent: "center"},
    primaryCounter: {
        fontSize: 20,
        color: "#fff"
    },
    secondaryCounter: {
        fontSize: 16,
        color: "#0fffff"
    }
});

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            velocity: 0,
            powerUps: {
                double: null
            }
        };
    }

    click() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.counter}>
                    <Text style={styles.primaryCounter}>
                        {this.state.counter}
                    </Text>
                    <Text style={styles.secondaryCounter}>
                        {this.state.velocity + " Nuggets/sec"}
                    </Text>
                </View>
                <ChickenButton
                    style={styles.button}
                    click={this.click.bind(this)}
                />
            </View>
        );
    }
}
