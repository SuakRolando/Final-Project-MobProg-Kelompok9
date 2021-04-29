import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Logo,Background, Background1} from '../../assets';

const SplashScreen = () => {
    return (
        <View style={styles.page}>
            <Logo/>
            <Text style={styles.text}>BarBar Coffee</Text>
        </View>
    )
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFEBCD',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text:{
        fontFamily: 'Sen-Regular',
        fontSize: 36,
    }
});
