import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";

import LocalImage from "./LocalImage";

const abstd = 10;
export default class ChickenButton extends React.Component {
    render() {
        return (
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={this.props.click.bind(this)}>
                    <LocalImage
                        style={{margin: "0, " + abstd}}
                        source={require("../assets/img/nugget.png")}
                        originalWidth={2761 - 2 * abstd}
                        originalHeight={2000}
                        gap={50}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
