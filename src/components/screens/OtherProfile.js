import React, { useEffect } from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';



function OtherReviewScreen() {
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
  
  function OtherWishListScreen() {
    return (
      <ScrollView 
        scrollEventThrottle={16}
        contentContainerStyle={{flexDirection: 'row', justifyContent: 'space-between', flexWrap:'wrap'}}
        className='overflow-scroll'>
          <View className='w-48 h-56 border-[#888888] border-2 rounded-lg'>
            <Image className='w-full h-2/3' source={require('../../../Images/pasta2.jpg')}/>
            <Text className='text-lg'>Pasta2</Text>
            <Text className='test-base'>Penis Joke here</Text>
          </View>
          <View className='w-48 h-56 border-[#888888] border-2 rounded-lg'>
            <Image className='w-full h-2/3' source={require('../../../Images/pasta2.jpg')}/>
            <Text className='text-lg'>Pasta2</Text>
            <Text className='test-base'>Penis Joke here</Text>
          </View>
          <View className='w-48 h-56 border-[#888888] border-2 rounded-lg'>
            <Image className='w-full h-2/3' source={require('../../../Images/pasta2.jpg')}/>
            <Text className='text-lg'>Pasta2</Text>
            <Text className='test-base'>Penis Joke here</Text>
          </View>
          <View className='w-48 h-56 border-[#888888] border-2 rounded-lg'>
            <Image className='w-full h-2/3' source={require('../../../Images/pasta2.jpg')}/>
            <Text className='text-lg'>Pasta2</Text>
            <Text className='test-base'>Penis Joke here</Text>
          </View>
      </ScrollView>
    );
  }

export default function OtherProfile() {
  const navigation = useNavigation();
    useEffect (() => {
        navigation.getParent().setOptions({tabBarStyle: {display: 'none'}});
        return () => navigation.getParent().setOptions({tabBarStyle: undefined});
    }, [navigation]);
    const Tabs = createMaterialTopTabNavigator();
    return (
      <SafeAreaView>
        <View className='flex-col justify-center'>
          <View className='flex-row border-b-2 h-20 w-full justify-between items-center'>
            <Text className='text-lg'>@username1234</Text>
            <EvilIcons name='gear' size={32} color='black'/>
          </View>
          <View className='justify-evenly basis-1/3'>
            <View className='w-24 h-24 self-center'>
              <Image className='w-full h-full rounded-full' source={require('../../../Images/Pizza.jpg')}/>
            </View>
            <Text className='text-xl text-center'>Firstname LastName</Text>
            <Text className='text-base text-center'>Level 1 Reviewer ??? City</Text>
            <View className='flex-row justify-evenly'>
              <View className='flex-col'>
                <Text className='text-base text-center'>0</Text>
                <Text className='text-lg text-center'>Reviews</Text>
              </View>
              <View className='flex-col'>
                <Text className='text-base text-center'>0</Text>
                <Text className='text-lg'>Followers</Text>
              </View>
              <View className='flex-col'>
                <Text className='text-base text-center'>0</Text>
                <Text className='text-lg text-center'>Following</Text>
              </View>
            </View>
          </View>
          <View className='h-96'>
              <NavigationContainer independent={true}>
                <Tabs.Navigator>
                  <Tabs.Screen name='Reviews' component={OtherReviewScreen} />
                  <Tabs.Screen name='WishList' component={OtherWishListScreen} />
                </Tabs.Navigator>
              </NavigationContainer>
          </View>
        </View>
      </SafeAreaView>
    );
}