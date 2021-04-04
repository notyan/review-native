import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import { global } from '../styles/global'
import Card from '../shared/cards'
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({navigation}) { //Passibng props.navigation can use the (props) but this is a destructuring
  const[modal, setModal] = useState(false);
  const [review,setReviews] = useState([
    {title: 'Zeet, The Zeeter', rating : 5, body: 'zezezezeze', key:1},
    {title: 'Beet, The Burglar', rating : 4, body: 'bebebebebe', key:2},
    {title: 'Yeet, The Catpult', rating : 3, body: 'yeyeyeyey', key:3},
    {title: 'Geet, The Guilotine', rating : 4, body: 'heheheheh', key:4},
  ])
  

  return (
    <View style={global.container}>
      <Modal visible={modal} animationType='slide'>
        <View style={styles.modal}>
          {/*<MaterialIcons style={{...styles.modalToggle, ...styles.modalClose}} name="close" size={24} onPress={()=>setModal(false)}/>*/}
          <MaterialIcons style={[styles.modalToggle, styles.modalClose]} name="close" size={24} onPress={()=>setModal(false)}/>
          <Text> MODALITY </Text>
        </View>
      </Modal>

      <MaterialIcons style={styles.modalToggle} name="add" size={24} onPress={()=>setModal(true)}/>

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

const styles = StyleSheet.create({
  modal:{
    flex:1,
  },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor: "#008891",
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  modalClose:{
    marginTop:20,
    marginBottom: 0,
  }
})