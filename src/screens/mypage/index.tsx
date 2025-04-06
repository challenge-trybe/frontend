import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyPageScreen from './MyPageScreen';

const Stack = createStackNavigator();

const MyPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPageMain" component={MyPageScreen} />
    </Stack.Navigator>
  );
};

export default MyPageStack;
