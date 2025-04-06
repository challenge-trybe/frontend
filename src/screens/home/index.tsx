import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
