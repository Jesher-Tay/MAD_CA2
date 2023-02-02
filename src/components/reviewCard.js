import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { FlatList, Modal, Pressable } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/AuthContext';

export default ReviewCards = () => {
    const { user, getReview, reviewData, image} = useAuth();
    
    useEffect(() => {
        getReview();
    }, [image, user])

    return (
        <>
            <FlatList style={{width: '100%', height: '50%'}}
                contentContainerStyle={{ flexDirection: 'row' , justifyContent: 'space-evenly'}}
                data={reviewData}
                renderItem={({item, index}) => 
                // <Text>{item.data().Caption}</Text>
                    <Pressable style={{height:120, width:120}}>
                        {({ 
                            isPressed 
                        }) => {
                            return <Image source={{uri: `${item.data().imageURL}`}} key={index} style={{height: 120, width: 120, opacity: isPressed ? 0.5 : 1}}/>
                        }}
                    </Pressable>
            }
            />
        </>
    )
}