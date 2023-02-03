/**
 * Author: Tay Jesher
 * Student ID: P2228242
 * Class: DIT/FT/1B/07
 */

import React from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import './config/firebase';

import { AuthProvider } from './hooks/AuthContext';
import RootNavigator from './src/components/navigations/rootNav';

export default function App() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
        <AuthProvider>
          <NativeBaseProvider>
            <RootNavigator />
          </NativeBaseProvider>
        </AuthProvider>
    </NavigationContainer>
  );
}