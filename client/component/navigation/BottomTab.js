import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../Home.js';
import MenuStack from './MenuStack.js';
import Offer from '../Offer.js';
import Order from '../Order.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBarOptions={{
          style: styles.tabView,
          activeTintColor: "white",
          labelStyle: {
            fontSize: 16,
          }
        }}> 
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="home-outline"
                size={30}
                color="white"
              />
            ),
          }}
        />
        <Tab.Screen name="Menu" component={MenuStack}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="fast-food-outline"
                size={38}
                color="white"
              />
            ),
          }}
        />
        <Tab.Screen name="Offer" component={Offer}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="creation"
                size={30}
                color="white"
              />
            ),
          }}
        />
        <Tab.Screen name="Order" component={Order}
          options={{
            tabBarIcon: () => (
              <AntDesign
                name="shoppingcart"
                size={30}
                color="white"
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: 'orange',
    height: 70,
  },
  tabText: {
    color: 'white',
  }
});

export default BottomTab;