import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation, title}){

    const opMenu = () => {
        navigation.openDrawer()
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={opMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            
        </View>
    )
        
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    headerText:{
        fontWeight: 'bold',
        color: "#f7fad1",
        fontSize:20,
        letterSpacing:1,
    },
    icon:{
        position: 'absolute',
        left:0,
        color: "#f7fad1",
    }
        
})