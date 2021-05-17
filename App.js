import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack' 
import Home from './screens/Home.js';
import WelCome from './screens/WelCome.js';
import Loging from './screens/Loging';
import Loading from './screens/Loading';
import Register from './screens/Register';
import Posts from './screens/Posts';
import Profile from './screens/Profile';
import Message from './screens/Message';


 export default class App extends React.Component {
  render() {
    return (
      <Register/>
    );
  }
} 





