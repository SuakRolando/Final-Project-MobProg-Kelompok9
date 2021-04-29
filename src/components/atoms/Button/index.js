import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}> 
            <View style={styles.box}>
            <Text style={styles.tul}>{title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    box:{
        height: 53,
        width: 242,
        backgroundColor: 'brown',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 2,
        marginTop: 83,
        borderRadius: 5,
    },
    tul:{
        fontSize: 20,
        color: 'white'
    }
})
