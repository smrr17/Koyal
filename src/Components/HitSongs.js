import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const HitSongs = ({data}) => {
  return (
    <FlatList
      style={{marginTop: 20}}
      showsVerticalScrollIndicator={false}
      data={data}
      contentContainerStyle={{flexGrow: 1}}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return (
          <View
            style={{
              // height: 150,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              overflow: 'hidden',
              marginHorizontal: 10,
              marginBottom: 10,
            }}>
            <Image
              source={{uri: item.image}}
              style={{width: 50, height: 50, borderRadius: 10}}
            />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={{color: 'white'}}>{item.name}</Text>
              <Text style={{color: '#ffffff99', fontSize: 12}}>
                {item?.artists[0].name}
              </Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="play" size={30} color="#C04a84" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 5}}>
              <AntDesign name="hearto" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 5}}>
              <Entypo name="dots-three-vertical" size={20} color="white" />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default HitSongs;
