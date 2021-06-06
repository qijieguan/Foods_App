import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './component/Header.js';
import Home from './component/Home.js';
import Menu from './component/Menu.js';
import Order from './component/Order.js';
import Footer from './component/Footer.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './RootNavigation.js';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer initialRouteName="Home" ref={navigationRef}>
      <Header />
      <Tab.Navigator> 
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Menu" component={Menu}/>
        <Tab.Screen name="Order" component={Order}/>
      </Tab.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  }
});

export default App;
