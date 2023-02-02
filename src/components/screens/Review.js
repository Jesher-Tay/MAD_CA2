import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView, Button, Platform } from 'react-native';
import { Input } from 'native-base';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import { useAuth } from '../../../hooks/AuthContext';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Review() {
    const { pickImage, image, invisible, caption, setCaption, address, setAddress, desc, setDesc } = useAuth();

    const handleImagePicked = async () => {
        try {
            await pickImage();
        } catch (err) {
            console.log(err);
        }
    }
    
    return(
        <SafeAreaView>
            <View className='flex-col divide-y'>
                <View className='flex-row w-full p-2' >
                    <View
                        className='justify-center w-1/4 aspect-square'>
                        <TouchableOpacity className='flex-row items-center justify-center w-full h-full bg-[#888888]' onPress={handleImagePicked}>
                            {invisible && <Entypo className='' name="camera" size={24} color="black" />}
                            {image && <Image source={{ uri: image }} className='w-full h-full rounded-lg' />}
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row items-center p-2 w-3/4'>
                        <Input
                            maxLength={50}
                            placeholder='Caption'
                            className='text-base font-semibold'
                            variant='unstyled'
                            size='2xl'
                            value={caption}
                            onChangeText={(text) => setCaption(text)}
                            />
                    </View>
                </View>
                <View className='p-2 h-20 justify-center'>
                    <Input 
                    className='' 
                    placeholder='Address'
                    variant='unstyled'
                    size='lg'
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                    />
                </View>
                <View className='p-2 h-48'>
                    <Input 
                        className='' 
                        multiline={true} 
                        placeholder='Description'
                        size='lg'
                        variant='unstyled'
                        value={desc}
                        onChangeText={(text) => setDesc(text)}/>
                </View>
                <View className='p-2 h-20'>
                    <TouchableOpacity className='w-full h-full flex-row items-center justify-between'>
                        <View className='flex-row items-center'>
                            <Text className='font-bold text-base px-2'>Add to Wish List</Text>
                            <Text className='font-light'>Select List</Text>
                        </View>
                        <Entypo name="chevron-right" size={32} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}