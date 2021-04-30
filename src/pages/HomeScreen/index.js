import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconBack, Logo } from '../../assets';
import { Button, TextInput } from '../../components';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <Logo style={styles.logo}/>
            <View style={styles.viewText}>
                <Text style={styles.text1}>BarBar </Text>
                <Text style={styles.text2}>Coffee</Text>
            </View>
            <TextInput placeholder="Table Number"/>
            <Button title="Menu"/>
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
    text1:{
        fontFamily: 'Sen-Regular',
        fontSize: 28,
        color: '#C08D78'
    },
    text2:{
        fontFamily: 'Sen-Regular',
        fontSize: 28,
        color: 'black'
    },
    viewText:{
        flexDirection:'row',
    },
    logo:{
        marginTop: 134,
    },
});
