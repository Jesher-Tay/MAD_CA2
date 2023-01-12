import React from 'react';
import { Text, View, TextInput, SectionList, Image, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CardTem(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("WishList")} className='flex-col w-52 h-56 border-2 rounded border-[#999999] border-solid mx-1'>
            <View className='flex-1'>
                <Image className='w-full h-full' source={props.imageUri}/>
            </View>
            <View className='flex-1 ml-1'>
                <Text className='text-lg font-bold mt-2.5 mb-0.5'>{props.title}</Text>
                <Text className='font-semibold'>{props.revNum}</Text>
                <Text className='font-light my-0.5'>{props.des}</Text>
            </View>
        </TouchableOpacity>
    )
}