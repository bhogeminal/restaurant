import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../color/colors';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
const Menudetails = ({route, navigation}) => {
  const ref =useRef();
const share=async()=>{
try {
  const uri = await captureRef(ref,{format:'png'
})
console.log("uri",uri);
await Share.open({url:uri})
.then(res => console.log(res))
.catch(err => console.log(err))
} catch(e){
  console.log(e)
}}
  const {menuitem} = route.params;
  console.log('menuitem', menuitem);
  return (
    <ScrollView contentContainerStyle={styles.container} ref={ref}>
      <Image style={styles.bgImage} source={{uri: menuitem.image}}></Image>

      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={styles.head}>{menuitem.name}</Text>
      <Text style={styles.head}>Price : ₹{menuitem.price}</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <View style={{flexDirection:"row"}}>
      <Icon name='star'color={colors.yellow} size={20}/>
    <Text style={styles.star}>{menuitem.rating}</Text>
    </View>
    <View style={{flexDirection:"row"}}>
    <Icon name='back-in-time'color={colors.yellow} size={20}/>
    <Text style={styles.star}>{menuitem.time}</Text>
    </View>
    <TouchableOpacity
    onPress={() => {share()}}>    
    <View style={{flexDirection:"row"}} >
    <Icon name='share'color={colors.yellow} size={20}/>
    <Text style={styles.star} > share</Text>
    </View>
    </TouchableOpacity>
    </View>
      <Text style={styles.head}>Ingredients :</Text>

      <Text style={styles.title}>
       {menuitem.ingredients}
      </Text>
    </ScrollView>
  );
};

export default Menudetails;
const styles = StyleSheet.create({
  container: {flex:1, padding: 20, backgroundColor: '#fff'},

  item: {
    width: '100%',
    height: 250,
  },
  bgImage: {
    width: '100%',
    height: '40%',
  },
  star:{
    fontSize:15,
    fontWeight:"700",
    color:"#000"
  },
  title: {
    fontSize: 15,
    marginTop: 2,
    color: '#000',
    padding: 5,
  },
  price: {
    fontSize: 15,
    marginTop: 10,
    color: '#000',
    padding: 10,
  },
  head:{
    fontSize:18,
    marginTop:5,
    color: '#000',
    fontWeight:"700"
  }
});
