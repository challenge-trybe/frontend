import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Home = () => {
  return (<View></View>);
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
