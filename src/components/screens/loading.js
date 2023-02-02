import { View, Text, SafeAreaView } from 'react-native';

const Loading = () => {
    return (
        <SafeAreaView>
            <View className='justify-center'>
                <Text className='text-3xl font-semibold self-center'>Loading...</Text>
            </View>
        </SafeAreaView>
    );
}

export default Loading;