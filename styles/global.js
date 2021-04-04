import { StyleSheet} from 'react-native';

export const  global = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
    },
    titleText:{
      fontFamily:'Train-One',
      fontSize: 20,
      color: '#e7e7de' //krem
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    input:{
      borderWidth: 1,
      borderColor: '#0f3057',
      padding: 8,
      fontSize: 18,
      borderRadius: 6,
    }
  });

export const images ={
  ratings:{
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}