import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, Profile, Review } from '../screens';
import StackNavigator from './StackNavigator.js';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';


function BottomNav() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='Review'
            screenOptions={{
            }}>
            <Tab.Screen
                name='Explore' 
                component={StackNavigator} 
                options={{
                    headerShown: false, 
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Feather name="map" size={24} color={tabInfo.focused ? "#007AFF" : "#8e8e93"} />
                        )
                    }
                }} />

            <Tab.Screen
                name='Review' 
                component={Review}
                options={{
                    title: 'Write a Review',
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons name="pencil-outline" size={24} color={tabInfo.focused ? "#007AFF" : "#8e8e93"} />
                        )
                    }
                }}
                />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <EvilIcons name="user" size={32} color={tabInfo.focused ? "#007AFF" : "#8e8e93"} />
                        )
                    }
                }} />
        </Tab.Navigator>
    );
}

export default BottomNav;