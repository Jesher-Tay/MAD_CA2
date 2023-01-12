/**
 * Author: Tay Jesher
 * Student ID: P2228242
 * Class: DIT/FT/1B/07
 */

import React from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';

import BottomNav from './src/components/navigations/BottomNav.js';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  );
}