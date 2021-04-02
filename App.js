import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import  AppLoading  from 'expo-app-loading';
import {useFonts} from 'expo-font';
import { LogBox } from "react-native";

import { StyleSheet, Text, View } from 'react-native';

import Navigator from './routes/drawer'


export default function App() {
  //WARNING INGOR
  LogBox.ignoreLogs([
    "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
  ]);
  //END OF WARNING IGNORE

  let [fontsLoaded] = useFonts({
    'Train-One': require('./assets/fonts/TrainOne.ttf'),
  });
  // return !fontsLoaded ? (
  //     <AppLoading/>
  // ) : (
  //     <Navigate />
  // )
  if(!fontsLoaded){
    console.log("loading")
    return(
      <AppLoading />
    ) 
  }else{
    console.log("rendered")
    return(
      <Navigator />
    );
  }
}

