import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { global, images } from '../styles/global'
import Card from '../shared/cards'

export default function Review({navigation}) {
  const rating = navigation.getParam('rating');
  const pressHandler = () =>{
    navigation.goBack();
  }
  return (
    <View style={global.container}>
      <Card>
        <Text style={styles.reviewText}>{navigation.getParam('title')}</Text>
        <Text style={styles.reviewText}>{navigation.getParam('body')}</Text>
        <View style={styles.rate}>
          <Text style={styles.reviewText}>Yeet Ratings :</Text>
          <Image source={images.ratings[rating]}/>
        </View>
        <Button title="Back" color="#00587a" onPress={pressHandler}/>
      </Card>
      
    </View>
  );
}

const styles = StyleSheet.create({
  rate:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: '#00587a',
  },
  reviewText:{
    color:"#e7e7de",
  }
})