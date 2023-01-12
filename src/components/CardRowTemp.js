import React from 'react';
import { Text, View, TextInput, SectionList, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import CardTem from './CardTem.js';


export default function CardRowTemp(props) {

    return (
        <SafeAreaView>
            <View className='flex-row items-center justify-between'>
              <Text className='text-lg mx-2 my-3'>{props.name} <Text className='text-[#FFC0CB]'>{props.name2}</Text></Text>
              <Text className='mx-3 my-3'>See More</Text>
            </View>
            <View className='flex-row items-start'>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                className='space-x-2'
              >
                <CardTem
                  imageUri={props.imageUri}
                  title={props.title}
                  revNum={props.revNum}
                  des={props.des}
                   />
                <CardTem
                  imageUri={props.imageUri2}
                  title={props.title2}
                  revNum={props.revNum2}
                  des={props.des2}
                   />
                <CardTem 
                  imageUri={props.imageUri3}
                  title={props.title3}
                  revNum={props.revNum3}
                  des={props.des3} 
                   />
              </ScrollView>
            </View>
        </SafeAreaView>
    )
}