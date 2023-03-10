import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Explore, Eatery, WishList } from '../screens';
import ReviewDetails from '../screens/ReviewDetails';
import { Entypo } from '@expo/vector-icons';

function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Explore_Home'>
      <Stack.Screen name='Explore_Home' component={Explore}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name='Eatery' component={Eatery}
        options={{
          headerBackImage: () => <Entypo name='chevron-left' size={32} color='black' />,
          headerBackTitleVisible: false,
        }} />
      <Stack.Screen name='WishList' component={WishList}
        options={{
          headerBackImage: () => <Entypo name='chevron-left' size={32} color='black' />,
          headerBackTitleVisible: false,
        }} />

    </Stack.Navigator>
  );
}

export default StackNavigator;