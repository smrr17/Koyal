import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import Store from './src/Store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
