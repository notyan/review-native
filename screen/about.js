import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { global } from '../styles/global'

export default function About() {
  return (
    <View style={global.container}>
      <Text>Abou</Text>
      <StatusBar style="auto" />
    </View>
  );
}
