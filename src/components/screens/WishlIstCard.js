import React from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { styled } from 'nativewind';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ReviewScreen() {
    return (
      <ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{flexDirection: 'row', justifyContent: 'space-between', flexWrap:'wrap'}}
        className='overflow-scroll gap-0.5'>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
            <View className='w-32 h-32'>
              <Image className='w-full h-full' source={require('../../../Images/ice.jpg')}/>
            </View>
      </ScrollView>
    );
}
