import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import BottomTab from './BottomTab';

const AppNavigator = () => {
  const defaultOption = {drawerItemStyle: {display: 'none'}};

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '100%',
          },
        }}
        backBehavior="history"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="BottomTab"
          component={BottomTab}
          options={defaultOption}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
