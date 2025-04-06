import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengeScreen from './ChallengeScreen';

const Stack = createStackNavigator();

const ChallengeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChallengeMain" component={ChallengeScreen} />
    </Stack.Navigator>
  );
};

export default ChallengeStack;
