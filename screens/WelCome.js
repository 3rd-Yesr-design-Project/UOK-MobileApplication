import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile'
import Home from './Home'
import Messages from './Message'
import Posts from './Posts'
import Result from './Result'


const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Post" component={Posts} />
        <Tab.Screen name="Result" component={Result}/>
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
