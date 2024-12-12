import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import Home from '../screens/Home';
import home from '../assets/home.png';
import movie from '../assets/movie.png';
import reel from '../assets/reel.png';
import video from '../assets/video.png';
import audio from '../assets/music.png';
import search from '../assets/search.png';

const BottomTab = () => {
  const headerShown = {headerShown: false};
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          let itemColor = '#515150';
          if (route?.name == 'HomeStack') {
            icon = home;
          } else if (route?.name == 'Notification') {
            icon = audio;
          } else if (route?.name == 'Chats') {
            icon = video;
          } else if (route?.name == 'Rewards') {
            icon = movie;
          } else if (route?.name == 'ProfileStack') {
            icon = reel;
          } else if (route?.name == 'Search') {
            icon = search;
          }
          return (
            <View
              style={{
                padding: 8,
                margin:
                  route?.name == 'HomeStack' || route?.name == 'Search' ? 5 : 0,
                borderRadius: 12,
                backgroundColor:
                  route?.name == 'HomeStack' || route?.name == 'Search'
                    ? focused
                      ? '#C04a84'
                      : '#333333'
                    : 'transparent',
                alignItems: 'center',
                height: 50,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                tintColor={
                  route?.name == 'HomeStack' || route?.name == 'Search'
                    ? 'white'
                    : focused
                    ? '#C04a84'
                    : 'white'
                }
                source={icon}
                style={{
                  height: route?.name == 'HomeStack' ? 30 : 20,
                  width: route?.name == 'HomeStack' ? 30 : 20,
                }}
              />
            </View>
          );
        },

        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          borderTopColor: 'transparent',
          shadowColor: 'transparent',
          height: 65,
          paddingBottom: 10,
          position: 'absolute',
          elevation: 0, // Remove shadow for Android
          borderTopWidth: 0, // Remove border for iOS
        },
        tabBarItemStyle: {
          backgroundColor:
            route?.name == 'HomeStack' || route?.name == 'Search'
              ? 'transparent'
              : '#333333',
          borderTopLeftRadius: route?.name == 'Notification' ? 10 : 0,
          borderBottomLeftRadius: route?.name == 'Notification' ? 10 : 0,
          borderTopRightRadius: route?.name == 'ProfileStack' ? 10 : 0,
          borderBottomRightRadius: route?.name == 'ProfileStack' ? 10 : 0,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeStack" component={Home} options={headerShown} />
      <Tab.Screen name="Notification" component={Home} options={headerShown} />
      <Tab.Screen name="Chats" component={Home} options={headerShown} />
      <Tab.Screen name="Rewards" component={Home} options={headerShown} />
      <Tab.Screen name="ProfileStack" component={Home} options={headerShown} />
      <Tab.Screen name="Search" component={Home} options={headerShown} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
  },
  tabBarStyle: {
    // padding: 10,
    height: 65,
    // shadowColor: colors.GREY,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
