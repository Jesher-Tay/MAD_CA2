import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View, ImageBackground } from "react-native";
import { Input, Pressable, Icon } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks/AuthContext";
import { Entypo, Feather } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';


export default function Login() {
  const { login, user } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await login(email, password);
      } else {

      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <ImageBackground source={require('../../../Images/work.png')} resizeMode='cover' styles={{flex: 1, justifyContent: 'center'}}>
      <SafeAreaView>
        <View>
          <Svg className='absolute top-24 shadow-md shadow-black self-center'
            width={360}
            height={538}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M0 30C0 13.431 13.431 0 30 0h300c16.569 0 30 13.431 30 30v477.106c0 20.355-19.84 34.801-39.212 28.551l-300-96.791A30 30 0 0 1 0 410.315V30Z"
              fill="#fff"
            />
          </Svg>
          <Svg className='absolute top-24 self-center'
              width={360}
              height={215}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M0 20C0 8.954 8.954 0 20 0h320c11.046 0 20 8.954 20 20v171s-80 52-126 0-90-52-136 0-98 0-98 0V20Z"
                fill="#FEA2C3"
              />
          </Svg>
            <View className='w-full h-full py-28 px-6'>
                <View className='flex-col justify-center'>
                  <View className="py-2">
                    <Text className='self-center font-bold text-2xl py-4'>Login</Text>
                    <Text className="font-bold text-xl px-2 py-1">Email</Text>
                    <Input
                      placeholderTextColor={'#FFFFFF'}
                      focusOutlineColor={'#FFFFFF'}
                      h={16}
                      variant='underlined'
                      size='2xl'
                      InputLeftElement={<Entypo name="mail" size={28} color="#FFFFFF" />}
                      placeholder=" Email"
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                    />
                    <Text className='font-bold text-xl px-2 py-1'>Password</Text>
                    <Input
                      focusOutlineColor={'#f76599'}
                      h={16}
                      variant='underlined'
                      size='2xl'
                      InputLeftElement={<Feather name="lock" size={28} color="#f76599" />}
                      InputRightElement={
                        <Pressable onPress={() => setShowPassword(!showPassword)}>
                          <Icon
                            as={
                              <Entypo name={showPassword ? 'eye' : 'eye-with-line'} />
                            }
                            size={6}
                            mr='2'/>
                        </Pressable>}
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                    />
                  </View>
                  <View className='py-4'>
                    <TouchableOpacity
                        onPress={handleLogin}
                        className='w-11/12 h-16 rounded-full justify-center self-end items-center bg-[#f0246c]'>
                        <Text className='font-semibold text-lg text-white'>Login</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity className='w-9/12 h-10 rounded-full justify-center self-end items-center bg-[#f0246c] border-2 border-solid border-[#f0246c]' onPress={() => navigation.navigate('SignUp')}>
                      <Text className='font-semibold text-base text-white'>Don't have An Account? Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}