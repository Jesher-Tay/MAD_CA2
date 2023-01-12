import React, { useState, useEffect, useRef, Component } from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView, Dimensions, UIManager, findNodeHandle } from 'react-native';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Eatery() {
  // remove tab when click on stack navigator
  const navigation = useNavigation();
  useEffect (() => {
    navigation.getParent().setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent().setOptions({tabBarStyle: undefined});
  }, [navigation]);

  //Used for the scrollview to top and to review section
  const scrollToSection = useRef();

  const [measurement, setMeasurements] = useState({width: 0, height: 0, x: 0, y: 0});
  console.log(measurement);

  const [active, setActive] = useState('heart-outlined');

  return (
    <SafeAreaView>
      <View className='flex-col justify-center'>
        <ScrollView
          scrollEventThrottle={16}
          horizontal={true}
          contentContainerStyle={{flexDirection: 'row'}}
          className='w-full h-56 gap-1'>
          <Image className='w-56 h-full' source={require('../../../Images/ice.jpg')}/>
          <Image className='w-56 h-full' source={require('../../../Images/ice.jpg')}/>
          <Image className='w-56 h-full' source={require('../../../Images/ice.jpg')}/>
        </ScrollView>
        <View classname='h-36 flex-col'>
          <Text className='text-lg font-bold'>Eatery Name</Text>
          <Text className='text-base font-bold'>16 Reviews • 29 Wishlisted</Text>
          <Text className='text-base font-light'>Main • Halal/Non-Halal • Cuisine • Takeaway Options</Text>
          <Text className='text-base font-light'>Regoin • General Area • Distance • ~$10/pax</Text>
        </View>
        <View className='flex-row px-2 justify-start gap-2'>
          <TouchableOpacity onPress={() => scrollToSection.current.scrollTo({ y: 0, animated: true})} className='flex-col'>
            <Text className='font-bold text-base'>Overview</Text>
            <View className='h-1 w-18 bg-[#FFC0CB] rounded'></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => scrollToSection.current.scrollTo({ y: measurement.measurement.y, animated: true})} className='flex-col'>
            <Text className='font-bold text-base'>Review</Text>
            <View className='h-1 w-18 bg-[#FFC0CB]'></View>
          </TouchableOpacity>
        </View>
        <View className='h-0.5 w-full bg-[#888888]'></View>
        <ScrollView 
          ref={scrollToSection}
          contentContainerStyle={{}}
          className='h-[47%] overflow-scroll'
          scrollEventThrottle={16}>
            <View className='px-2 py-2'>
              <View className='flex-row py-2'>
                <Entypo name="location-pin" size={32} color="black" />
                <Text className='pl-2 font-light text-sm'>
                  17 Petir Road
                  {"\n"}
                  #01-03/04 Hillion Mall
                </Text>
              </View>
              <View className='flex-row py-2'>
                <Entypo name="clock" size={32} color="black" />
                <Text className='pl-2 font-light text-sm'>
                Today
                {"\n"}
                11:30 am - 10:00 pm
                </Text>
              </View>
              <View className='flex-row py-2'>
                <MaterialIcons name="attach-money" size={32} color="black" />
                <Text className='pl-2 self-center font-light text-sm'>
                  ~$10/pax
                </Text>
              </View>
              <View className='flex-row py-2'>
              <Feather name="phone" size={28} color="black" />
                <Text className='pl-2 self-center font-light text-sm underline decoration-[#FFA0B1]'>
                  +65 1234 5678
                </Text>
              </View>
              <View className='flex-row py-2'>
              <Feather name="globe" size={28} color="black" />
                <Text className='pl-2 self-center font-light text-sm underline decoration-[#FFA0B1]'>
                  www.eatery.com
                </Text>
              </View>
            </View>
            <View onLayout={({nativeEvent}) => {
                  setMeasurements({
                    measurement: nativeEvent.layout
                  })
                }} 
                className='w-11/12 self-center divide-y'>
              <Text className='font-bold text-base py-2'>Reviews</Text>
              <View className='py-2'>
                <View className='flex-row justify-between items-center'>
                  <TouchableOpacity className='flex-row'>
                    <Image className='w-11 h-11 rounded-full' source={require('../../../Images/ice.jpg')}/>
                    <View className='flex-col'>
                      <Text className='font-bold text-base'>User Name</Text>
                      <Text className='font-light text-sm'>Level 8 reviewer, 189 reviews</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity className=''>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <Image className='w-full h-64' source={require('../../../Images/ice.jpg')}/>
                  <View className='flex-row px-1'>
                    <TouchableOpacity className='' onPress={ () => setActive('heart')}>
                      <Entypo name= {active} size={40} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className=''>
                      <Feather name="message-square" size={36} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className=''>
                      <EvilIcons name="share-google" size={42} color="black" />
                    </TouchableOpacity>
                  </View>
                <View className=''>
                  <Text className='font-bold'>Title</Text>
                  <Text className='font-light'>Description</Text>
                </View>
              </View>
              <View className='py-2'>
                <View className='flex-row justify-between items-center'>
                  <TouchableOpacity className='flex-row'>
                    <Image className='w-11 h-11 rounded-full' source={require('../../../Images/ice.jpg')}/>
                    <View className='flex-col'>
                      <Text className='font-bold text-base'>User Name</Text>
                      <Text className='font-light text-sm'>Level 8 reviewer, 189 reviews</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity className=''>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <Image className='w-full h-64' source={require('../../../Images/ice.jpg')}/>
                <View className='flex-row justify-between px-1'>
                  <View className='flex-row'>
                    <TouchableOpacity className='' onPress={ () => setActive ('heart')}>
                      <Entypo name= {active} size={40} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className=''>
                      <Feather name="message-square" size={36} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className=''>
                      <EvilIcons name="share-google" size={42} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View className=''>
                  <Text className='font-bold'>Title</Text>
                  <Text className='font-light'>Description</Text>
                </View>
              </View>
            </View>
        </ScrollView>
        <View classname='w-full border-t-4'>
          <View className='flex-row justify-between self-center w-11/12'>
            <TouchableOpacity>
              <Ionicons name="pencil-outline" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}