import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Menudetails from '../screen/Menudetails'
const MenuItem = ({item,navigation}) => {
  return (
    <TouchableOpacity
    onPress={() => {
      // console.log('press');
  navigation.navigate('Menudetails', {
        menuitem: item,
      });
    }}>
    <View style={styles.item}>
    <Image source={{uri: item.image}} style={styles.bgImage} />

    <Text style={styles.title}>{item.name}</Text>
  </View>
  </TouchableOpacity>
  )
}

export default MenuItem
const styles = StyleSheet.create({
    container: {flex: 1, padding: 20,backgroundColor:"#fff"},
  
    item: {
      width: '100%',
      height: 250,
      backgroundColor:"#f5f5f5",
      elevation:5,
      borderRadius:15,
      overflow:'hidden'
    },
    bgImage: {
      width: '100%',
      height: '70%',
    },
    title:{
      fontSize:20,
      marginTop:10,
      paddingLeft:10,
      color:"#000",
      fontWeight:"600",
    }
  });