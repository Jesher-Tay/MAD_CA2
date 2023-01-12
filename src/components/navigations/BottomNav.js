import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, DailyFeed, Review, Profile, WishList } from '../screens';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StackNavigator from './StackNavigator.js';
import OtherProfileStackNav from './OtherProfileStackNav';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import WishListStackNav from './WishListStackNav';


function BottomNav() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='Profile'
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
                    name='DailyFeed'
                    component={OtherProfileStackNav}
                    options={{
                    headerShown: false,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons name="ios-radio-sharp" size={24} color={tabInfo.focused ? "#007AFF" : "#8e8e93"} />
                        )
                    },
                }}/>

            <Tab.Screen
                name='Review' 
                component={Review}
                options={{
                    headerTitle: 'Write a Review',
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons name="pencil-outline" size={24} color={tabInfo.focused ? "#007AFF" : "#8e8e93"} />
                        )
                    },
                    headerRight: () => {
                        return (
                            <View className='px-2'>
                                <TouchableOpacity><Text className='text-blue-500 font-semibold'>Post</Text></TouchableOpacity>
                            </View>
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