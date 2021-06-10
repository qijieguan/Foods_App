import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './component/Header.js';
import BottomTab from './component/navigation/BottomTab.js';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation.js';

const App = () => {

  return (
    <NavigationContainer initialRouteName="Home" ref={navigationRef}>
      <Header />
      <BottomTab />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: 'orange',
    height: 60
  },
  tabText: {
    color: 'white',
  }
});

export default App;
