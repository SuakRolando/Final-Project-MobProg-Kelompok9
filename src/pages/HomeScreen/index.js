import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Logo } from '../../assets';
import { Button } from '../../components';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <Logo style={styles.logo}/>
            <Text style={styles.text}>BarBar Coffe</Text>
            <Button title="Table Number"/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFEBCD',
        alignItems: 'center',
        flex: 1,
    },
    text:{
        fontFamily: 'Sen-Regular',
        fontSize: 36,
    },
    logo:{
        marginTop: 134,
    }
});
