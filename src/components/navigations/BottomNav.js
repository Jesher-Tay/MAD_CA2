import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, DailyFeed, Review, Profile, WishList } from '../screens';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StackNavigator from './StackNavigator.js';
import OtherProfileStackNav from './OtherProfileStackNav';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';

import { useAuth } from '../../../hooks/AuthContext';

import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();


function BottomNav() {
    const { createReview, user, image, caption, address, desc } = useAuth();

    const createPost = async () => {
        try {
            await createReview(image, caption, address, desc);
        } catch (err) {
            console.log(err);
        }
    }

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
                                <TouchableOpacity onPress={createPost}><Text className='text-blue-500 font-semibold'>Post</Text></TouchableOpacity>
                            </View>
                        )
                    }
                }}
                />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    headerTitle: 'username',
                    headerLeft: () => {
                        return(
                        <TouchableOpacity className='flex-col px-2 justify-center items-center' onPress={() => signOut(auth)}>
                            <Text className='font-semibold text-base text-red-400'>Log Out</Text>
                        </TouchableOpacity>
                        )
                    },
                    headerRight: () => {
                        return (
                            <View className='px-2'>
                                <TouchableOpacity><EvilIcons name='gear' size={32} color='black'/></TouchableOpacity>
                            </View>
                        )
                    },
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