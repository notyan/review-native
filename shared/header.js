import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation, title}){
    const opMenu = () => {
        navigation.openDrawer()
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={opMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
                
                <Image source={require('../assets/heart_logo.png')} style={styles.logo}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
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
        color: "#0f3057",
        fontSize:20,
        letterSpacing:1,
    },
    headerTitle:{
        flexDirection: "row",
    },
    icon:{ //Hamburger
        position: 'absolute',
        left:0,
        color: "#0f3057",
    },
    logo: {
        marginHorizontal: 8,
        marginVertical: 4,
        width: 24,
        height: 24,
    }
        
})