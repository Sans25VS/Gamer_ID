import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import DatingScreen from './screens/DatingScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import SocialFeedScreen from './screens/SocialFeedScreen';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Dating" component={DatingScreen} />
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Tab.Screen name="Social Feed" component={SocialFeedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
