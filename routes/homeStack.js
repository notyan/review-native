import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native'
import Home from '../screen/home'
import Review from '../screen/review'
import Header from '../shared/header'
import React from 'react'

const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title="Yeet Zone" /> ,
            }
        },
    },
    Ripiu:{
        screen: Review,
        
        
    },
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:({ navigation }) => {
        return{
            headerTintColor:'#0f3057',  //change navigator text color both title and the back button
            headerTitleStyle: { color: '#0f3057' }, //change only the title color
            headerStyle: {
                backgroundColor: "#0f3057",//Dark Blue
                height:60 
            },
            headerBackground: () => <Image source = {require ('../assets/game_bg.png')} style = {{height: '100%'}} />
        }
    },
});

export default HomeStack;