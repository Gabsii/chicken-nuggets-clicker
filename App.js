import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Font} from 'expo';
import LinearGradient from 'react-native-linear-gradient';

import ChickenButton from './components/ChickenButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80534E',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    counter: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        minHeight: 80,
        marginBottom: 50,
        marginTop: -20
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
            },
            fontLoaded: false
        };
    }

    async componentDidMount() {
        await Expo.Font.loadAsync({'vcr-osd-mono': require('./assets/fonts/VCR_OSD_MONO.ttf')});
        this.setState({fontLoaded: true});
    }

    click() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (<View style={styles.container}>
            {
                this.state.fontLoaded
                    ? (/*<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['transparent', 'rgba(255,255,255,.5)', 'transparent']}>*/
                        <View style={styles.counter}>
                            <Text style={{
                                    fontSize: 20,
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontFamily: 'vcr-osd-mono'
                                }}>
                                {this.state.counter}
                            </Text>
                            <Text style={{
                                    fontSize: 16,
                                    color: 'grey',
                                    textAlign: 'center',
                                    fontFamily: 'vcr-osd-mono'
                                }}>
                                {this.state.velocity + ' Nuggets/sec'}
                            </Text>
                        </View>
                    /*</LinearGradient>*/)
                    : null
            }
            <ChickenButton click={this.click.bind(this)}/>
        </View>);
    }
}
