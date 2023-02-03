import React, { useEffect, useState } from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { FlatList, Modal, Pressable, SectionList } from 'native-base';
import { useAuth } from '../../../hooks/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function ReviewDetails({route}) {
    const item = route.params.item;
    console.log(item.data());
    const navigation = useNavigation();
    useEffect (() => {
      navigation.getParent().setOptions({tabBarStyle: {display: 'none'}});
      return () => navigation.getParent().setOptions({tabBarStyle: undefined});
    }, [navigation]);
    return (
        <SafeAreaView className='flex justify-center content-center'>
            <Text>{item.data().Caption}</Text>
        </SafeAreaView>
    )
}