import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommunityScreen from './CommunityScreen';

const Stack = createStackNavigator();

const CommunityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CommunityMain" component={CommunityScreen} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
