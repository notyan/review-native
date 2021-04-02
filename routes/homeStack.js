import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screen/home'
import Review from '../screen/review'
import Header from '../shared/header'
import React from 'react'

const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation}  /> ,
            }
        },
    },
    Ripiu:{
        screen: Review,
    },
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#f7fad1',
        headerStyle: {
            backgroundColor: "#425e92",
        }
    },
});

export default HomeStack;