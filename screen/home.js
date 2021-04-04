import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import {Text, View, FlatList, TouchableOpacity } from 'react-native';
import { global } from '../styles/global'
import Card from '../shared/cards'

export default function Home({navigation}) { //Passibng props.navigation can use the (props) but this is a destructuring

  const [review,setReviews] = useState([
    {title: 'Zeet, The Zeeter', rating : 5, body: 'zezezezeze', key:1},
    {title: 'Beet, The Burglar', rating : 4, body: 'bebebebebe', key:2},
    {title: 'Yeet, The Catpult', rating : 3, body: 'yeyeyeyey', key:3},
    {title: 'Geet, The Guilotine', rating : 4, body: 'heheheheh', key:4},
  ])
  

  return (
    <View style={global.container}>
      <StatusBar style="auto" />
      <FlatList data={review} renderItem={({item}) =>(
        <TouchableOpacity onPress={() => navigation.navigate('Ripiu', item)}>
          <Card>
            <Text style={global.titleText}> {item.title} </Text>
          </Card>
        </TouchableOpacity>
      )}/>
    </View>
  );
}
