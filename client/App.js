import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './component/Header.js';
import Drawer from './component/navigation/Drawer.js'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation.js';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {

  return (
    <NavigationContainer initialRouteName="Home" ref={navigationRef}>
      <Header />
      <Drawer />
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
