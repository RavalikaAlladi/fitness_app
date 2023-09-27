import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './screens/landing';
import LoginScreen from './screens/login';
import TrainerAndUser from './screens/TrainerAndUser';
import SignUpScreen from './screens/signUp';
import UserProfile from './screens/user';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    );
  } 
}


const AppNavigator = createSwitchNavigator({ 
 "main": LandingScreen,
 "login": LoginScreen, 
 "traineranduser": TrainerAndUser,
 "signUp": SignUpScreen,
  "user": UserProfile
})

const AppContainer = createAppContainer(AppNavigator);

