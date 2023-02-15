import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';
import data from '../data/data';
import MenuItem from '../components/MenuItem';
const Home = (props) => {
  console.log('dataaa', data);
  const Item = ({item}) => (
    <View style={styles.item}>
      <Image source={{uri: item.image}} style={styles.bgImage} />

      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
  
  const renderItem = ({item}) => {
    console.log('item', item);
    return <MenuItem item={item}   navigation={props.navigation} />;
  };
 
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ () => {
          return (
            <View
              style={{
                height: 15,
                width: "100%",
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20,backgroundColor:"#fff"},

 
});
