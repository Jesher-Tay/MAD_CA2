import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DailyFeed, OtherProfile } from '../screens';
import { Entypo } from '@expo/vector-icons';

function OtherProfileStackNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='DailyFeed_feed'>
        <Stack.Screen name='DailyFeed_feed' component={DailyFeed}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name='OtherProfile' component={OtherProfile}
            options={{
                headerBackImage: () => <Entypo name='chevron-left' size={32} color='black' />,
                headerBackTitleVisible: false,
            }} />
    </Stack.Navigator>
  );
}

export default OtherProfileStackNav;