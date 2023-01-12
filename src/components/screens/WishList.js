import React, { useEffect } from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WishList() {
    const navigation = useNavigation();
    useEffect (() => {
      navigation.getParent().setOptions({tabBarStyle: {display: 'none'}});
      return () => navigation.getParent().setOptions({tabBarStyle: undefined});
    }, [navigation]);

    return(
        <SafeAreaView>
            <View className='flex-col'>
                <View>
                    <Text className='font-bold text-xl px-4'>Cuisine</Text>
                </View>
                <ScrollView 
                    scrollEventThrottle={16}>
                    <View className='flex-col px-2 divide-y'>
                        <View className='py-4'>
                            <View className='flex-row'>
                                <View classname='flex-col'>
                                    <Text className='text-lg font-bold'>Eatery Name</Text>
                                    <Text className='text-base font-bold'>16 Reviews • 29 Wishlisted</Text>
                                    <Text className='text-base font-light'>Main • Halal/Non-Halal • Cuisine • Takeaway Options</Text>
                                    <Text className='text-base font-light'>Regoin • General Area • Distance • ~$10/pax</Text>
                                </View>
                                <Ionicons name="bookmark" size={32} color="black" />
                            </View>
                            <ScrollView
                                horizontal={true}
                                scrollEventThrottle={16}
                                >
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View className='py-4'>
                            <View className='flex-row'>
                                <View classname='flex-col'>
                                    <Text className='text-lg font-bold'>Eatery Name</Text>
                                    <Text className='text-base font-bold'>16 Reviews • 29 Wishlisted</Text>
                                    <Text className='text-base font-light'>Main • Halal/Non-Halal • Cuisine • Takeaway Options</Text>
                                    <Text className='text-base font-light'>Regoin • General Area • Distance • ~$10/pax</Text>
                                </View>
                                <Ionicons name="bookmark" size={32} color="black" />
                            </View>
                            <ScrollView
                                horizontal={true}
                                scrollEventThrottle={16}
                                >
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View className='py-4'>
                            <View className='flex-row'>
                                <View classname='flex-col'>
                                    <Text className='text-lg font-bold'>Eatery Name</Text>
                                    <Text className='text-base font-bold'>16 Reviews • 29 Wishlisted</Text>
                                    <Text className='text-base font-light'>Main • Halal/Non-Halal • Cuisine • Takeaway Options</Text>
                                    <Text className='text-base font-light'>Regoin • General Area • Distance • ~$10/pax</Text>
                                </View>
                                <Ionicons name="bookmark" size={32} color="black" />
                            </View>
                            <ScrollView
                                horizontal={true}
                                scrollEventThrottle={16}
                                >
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
                                    <Image className='w-full h-3/5' source={require('../../../Images/pasta2.jpg')}/>
                                    <View className='ml-1'>
                                        <Text className='text-lg font-bold mt-2.5 mb-0.5'>Chicken</Text>
                                        <Text className='font-light my-0.5'>Lorem Ipsum</Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}