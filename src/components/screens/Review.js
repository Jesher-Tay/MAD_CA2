import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView, Button, Platform } from 'react-native';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function Review() {
    const [image, setImage] = useState(null);
    const [invisible, setInvisible] = useState(true);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
            allowsEditing: true,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setInvisible(false);
        }
    };
    
    return(
        <SafeAreaView>
            <View className='flex-col divide-y'>
                <View className='flex-row w-full p-2' >
                    <View
                        className='justify-center w-1/4 aspect-square'>
                        <TouchableOpacity className='flex-row items-center justify-center w-full h-full bg-[#888888]' onPress={pickImage}>
                            {invisible && <Entypo className='' name="camera" size={24} color="black" />}
                            {image && <Image source={{ uri: image }} className='w-full h-full rounded-lg' />}
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row items-center p-2 w-3/4'>
                        <TextInput maxLength={50} placeholder='Title' className='text-base font-semibold w-full h-full'/>
                    </View>
                </View>
                <View className='p-2 h-20'>
                    <TextInput className='w-full h-full' placeholder='Address'/>
                </View>
                <View className='p-2 h-48'>
                    <TextInput className='w-full h-full' multiline={true} placeholder='Description'/>
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