import {
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
  FlatList,
  Image,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';

//   import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation();

  const screens = [
    {
      id: 3,
      screenName: 'Home',
      goto: 'Analytics&Reporting',
    },
    {
      id: 8,
      screenName: 'Artists',
      goto: 'Settings',
      options: true,
    },
    {
      id: 6,
      screenName: 'Languages',
      goto: 'ContactUs',
    },
    {
      id: 7,
      screenName: 'Subscribe',
      goto: 'ContactUs',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#333333'}}>
      <TouchableOpacity style={{margin: 20, marginLeft: 10}}>
        <Image
          tintColor={'white'}
          style={{width: 30, height: 30}}
          source={require('../assets/close.png')}
        />
      </TouchableOpacity>
      <DrawerContentScrollView
        contentContainerStyle={{flex: 1}}
        {...props}
        showsVerticalScrollIndicator={false}>
        <FlatList
          //   contentContainerStyle={{marginTop: 10}}
          data={screens}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '85%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={[
                  styles.drawerItem,

                  {flexDirection: 'row', alignItems: 'center'},
                ]}
                onPress={() => {}}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 16,
                    color: index == screens.length - 1 ? '#C04a84' : 'white',
                  }}>
                  {item.screenName}
                </Text>
                {index == screens.length - 1 && (
                  <Image
                    resizeMode="contain"
                    tintColor={'#C04A84'}
                    style={{width: 10, height: 10, marginLeft: 5}}
                    source={require('../assets/rightArrow.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
        />
      </DrawerContentScrollView>
      <Text style={{textAlign: 'center', marginBottom: 20}}>V 3.4.2</Text>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    // borderBottomColor: colors.BORDER,
    // borderBottomWidth: 0.5,
    marginVertical: 1,
  },
});
