import React from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function DailyFeed() {
    const navigation = useNavigation();
    return(
        <SafeAreaView>
            <View className='flex-col justify-center'>
                <Text className='font-bold text-3xl px-4 pt-4'>Daily Feed</Text>
                <View className='p-2'>
                <ScrollView scrollEventThrottle={16} className='flex-col h-[93%]'>
                  <View className='divide-y'>
                    <View className='py-4'>
                      <View className='flex-row justify-between items-center'>
                        <TouchableOpacity className='flex-row' onPress ={() => navigation.navigate('OtherProfile')}>
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
                          <TouchableOpacity className=''>
                            <Entypo name= 'heart-outlined' size={40} color="black" />
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
                        <Text numberOfLines={2} className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, magna ut semper egestas, quam augue consequat massa, vel cursus elit quam ac enim. Sed lacinia est lorem, eu tincidunt arcu mollis sit amet. Aenean et quam ut est consequat venenatis. Integer consequat convallis justo eu malesuada. Vivamus et nulla eu massa convallis pellentesque. Suspendisse justo urna, tincidunt id tellus eu, consectetur sagittis neque. Ut eget feugiat nisl. Vivamus bibendum mauris imperdiet enim tristique consequat ut quis diam. Maecenas in egestas nulla. Donec ligula arcu, tincidunt vitae elit id, molestie rutrum lorem. Maecenas fermentum facilisis mauris, vel posuere dolor pellentesque vel. Morbi sapien metus, tristique ac dictum in, gravida a turpis. Morbi lacinia sem a ornare consequat. Aenean in interdum ipsum. Nullam pellentesque dolor ac fermentum tincidunt.</Text>
                      </View>
                    </View>
                    <View className='py-4'>
                      <View className='flex-row justify-between items-center'>
                        <TouchableOpacity className='flex-row' onPress ={() => navigation.navigate('OtherProfile')}>
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
                          <TouchableOpacity className=''>
                            <Entypo name= 'heart-outlined' size={40} color="black" />
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
                        <Text numberOfLines={2} className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, magna ut semper egestas, quam augue consequat massa, vel cursus elit quam ac enim. Sed lacinia est lorem, eu tincidunt arcu mollis sit amet. Aenean et quam ut est consequat venenatis. Integer consequat convallis justo eu malesuada. Vivamus et nulla eu massa convallis pellentesque. Suspendisse justo urna, tincidunt id tellus eu, consectetur sagittis neque. Ut eget feugiat nisl. Vivamus bibendum mauris imperdiet enim tristique consequat ut quis diam. Maecenas in egestas nulla. Donec ligula arcu, tincidunt vitae elit id, molestie rutrum lorem. Maecenas fermentum facilisis mauris, vel posuere dolor pellentesque vel. Morbi sapien metus, tristique ac dictum in, gravida a turpis. Morbi lacinia sem a ornare consequat. Aenean in interdum ipsum. Nullam pellentesque dolor ac fermentum tincidunt.</Text>
                      </View>
                    </View>
                    <View className='py-4'>
                      <View className='flex-row justify-between items-center'>
                        <TouchableOpacity className='flex-row' onPress ={() => navigation.navigate('OtherProfile')}>
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
                          <TouchableOpacity className=''>
                            <Entypo name= 'heart-outlined' size={40} color="black" />
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
                        <Text numberOfLines={2} className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, magna ut semper egestas, quam augue consequat massa, vel cursus elit quam ac enim. Sed lacinia est lorem, eu tincidunt arcu mollis sit amet. Aenean et quam ut est consequat venenatis. Integer consequat convallis justo eu malesuada. Vivamus et nulla eu massa convallis pellentesque. Suspendisse justo urna, tincidunt id tellus eu, consectetur sagittis neque. Ut eget feugiat nisl. Vivamus bibendum mauris imperdiet enim tristique consequat ut quis diam. Maecenas in egestas nulla. Donec ligula arcu, tincidunt vitae elit id, molestie rutrum lorem. Maecenas fermentum facilisis mauris, vel posuere dolor pellentesque vel. Morbi sapien metus, tristique ac dictum in, gravida a turpis. Morbi lacinia sem a ornare consequat. Aenean in interdum ipsum. Nullam pellentesque dolor ac fermentum tincidunt.</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
        </SafeAreaView>
    )
}