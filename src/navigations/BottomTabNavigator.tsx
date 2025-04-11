import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
import ChallengeStack from '../screens/challenge';
import Icon from '../components/Icon';
import colors from '../styles/colors';
import CommunityStack from '../screens/community';
import MyPageStack from '../screens/mypage';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: '홈',
    component: HomeStack,
    icon: 'home-outline',
  },
  {
    name: '챌린지',
    component: ChallengeStack,
    icon: 'flag-outline',
  },
  {
    name: '커뮤니티',
    component: CommunityStack,
    icon: 'chatbox-outline',
  },
  {
    name: '마이페이지',
    component: MyPageStack,
    icon: 'person-outline',
  },
];

const tabIcon =
  (name: string) =>
  ({focused}: {focused: boolean}) =>
    (
      <Icon
        name={name}
        size={24}
        color={focused ? colors.blue500 : colors.gray600}
      />
    );

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue300,
        tabBarInactiveTintColor: colors.gray600,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}>
      {tabScreens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: tabIcon(screen.icon),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
  },
  tabBarLabel: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 12,
  },
  tabBarIcon: {
    marginTop: 8,
    width: 24,
    height: 24,
  },
});
