import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native'
import About from '../screen/about'
import Header from '../shared/header'
import React from 'react'


const screens = {
    About:{
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title="About"/> ,
                
            }
        },
    }
}

const AboutStack = createStackNavigator(screens, {
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

export default AboutStack;