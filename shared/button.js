import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function CustButton({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: '#008891'
    },
    btnText:{
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:16,
        textAlign: 'center',
    }
})