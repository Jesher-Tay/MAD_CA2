import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { FlatList, Modal, Pressable, SectionList } from 'native-base';
import { useAuth } from '../../hooks/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default ReviewCards = () => {
    const { user, getReview, reviewData, image, modalData, setModalData, cap, imageUrl, add, des, setCap, setAdd, setImageUrl, setDes} = useAuth();
    
    useEffect(() => {
        getReview();
    }, [image, user]);

    const handlePress = (item) => {
        console.log(item.data().imageURL);
        setModalData(true);
        console.log(item.data().Caption);
        setCap(item.data().Caption);
        setImageUrl(item.data().imageURL);
        setAdd(item.data().Address);
        setDes(item.data().Description);
        return (
            <DynamicModal />
        )
    }

    const closeModal = () => {
        setModalData(false);
        setCap('filler');
        setImageUrl({uri: 'https://firebasestorage.googleapis.com/v0/b/mad-ca3-54f72.appspot.com/o/images%2Flol.jfif?alt=media&token=8300b08e-a853-4879-9524-f5f169f19ec8'});
        setAdd('filler');
        setDes('filler');
    }

    const DynamicModal = () => {
        const { reviewData, image, modalData, setModalData, caption} = useAuth();
    
        return (
            <Modal isOpen={modalData} onClose={() => closeModal()}>
                <Modal.Content width="5/6" height='5/6' fade={true}>
                    <Modal.CloseButton />
                    <Modal.Header>{cap}</Modal.Header>
                    <Modal.Body>
                        <Image source={{uri: `${imageUrl}`}} style={{height: 300, width: 300}}/>
                        <Text>{add}</Text>
                        <Text>{des}</Text>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        )
    }


    return (
        <>
            <FlatList style={{width: '100%', height: '100%'}}
                contentContainerStyle={{ flexDirection: 'row' , justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}
                data={reviewData}
                renderItem={({item}) => 
                // <Text>{item.data().Caption}</Text>
                        <Pressable style={{height:120, width:120, paddingTop: 10}} onPress={() => handlePress(item)}>
                            {({ 
                                isPressed 
                            }) => {
                                return (
                                <>
                                        <Image source={{uri: `${item.data().imageURL}`}} key={item.id} style={{height: 120, width: 120, opacity: isPressed ? 0.5 : 1}}/>
                                        <DynamicModal />
                                </>
                                )
                            }}
                        </Pressable>
            }
            />
        </>
    )
}