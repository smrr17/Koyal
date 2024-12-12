import {View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      }}>
      <MaterialCommunityIcons
        name="drag-horizontal-variant"
        size={20}
        color={'white'}
      />
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          paddingLeft: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
          }}>
          Good Afternoon
        </Text>
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          paddingHorizontal: 15,
          backgroundColor: '#C12a83',
        }}>
        <Text>Login</Text>
      </View>
    </View>
  );
};

export default Header;
