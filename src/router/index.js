/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, StateMap, StatesList} from '../pages';
import { BottomNavigator } from '../component';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown : false}}/>
      <Tab.Screen name="StatesList" component={StatesList} options={{headerShown : false}}/>
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StateMap"
        component={StateMap}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Router;
