import {View, Text, Image} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

const SectionCards = ({data, isView, isTitle, isDrawer}) => {
  return (
    <View
      style={{
        marginTop: 20,
        height: 300,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '500'}}>
            {data?.title}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: '#ffffff95',
            fontWeight: '500',
            marginLeft: 5,
          }}>
          See More
        </Text>
      </View>
      <FlatList
        style={{marginTop: 20}}
        horizontal
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={{color: 'white'}}>No Data Found</Text>
          </View>
        }
        data={data?.data || []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 200,
                width: 130,
                marginRight: 15,
                marginBottom: 10,
              }}>
              <Image
                source={
                  item.image
                    ? {uri: item.image}
                    : {uri: 'https://via/placeholder.com/150'}
                }
                style={{width: '100%', height: '100%'}}
              />
              <Text
                style={{
                  marginTop: 10,
                  color: 'white',
                }}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <Entypo name="eye" size={10} color="white" />
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 12}}>{item.no_of_views}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SectionCards;
