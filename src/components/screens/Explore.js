import React from 'react';
import { Text, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { EvilIcons, Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import CardRow from '../CardRow.js';
import CardRowTemp from '../CardRowTemp.js'; 

export default function Explore() {
  return (
    <SafeAreaView>
      <View className='flex-col justify-center'>
        <View className='justify-center items-center h-20 w-full'>
          <TextInput
            className='border-2 border-[#bbbbbb] px-2 rounded-full w-11/12 h-14'
            placeholder='Search'
          />
        </View>
          <ScrollView
            scrollEventThrottle={16}
            className='h-[89%] overflow-scroll'
            >
            <CardRowTemp
              name={"Popular in"}
              name2={"Current Location"}
              imageUri={require('../../../Images/nandos.jpg')}
              imageUri2={require('../../../Images/burger.jpg')}
              imageUri3={require('../../../Images/pasta.jpg')}
              title={"Nandos"}
              title2={'Five Guys'}
              title3={'Pastamania'}
              revNum={'45 Reviews'}
              revNum2={'45 Reviews'}
              revNum3={'45 Reviews'}
              des={'Description of the restaurant...'}
              des2={'Description of the restaurant...'}
              des3={'Description of the restaurant...'}
            />
            <CardRow
              name={'What\'s'}
              name2={'Trending'}
              imageUri={require('../../../Images/nandos.jpg')}
              imageUri2={require('../../../Images/burger.jpg')}
              imageUri3={require('../../../Images/pasta.jpg')}
              title={"Nandos"}
              title2={'Five Guys'}
              title3={'Pastamania'}
              revNum={'45 Reviews'}
              revNum2={'45 Reviews'}
              revNum3={'45 Reviews'}
              des={'Description of the restaurant...'}
              des2={'Description of the restaurant...'}
              des3={'Description of the restaurant...'}
            />
            <CardRow
              name={'Newly Opened'}
              imageUri={require('../../../Images/nandos.jpg')}
              imageUri2={require('../../../Images/burger.jpg')}
              imageUri3={require('../../../Images/pasta.jpg')}
              title={"Nandos"}
              title2={'Five Guys'}
              title3={'Pastamania'}
              revNum={'45 Reviews'}
              revNum2={'45 Reviews'}
              revNum3={'45 Reviews'}
              des={'Description of the restaurant...'}
              des2={'Description of the restaurant...'}
              des3={'Description of the restaurant...'}
            />
            <CardRow
              name={'Newly Opened'}
              imageUri={require('../../../Images/nandos.jpg')}
              imageUri2={require('../../../Images/burger.jpg')}
              imageUri3={require('../../../Images/pasta.jpg')}
              title={"Nandos"}
              title2={'Five Guys'}
              title3={'Pastamania'}
              revNum={'45 Reviews'}
              revNum2={'45 Reviews'}
              revNum3={'45 Reviews'}
              des={'Description of the restaurant...'}
              des2={'Description of the restaurant...'}
              des3={'Description of the restaurant...'}
            />
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}