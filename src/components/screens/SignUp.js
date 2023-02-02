import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { Input, Pressable, Icon } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks/AuthContext";

export default function SignUp(props) {
  const { signUp, user } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignUp() {
    try{
      if (username !== '' && email !== '' && password !== '') {
        await signUp(email, password, username);
      } else {

      }
    } catch(error){
      console.log(error);
    }
  }

  
  return (
    <SafeAreaView>
      <View>
        <ScrollView
        scrollEventThrottle={16}
        className='w-full h-full p-4 flex-col'>
          <View className='flex-col justify-center content-center'>
            <View className="items-center">
            <Text className="font-bold text-xl">Username</Text>
              <Input
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
                // className="font-semibold border-2 border-[#bbbbbb] px-2 rounded-full w-11/12 h-10"
              />
              <Text className="font-bold text-xl">Email</Text>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                // className="font-semibold border-2 border-[#bbbbbb] px-2 rounded-full w-11/12 h-10"
              />
              <Text className='font-bold text-xl'>Password</Text>
                <Input
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='Password'
                // className="font-semibold border-2 border-[#bbbbbb] px-2 rounded-full w-11/12 h-10"
                secureTextEntry
              />
            </View>
              <TouchableOpacity
                onPress={handleSignUp}
                className='w-11/12 h-12 rounded-xl justify-center self-center items-center bg-[#f0246c] border-2 border-solid border-[#f0246c]'>
                <Text className='font-semibold text-white'>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity className='w-11/12 h-12 rounded-xl border-2 border-gray-500 justify-center self-center' onPress={() => navigation.navigate('Login')}>
                <Text className='font-light text-lg text-[#f0246c] self-center'>Login</Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}